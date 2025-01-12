import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const PaymentComponent = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName') || "John Doe");
    const [email, setEmail] = useState(localStorage.getItem('email') || "john.doe@example.com");
    const [contact, setContact] = useState(localStorage.getItem('contact') || "123456789");
    const [amount, setAmount] = useState(399); // Payment amount
    const [paymentStatus, setPaymentStatus] = useState(""); 
    const [showPopup, setShowPopup] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false); // Track payment verification status

    // Automatically show the popup when the component mounts
    useEffect(() => {
        setShowPopup(true);
    }, []);

    const createOrder = async () => { 
        try {
            const token = localStorage.getItem('authToken');
            if (!token) throw new Error("Token not found in localStorage");
            const amountInPaise = amount; // Convert to paise
            const response = await fetch(`https://api.themanly.in/themanly/payment/generatePaymentRequest?amount=${amountInPaise}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const order = await response.json();
            if (!order.responseObject || !order.responseObject.orderId || !order.responseObject.apiKey) {
                throw new Error('Invalid order data');
            }
            return { orderId: order.responseObject.orderId, apiKey: order.responseObject.apiKey };
        } catch (error) {
            console.error("Error creating order:", error);
            return null;
        }
    };

    const handlePayment = async () => {
        const orderData = await createOrder();
        if (!orderData) {
            setPaymentStatus("Failed to create order. Please try again.");
            return;
        }
    
        const { orderId, apiKey } = orderData;

        // Hide the popup before opening payment gateway
        setShowPopup(false);

        const options = {
            key: apiKey,
            amount: amount, // Convert to paise
            currency: "INR",
            name: userName,
            image: "https://themanly.in/assets/manly-logo-DfGF_eZi.webp",
            order_id: orderId,
            handler: async function (response) {
                try {
                    setIsVerifying(true); // Set to true while verifying payment
                    const token = localStorage.getItem('authToken');
                    
                    // Show loader popup while waiting for payment verification
                    Swal.fire({
                        title: 'Verifying your payment...',
                        text: 'Please wait while we verify your payment.',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        didOpen: () => {
                            Swal.showLoading();
                        },
                        customClass: {
                            popup: 'swal2-popup swal2-modal swal2-show',
                            title: 'swal2-title',
                            content: 'swal2-content',
                        },
                    });

                    // Call the verifyPayment API
                    const verifyPayment = await fetch("https://api.themanly.in/themanly/payment/verifyPayment/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            paymentId: response.razorpay_payment_id,
                            orderId: response.razorpay_order_id,
                            signature: response.razorpay_signature,
                        }),
                    });

                    const result = await verifyPayment.json();
                    if (result.success) {
                        // Update the payment status and show success message
                        setPaymentStatus("Your payment is confirmed. Our executive will contact you soon to schedule the appointment.");
                        setTimeout(() => {
                            Swal.close(); 
                            setShowPopup(true);
                            setTimeout(() => {
                                localStorage.clear();
                                        window.location.reload();
                            }, 2000);
                        }, 10); 
                    } else {
                        // Handle failure scenario
                        setPaymentStatus("Your payment is confirmed. Our executive will contact you soon to schedule the appointment.");
                        setTimeout(() => {
                            Swal.close(); 
                            setShowPopup(true); 
                            setTimeout(() => {
                                localStorage.clear();
                                        window.location.reload();
                            }, 2000);
                        }, 10); 
                    }
                } catch (error) {
                    console.error("Error verifying payment:", error);
                    setPaymentStatus("Payment verification failed!");
                    Swal.close(); // Ensure the loader is closed in case of an error
                } finally {
                    setIsVerifying(false); // Reset verification status
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
            {showPopup && paymentStatus ? (
                // Show success status in a popup after payment
                <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowPopup(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="payment-status mt-3">
                                    <span className="mb-0 text-center">{paymentStatus}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : showPopup && !isVerifying ? (
                // Show payment modal if not verifying
                <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        localStorage.clear();
                                        window.location.reload();
                                    }}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="payment_btn">
                                    <p className="mb-0 h5 otp_suc">OTP verified</p>
                                    <span className="h2 mb-2">
                                       Please make your payment of <strong>Rs 399/-</strong>  to <br/> book your appointment
                                    </span>
                                    <button className="btn btn-primary w-100" onClick={handlePayment}>
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // Show retry message if popup is closed and payment not completed
                <div className="payment_form payment_again">
                    {/* <div className="payment_btn">
                        <span className="h2 mb-3">
                         "Payment not completed. Please try again."
                        </span>
                        <button className="btn btn-primary w-100" onClick={handlePayment}>
                            Pay again
                        </button>
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default PaymentComponent;
