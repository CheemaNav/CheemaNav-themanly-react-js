import React, { useState, useEffect } from 'react';
import axios from '../api/axiosInstance';
import { useFormik } from 'formik';
import { bookAppointmentSchema } from '../utils/validations/FormValidation';
import InputField from './common/InputFIeld';
import SwalAlert from './common/SwalAlert';
import SelectField from './common/SelectField';
import TextArea from './common/TextArea';
import Swal from 'sweetalert2';
import PaymentComponent from './common/PaymentComponent';

const problemOptions = [
  "Erectile Dysfunction",
  "⁠Early Ejaculation",
  "⁠Low Sperm Count",
  "⁠Low Testosterone",
  "⁠Loss of Libido",
  "Gut Issues",
  "Liver Health",
  "⁠Diabetes",
  "Hair loss",
  "Other"
];

const BannerForm = () => {
  const [otp, setOtp] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  // Sync state with localStorage
  useEffect(() => {
    const paymentStatus = localStorage.getItem('showPayment') === 'true';
    setShowPayment(paymentStatus);
  }, []);

  // Helper to sync `showPayment` with localStorage
  const togglePayment = (value) => {
    setShowPayment(value);
    localStorage.setItem('showPayment', value.toString());
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      mobile: '',
      age: '',
      city: '',
      problem: [],
      problem_other: '',
      userMessage: '',
      provider: 'mobile',
      userRole: 'ROLE_USER'
    },
    validationSchema: bookAppointmentSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  const handleSubmit = async (values) => {
    try {
      const problemValue = values.problem.includes("Other")
        ? values.problem_other
          ? `Other, ${values.problem_other}`
          : "Other"
        : values.problem.join(', ');

      const submissionData = {
        ...values,
        problem: problemValue,
        problemCategory: problemValue
      };
      delete submissionData.problem_other;

      const response = await axios.post('/auth/signup', submissionData, {
        headers: {
          Authorization: " ",
          'DEVICE-TYPE': 'Web'
        }
      });

      if (response.status >= 200 && response.status < 300 && response.data?.responseStatus) {
        const userId = response.data?.responseObject?.id;

        if (userId) {
          localStorage.setItem('userId', userId);
        }
        localStorage.setItem('userName', values.fullName);
        localStorage.setItem('email', values.email);
        localStorage.setItem('contact', values.mobile);

        SwalAlert({
          title: 'Success!',
          message: 'Your form was successfully submitted. Please verify the OTP.',
          type: 'success',
        });

        showOtpPopup();
      } else {
        throw new Error("Unexpected API response.");
      }
    } catch (error) {
      SwalAlert({
        title: 'Oops!',
        message: 'Something went wrong. Please try again.',
        type: 'error',
      });
    } finally {
      formik.setSubmitting(false);
    }
  };

  const showOtpPopup = () => {
    const contactNumber = localStorage.getItem('contact');
    Swal.fire({
      title: 'Please enter OTP sent to your phone',
      html: `
        <label class="number">${contactNumber}</label>
        <input type="text" id="otp-input" className="swal2-input" placeholder="Enter OTP">
      `,
      confirmButtonText: 'Verify OTP',
      showCancelButton: true,
      preConfirm: async () => {
        const otpValue = Swal.getPopup().querySelector('#otp-input').value;
        if (!otpValue) {
          Swal.showValidationMessage('Please enter the OTP');
          return false;
        }

        try {
          Swal.fire({
            title: 'Verifying OTP...',
            text: 'Please wait while we verify your OTP.',
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
              Swal.showLoading();
            }
          });

          await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay

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
            const token = response.data.responseObject.bearerToken;

            setOtp(otpValue);
            localStorage.setItem('authToken', token);
            togglePayment(true); // Sync localStorage and state
            Swal.close(); // Close loader
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'Invalid OTP. Please try again.',
              icon: 'error',
            });
          }
        } catch (error) {
          Swal.fire({
            title: 'Error!',
            text: 'Invalid OTP. Please try again.',
            icon: 'error',
          });
        }
        return false;
      }
    });
  };

  return (
    <>
 
        <form className="row g-3 p-4 rounded border" onSubmit={formik.handleSubmit}>
          <p className="fw-bold text-white text-center h4 mb-0">
            <span className='d-block'>Start your wellness journey today</span>
          </p>
          <small className='text-center text-white mt-2 mb-3 px-0'>
            Please share this short information about yourself <br /> and our experts will reach out to you very soon.
          </small>

          <InputField label="Your Name*" name="fullName" type="text" formik={formik} />
          <InputField label="Your Age*" name="age" type="text" formik={formik} />
          <InputField label="Your Phone Number*" name="mobile" type="text" formik={formik} />
          <InputField label="Your Email Address" name="email" type="text" formik={formik} />
          <InputField label="City" name="city" type="text" formik={formik} />
          <SelectField label="Issue you are facing" name="problem" formik={formik} options={problemOptions} />

          {formik.values.problem.includes("Other") && (
            <TextArea label="Other Problem" name="problem_other" type="text" formik={formik} showError={true} />
          )}

          <TextArea label="Your message" name="userMessage" type="text" formik={formik} />

          <div className="col-12">
            <button className="btn btn-primary w-100 py-2" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
              {formik.isSubmitting ? 'Proceed' : 'Next'}
            </button>
          </div>
        </form>
     

      {showPayment && <PaymentComponent />}
    </>
  );
};

export default BannerForm;
