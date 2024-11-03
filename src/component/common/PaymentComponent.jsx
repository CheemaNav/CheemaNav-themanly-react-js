import React, { useState } from "react";

const PaymentComponent = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName') || "John Doe");
    const [email, setEmail] = useState(localStorage.getItem('email') || "john.doe@example.com");
    const [contact, setContact] = useState(localStorage.getItem('contact') || "123456789");
    const [amount, setAmount] = useState(1);
    const [paymentStatus, setPaymentStatus] = useState(""); // Track payment status message
    const [showPaymentBtn, setShowPaymentBtn] = useState(true); // Control visibility of payment button

    const createOrder = async () => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) throw new Error("Token not found in localStorage");
            const amountInPaise = amount * 100;
            const response = await fetch(`https://api.themanly.in/themanly/payment/generatePaymentRequest?amount=${amountInPaise}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const order = await response.json();
            if (!order.responseObject || !order.responseObject.orderId) {
                throw new Error('Invalid order data');
            }
            return order.responseObject.orderId;
        } catch (error) {
            console.error("Error creating order:", error);
            return null;
        }
    };

    const handlePayment = async () => {
        const orderId = await createOrder();
        if (!orderId) {
            setPaymentStatus("Failed to create order. Please try again.");
            return;
        }

        const options = {
            key: "rzp_live_kkj0s2mhMNFrxC",
            amount: amount * 100,
            currency: "INR",
            name: userName,
            image: "https://themanly.in/assets/manly-logo-DfGF_eZi.webp",
            order_id: orderId,
            handler: async function (response) {
                try {
                    const token = localStorage.getItem('authToken');
                    const verifyPayment = await fetch("https://api.themanly.in/themanly/verifyPayment", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            paymentId: response.razorpay_payment_id,
                            orderId: response.razorpay_order_id,
                            signature: response.razorpay_signature,
                        }),
                    });

                    const result = await verifyPayment.json();
                    if (result.success) {
                        setPaymentStatus("Payment verified successfully!");
                        setShowPaymentBtn(false); // Hide the payment button after successful verification
                    } else {
                        setPaymentStatus("Payment verification failed!");
                    }
                } catch (error) {
                    console.error("Error verifying payment:", error);
                    setPaymentStatus("Payment verification failed!");
                }
            },
            prefill: {
                name: userName,
                email: email,
                contact: contact,
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new window.Razorpay(options);

        rzp1.on("payment.failed", function (response) {
            setPaymentStatus("Payment failed: " + response.error.description);
        });

        rzp1.open();
    };

    return (
        <div>
            {showPaymentBtn ? (
                <div className="payment_btn">
                    <span className="h2 mb-2">Make your payment of <strong>Rs 499</strong> here for appointment booking</span>
                    <button className="btn btn-primary w-100" onClick={handlePayment}>Pay Now</button>
                </div>
            ) : null}
            {paymentStatus && (
                <div className="payment-status payment_btn mt-3">
                    <span className="h2 mb-0">{paymentStatus}</span>
                </div>
            )}
        </div>
    );
};

export default PaymentComponent;
