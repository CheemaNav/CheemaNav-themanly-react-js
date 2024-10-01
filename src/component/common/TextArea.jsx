import React from 'react';

const TextArea = ({ label, name, formik, type = 'text', showError = false }) => {
  return (
    <div className="col-12">
      <label className="form-label">{label}</label>
      <textarea
        className={`form-control ${formik.touched[name] && formik.errors[name] ? "is-invalid" : ""}`}
        rows="3"
        name={name}
        spellCheck="false"
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>

      {(showError || formik.touched[name]) && formik.errors[name] ? (
        <div className="invalid-feedback">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default TextArea;
