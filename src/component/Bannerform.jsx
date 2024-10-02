import React, { useState } from 'react';
import axios from '../api/axiosInstance';
import { useFormik } from 'formik';
import { bookAppointmentSchema } from '../utils/validations/FormValidation';
import InputField from './common/InputFIeld';
import SwalAlert from './common/SwalAlert';
import SelectField from './common/SelectField';
import TextArea from './common/TextArea';

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
      problem: '',
      problem_other: '',
      userMessage: '',
      provider: 'local', // Static field
      userRole: 'ROLE_USER' // Static field
    },
    validationSchema: bookAppointmentSchema,
    enableReinitialize: true,
    onSubmit: values => {
      handleSubmit(values)
    }
  })

  // Handle form submission
  const handleSubmit = async (values) => {
    try {

      const submissionData = {
        ...values,
        problemCategory: values.problem
      };
      // Submit the form data to the signup API
      const response = await axios.post('/auth/signup', submissionData, {
        headers: {
          Authorization: " ",
          'DEVICE-TYPE': 'Web'
        }
      });

      if (response.status === 200) {

        SwalAlert({
          title: 'Success!',
          message: 'Your form was successfully submitted.',
          type: 'success',
        });
        // On success, send OTP to the phone number
        setIsOtpSent(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      SwalAlert({
        title: 'Oops!',
        message: 'Something went wrong. Please try again.',
        type: 'error',
      });
    } finally {
      formik.setSubmitting(false)
    }
  };

  // Handle OTP verification
  const handleOtpVerification = async () => {
    try {
      // Verify the OTP using the verifyOtp API
      const response = await axios.post(`/auth/verifyOtp?channel=`, {
        otp,
        mobile: formik.values.mobile
      });

      if (response.status === 200) {
        // On successful OTP verification
        setIsOtpVerified(true);
        SwalAlert({
          title: 'Success!',
          message: 'Form submitted successfully!',
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
        <p className="fw-bold text-white text-center h6">Book your appointment @ just ₹ 499/-</p>

        <InputField
          label="Name"
          name="fullName"
          type="text"
          formik={formik}
        />
        <InputField
          label="Email"
          name="email"
          type="text"
          formik={formik}
        />
        <InputField
          label="Phone Number"
          name="mobile"
          type="text"
          formik={formik}
        />
        <InputField
          label="Age"
          name="age"
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
          label="Problem"
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
            {formik.isSubmitting ? 'Submitting...' : 'Submit'}
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
          <button type='button' className="btn btn-primary w-100 py-2 mt-2" onClick={handleOtpVerification}>
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
