import React, { useState } from 'react';
import axios from 'axios';

// A simple popup modal for verification
const VerificationModal = ({ isOpen, onClose, onVerify }) => {
    const [code, setCode] = useState('');

    const handleVerify = () => {
        onVerify(code); 
    };

    return (
        isOpen && (
            <div className="modal-backdrop">
                <div className="modal">
                    <h4>Enter Verification Code</h4>
                    <input
                        type="text"
                        className="form-control"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Enter verification code"
                    />
                    <button onClick={handleVerify} className="btn btn-primary mt-3">
                        Verify
                    </button>
                    <button onClick={onClose} className="btn btn-secondary mt-3">
                        Close
                    </button>
                </div>
            </div>
        )
    );
};

const Bannerform = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        age: '',
        city: '',
        problem: '',
        message: ''
    });

    const [isModalOpen, setModalOpen] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [tempFormData, setTempFormData] = useState(null); // Store form data temporarily

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Temporarily store form data and trigger phone verification
        setTempFormData(formData);

        // Step 1: Send verification code using the signup API
        try {
            const response = await axios.post('/api/themanly/auth/signup', { 
                phoneNumber: formData.phoneNumber,
                // other form data...
              }, {
                headers: {
                  'Content-Type': 'application/json',
                  'DEVICE-TYPE': 'Web',
                  'VER': '1',
                  Authorization: '-' // Placeholder for actual token if needed
                }
              });              

            if (response.status === 200) {
                setModalOpen(true); // Open modal for OTP input
            } else {
                alert('Failed to send verification code.');
            }
        } catch (error) {
            alert('An error occurred while sending verification code.');
            console.error(error);
        }
    };

    const handleVerifyCode = async (enteredCode) => {
        // Step 2: Verify the entered code using the verify OTP API
        try {
            const response = await axios.get(
                `/api/themanly/auth/verifyOtp?channel=mobile&otp=${enteredCode}&userId=7`, // Assuming userId is 7 for now
                {
                    headers: {
                        'accept': 'application/json',
                        Authorization: '-' // Placeholder for auth token if required
                    }
                }
            );

            if (response.status === 200) {
                setIsVerified(true);
                setModalOpen(false);
                alert('Phone number verified!');
                submitForm(); // Proceed to form submission after verification
            } else {
                alert('Invalid verification code.');
            }
        } catch (error) {
            alert('An error occurred during OTP verification.');
            console.error(error);
        }
    };

    const submitForm = async () => {
        // Step 3: Submit the form if OTP is verified
        try {
            const response = await axios.post(
                'https://api.example.com/submitForm',
                tempFormData, // Use the stored form data
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            if (response.status === 200) {
                alert('Form submitted successfully!');
            } else {
                alert('Failed to submit the form.');
            }
        } catch (error) {
            alert('An error occurred during form submission.');
            console.error(error);
        }
    };

    return (
        <>
            <form className="row g-3 p-4 rounded border" onSubmit={handleSubmit}>
                <p className="fw-bold text-white text-center h6">
                    Book your appointment @ just ₹ 499/-
                </p>
                <div className="col-md-6 col-12">
                    <label className="form-label">Name*</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6 col-12">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6 col-12">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6 col-12">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        className="form-control"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6 col-12">
                    <label className="form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6 col-12">
                    <label className="form-label">Problem</label>
                    <input
                        type="text"
                        className="form-control"
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-12">
                    <label className="form-label">Your message</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary w-100 py-2" type="submit">
                        Submit
                    </button>
                </div>
            </form>
            
            <VerificationModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onVerify={handleVerifyCode}
            />
        </>
    );
};

export default Bannerform;
