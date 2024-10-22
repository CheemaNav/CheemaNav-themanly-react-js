import React, { useState } from 'react';
import axios from '../api/axiosInstance';
import { useFormik } from 'formik';
import { bookAppointmentSchema } from '../utils/validations/FormValidation';
import InputField from './common/InputFIeld';
import SwalAlert from './common/SwalAlert';
import SelectField from './common/SelectField';
import TextArea from './common/TextArea';
import Swal from 'sweetalert2';
import PaymentComponent from './common/PaymentComponent'; // Import the PaymentComponent

const problemOptions = [
  "Erectile Dysfunction",
  "⁠Early Ejaculation",
  "⁠Low Sperm Count",
  "⁠Low Testosterone",
  "⁠Loss of Libido",
  "Gut Issues",
  "Liver Health",
  "⁠Diabetes",
  // "⁠Hair Fall",
  // "⁠Obesity",
 
 
  // "⁠Stamina & Strength",

  "Other"
];

const Bannerform = () => {

  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showPayment, setShowPayment] = useState(false); // State to show PaymentComponent

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
  
      const response = await axios.post('/auth/signup', submissionData, {
        headers: {
          Authorization: " ",
          'DEVICE-TYPE': 'Web'
        }
      });
  
      if (response.status >= 200 && response.status < 300 && response.data?.responseStatus) {
        const userId = response.data?.responseObject?.id; // Get userId from response
  
        if (userId) {
          // Store userId in localStorage
          localStorage.setItem('userId', userId);
        }
  
        // Store user data in localStorage
        localStorage.setItem('userName', values.fullName);
        localStorage.setItem('email', values.email);
        localStorage.setItem('contact', values.mobile);

        SwalAlert({
          title: 'Success!',
          message: 'Your form was successfully submitted. Please verify the OTP.',
          type: 'success',
        });
        
        setIsOtpSent(true);
        showOtpPopup();
      } else {
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
          const userId = localStorage.getItem('userId');
          const response = await axios.get(`/auth/verifyOtp`, {
            params: {
              channel: 'mobile',
              otp: otpValue,
              userId: userId
            },
            headers: {
              accept: 'application/json',
              Authorization: '-'
            }
          });
  
          if (response.status >= 200 && response.status < 300) {
            setOtp(otpValue);
            setIsOtpVerified(true);
            setShowPayment(true); // Show PaymentComponent on OTP success
            Swal.fire({
              title: 'Success!',
              text: 'OTP verified successfully!',
              icon: 'success',
              timer: 1400,
            });
          } else {
            Swal.showValidationMessage('Invalid OTP. Please try again.');
          }
        } catch (error) {
          Swal.showValidationMessage('Invalid OTP. Please try again.');
        }
        return false; 
      }
    });
  };

  return (
    <>
      {!showPayment && ( // Show BannerForm only if PaymentComponent is not showing
        <form className="row g-3 p-4 rounded border" onSubmit={formik.handleSubmit}>
          <p className="fw-bold text-white text-center h4 mb-0"><span className='d-block'>Start your wellness journey today</span></p>
          <small className='text-center text-white mt-2 mb-3 px-0'>
            Please share this short information about yourself <br/> and our experts will reach out to you very soon.
          </small>

          <InputField label="Your Name*" name="fullName" type="text" formik={formik} />
          <InputField label="Your Age*" name="age" type="text" formik={formik} />
          <InputField label="Your Phone Number*" name="mobile" type="text" formik={formik} />
          <InputField label="Your Email Address" name="email" type="text" formik={formik} />
          <InputField label="City" name="city" type="text" formik={formik} />
          <SelectField label="Issue you are facing" name="problem" formik={formik} options={problemOptions} />
          
          {formik?.values?.problem === "Other" && (
            <TextArea label="Other Problem" name="problem_other" type="text" formik={formik} showError={true} />
          )}
          
          <TextArea label="Your message" name="userMessage" type="text" formik={formik} />

          <div className="col-12">
            <button className="btn btn-primary w-100 py-2" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
              {formik.isSubmitting ? 'Proceed' : 'Next'}
            </button>
          </div>
        </form>
      )}
      
      {/* Show PaymentComponent once OTP is verified */}
      {showPayment && <PaymentComponent />}
    </>
  );
};

export default Bannerform;
