import React from 'react';

const SelectField = ({ label, name, formik, options }) => (
    <div className="col-md-6 col-12">
        <label className="form-label">{label}</label>
        <select
            className={`form-control ${formik.touched[name] && formik.errors[name] ? "is-invalid" : ""}`}
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        >
            <option value="" label={`Select issue`} />
            {options?.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
        {formik.touched[name] && formik.errors[name] ? (
            <div className="invalid-feedback">{formik.errors[name]}</div>
        ) : null}
    </div>
);

export default SelectField;
