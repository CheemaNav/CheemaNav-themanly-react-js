import React, { useState } from "react";

const PaymentComponent = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName') || "John Doe");
    const [email, setEmail] = useState(localStorage.getItem('email') || "john.doe@example.com");
    const [contact, setContact] = useState(localStorage.getItem('contact') || "123456789");
    const [amount, setAmount] = useState(500); 

    // Call Spring Boot API to create an order
    const createOrder = async () => {
        try {
            const amountInPaise = 499 * 100;
            const response = await fetch(`https://api.themanly.in/themanly/payment/generatePaymentRequest?amount=${amountInPaise}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NiIsImlhdCI6MTcyOTE4MDA1NSwiZXhwIjoxNzMwMDQ0MDU1fQ.zxFMkJAHmstWQCbS4q6t9hJ3ZAQLHSNMPGa3-urtclCVUjO4cO-iVQnjAe5KUjpuoS-tJj2SJb4IeHLEkCJ0xA"
                }
            });
    
            const order = await response.json();
    
            // Log the full API response to ensure it contains the expected data
            console.log("API Response:", order);
    
            // Check if the orderId is present in the responseObject
            if (!order.responseObject || !order.responseObject.orderId) {
                throw new Error('Invalid order data');
            }
    
            // Return the orderId from responseObject
            return order.responseObject.orderId;
        } catch (error) {
            console.error("Error creating order:", error);
            return null; // Return null in case of error
        }
    };

    const handlePayment = async () => {
        const orderId = await createOrder(); // Get the order ID

        if (!orderId) {
            alert("Failed to create order. Please try again.");
            return; // Exit if orderId is not available
        }

        const options = {
            key:  "rzp_live_kkj0s2mhMNFrxC", 
            amount: 1000 * 100, // Example amount in INR, adjust accordingly
            currency: "INR",
            name: userName, 
            image: "https://example.com/your_logo",
            order_id: orderId, // Use the orderId from the response
            handler: async function (response) {
                alert("Payment successful!");
                alert("Payment ID: " + response.razorpay_payment_id);
                alert("Order ID: " + response.razorpay_order_id);
                alert("Signature: " + response.razorpay_signature);

                // Verify the payment on the backend
                try {
                    const verifyPayment = await fetch("https://api.themanly.in/themanly/verifyPayment", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            paymentId: response.razorpay_payment_id,
                            orderId: response.razorpay_order_id,
                            signature: response.razorpay_signature,
                        }),
                    });

                    const result = await verifyPayment.json();
                    if (result.success) {
                        alert("Payment verified successfully!");
                    } else {
                        alert("Payment verification failed!");
                    }
                } catch (error) {
                    console.error("Error verifying payment:", error);
                    alert("Payment verification failed!");
                }
            },
            prefill: {
                name: "Dharmender",
                email: "kumardharm234@gmail.com",
                contact: 7580052613,
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new window.Razorpay(options);

        rzp1.on("payment.failed", function (response) {
            alert("Payment Failed");
            alert(response.error.description);
        });

        rzp1.open();
    };

    return (
        <div className="payment_btn">
            <span className="h2">Razorpay Payment Integration</span>
            <button className="btn btn-primary w-100" onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default PaymentComponent;
