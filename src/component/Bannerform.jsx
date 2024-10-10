import React, { useState } from 'react';
import axios from '../api/axiosInstance';
import { useFormik } from 'formik';
import { bookAppointmentSchema } from '../utils/validations/FormValidation';
import InputField from './common/InputFIeld';
import SwalAlert from './common/SwalAlert';
import SelectField from './common/SelectField';
import TextArea from './common/TextArea';
import Swal from 'sweetalert2';

const problemOptions = [
  "Erectile Dysfunction",
  "⁠Early Ejaculation",
  "Liver Health",
  "⁠Diabetes",
  "⁠Hair Fall",
  "⁠Obesity",
  "⁠Loss of Libido",
  "⁠Low Sperm Count",
  "⁠Stamina & Strength",
  "⁠Low Testosterone",
  "Other"
];

const Bannerform = () => {

  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      mobile: '',
      age: '',
      city: '',
      problem: [],  // Array to hold multiple selections
      problem_other: '',
      userMessage: '',
      provider: 'mobile', 
      userRole: 'ROLE_USER' 
    },
    validationSchema: bookAppointmentSchema,
    enableReinitialize: true,
    onSubmit: values => {
      handleSubmit(values);
    }
  });
  
  

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      const submissionData = {
        ...values,
        problem: values.problem.join(', '), // Convert array to comma-separated string
        problemCategory: values.problem.join(', '), 
      };
  
      // Submit the form data to the signup API
      const response = await axios.post('/auth/signup', submissionData, {
        headers: {
          Authorization: " ",
          'DEVICE-TYPE': 'Web'
        }
      });
  
      // Check if the response is a success (2xx status)
      if (response.status >= 200 && response.status < 300 && response.data?.responseStatus) {
        const userId = response.data?.responseObject?.id; // Get userId from response
  
        if (userId) {
          // Store userId in localStorage
          localStorage.setItem('userId', userId);
        }
  
        SwalAlert({
          title: 'Success!',
          message: 'Your form was successfully submitted. Please verify the OTP.',
          type: 'success',
        });
        
        // On success, send OTP to the phone number
        setIsOtpSent(true);
        showOtpPopup();
      } else {
        // If response doesn't indicate success
        throw new Error("Unexpected API response.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      SwalAlert({
        title: 'Oops!',
        message: 'Something went wrong. Please try again.',
        type: 'error',
      });
    } finally {
      formik.setSubmitting(false);
    }
  };
  

  // Show OTP popup with Swal
  // Show OTP popup with Swal
  const showOtpPopup = () => {
    Swal.fire({
      title: 'Enter OTP sent to your phone',
      html: `
        <label>Enter OTP sent to your phone</label>
        <input type="text" id="otp-input" className="swal2-input" placeholder="Enter OTP">
      `,
      confirmButtonText: 'Verify OTP',
      showCancelButton: true,
      preConfirm: async () => {
        const otpValue = Swal.getPopup().querySelector('#otp-input').value;
        if (!otpValue) {
          Swal.showValidationMessage('Please enter the OTP');
          return false; // Stop further execution if OTP is not entered
        }
  
        try {
          // Get userId from localStorage
          const userId = localStorage.getItem('userId');
  
          // Call OTP verification API
          const response = await axios.get(`/auth/verifyOtp`, {
            params: {
              channel: 'mobile',
              otp: otpValue,
              userId: userId // Use the dynamic userId stored in localStorage
            },
            headers: {
              accept: 'application/json',
              Authorization: '-'
            }
          });
  
          if (response.status >= 200 && response.status < 300) {
            // OTP verified successfully
            setOtp(otpValue);
            setIsOtpVerified(true);
            
            Swal.fire({
              title: 'Success!',
              text: 'OTP verified successfully!',
              icon: 'success',
              timer: 1400, // Optional: Set 2-second timer for the Swal alert
              willClose: () => {
                // After the Swal closes, redirect the user
                setTimeout(() => {
                  window.location.href = 'https://razorpay.me/@themanlyin?amount=n%2FUUsdogj%2F7sarE2WD13qg%3D%3D';
                }, 1400); // 2-second delay before redirecting
              }
            });
          }
           else {
            // Invalid OTP response
            Swal.showValidationMessage('Invalid OTP. Please try again.');
          }
        } catch (error) {
          // Handle error during OTP verification
          Swal.showValidationMessage('Invalid OTP. Please try again.');
        }
        return false; // Keep the popup open
      }
    });
  };
  

  

  // Handle OTP verification
  const handleOtpVerification = async (otpValue) => {
    try {
      const response = await axios.get(`/auth/verifyOtp`, {
        params: {
          channel: 'mobile',
          otp: otpValue,
          userId: 99
        },
        headers: {
          accept: 'application/json',
          Authorization: '-'
        }
      });

      if (response.status >= 200 && response.status < 300) {
        setIsOtpVerified(true);
        SwalAlert({
          title: 'Success!',
          message: 'OTP verified successfully!',
          type: 'success',
        });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      SwalAlert({
        title: 'Oops!',
        message: 'Something went wrong. Please try again.',
        type: 'error',
      });
    }
  };

  return (
    <>
      <form className="row g-3 p-4 rounded border" onSubmit={formik.handleSubmit}>
        <p className="fw-bold text-white text-center h4 mb-0"><span className='d-block'>Start your wellness journey today</span></p>
        <small className='text-center text-white mt-2 mb-3 px-0'>
        Please share this short information about yourself <br/> and our experts will reach out to you very soon.
        </small>

        <InputField
          label="Your Name*"
          name="fullName"
          type="text"
          formik={formik}
        />
          <InputField
          label="Your Age*"
          name="age"
          type="text"
          formik={formik}
        />
         <InputField
          label="Your Phone Number*"
          name="mobile"
          type="text"
          formik={formik}
        />
        <InputField
          label="Your Email Address"
          name="email"
          type="text"
          formik={formik}
        />
       
        <InputField
          label="City"
          name="city"
          type="text"
          formik={formik}
        />

        <SelectField
          label="Issue you are facing"
          name="problem"
          formik={formik}
          options={problemOptions}
        />

        {formik?.values?.problem === "Other" && (
          <TextArea
            label="Other Problem"
            name="problem_other"
            type="text"
            formik={formik}
            showError={true}
          />
        )}

        <TextArea
          label="Your message"
          name="userMessage"
          type="text"
          formik={formik}
        />

        <div className="col-12">
          <button className="btn btn-primary w-100 py-2" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
            {formik.isSubmitting ? 'Proceed' : 'Next'}
          </button>
        </div>
      </form>

      {/* Success message */}
      {isOtpVerified && (
        <div className="alert alert-success mt-3 text-center">
          <p className='mb-0'>Form submitted successfully!</p>
        </div>
      )}
    </>
  );
};

export default Bannerform;
