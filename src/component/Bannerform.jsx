import React, { useState } from 'react';
import axios from 'axios';

const Bannerform = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    age: '',
    city: '',
    problem: '',
    userMessage: '',
    provider: 'local', // Static field
    userRole: 'ROLE_USER' // Static field
  });
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      const submissionData = {
        ...formData,
        problemCategory: formData.problem 
      };
      // Submit the form data to the signup API
      const response = await axios.post('/api/themanly/auth/signup', submissionData, {
        headers: {
          Authorization: " 1",  
          'DEVICE-TYPE': 'Web'
        }
      });

      if (response.status === 200) {
        // On success, send OTP to the phone number
        setIsOtpSent(true);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  // Handle OTP verification
  const handleOtpVerification = async () => {
    try {
      // Verify the OTP using the verifyOtp API
      const response = await axios.post(`/api/themanly/auth/verifyOtp?channel=`, {
        otp,
        mobile: formData.mobile
      });

      if (response.status === 200) {
        // On successful OTP verification
        setIsOtpVerified(true);
        alert('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <>
      <form className="row g-3 p-4 rounded border" onSubmit={handleSubmit}>
        <p className="fw-bold text-white text-center h6">Book your appointment @ just ₹ 499/-</p>
        
        <div className="col-md-6 col-12">
          <label className="form-label">Name*</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
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
            name="mobile"
            value={formData.mobile}
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
            name="userMessage"
            value={formData.userMessage}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-primary w-100 py-2" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      {/* OTP Input Section */}
      {isOtpSent && !isOtpVerified && (
        <div className="mt-3">
          <label>Enter OTP sent to your phone</label>
          <input
            type="text"
            className="form-control"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="btn btn-primary w-100 py-2 mt-2" onClick={handleOtpVerification}>
            Verify OTP
          </button>
        </div>
      )}

      {/* Success message */}
      {isOtpVerified && (
        <div className="alert alert-success mt-3">
          <p>Form submitted successfully!</p>
        </div>
      )}
    </>
  );
};

export default Bannerform;
