import React from 'react';

const InputField = ({ label, name, formik, type = 'text', showError = false }) => {
  return (
    <div className="col-md-6 col-12">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className={`form-control ${formik.touched[name] && formik.errors[name] ? "is-invalid" : ""}`}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {(showError || formik.touched[name]) && formik.errors[name] ? (
        <div className="invalid-feedback">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default InputField;
