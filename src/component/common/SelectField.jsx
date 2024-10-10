import React, { useState } from 'react';

const SelectField = ({ label, name, formik, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        const selectedValues = formik.values[name] || [];

        if (checked) {
            // Add the selected option
            formik.setFieldValue(name, [...selectedValues, value]);
        } else {
            // Remove the deselected option
            formik.setFieldValue(name, selectedValues.filter(option => option !== value));
        }
    };

    return (
        <div className="col-md-6 col-12">
            <label className="form-label">{label}</label>
            <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
                <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                >
                    Select issue
                </button>
                <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                    {options?.map((option, index) => (
                        <div key={index} className="dropdown-item">
                            <label>
                                <input
                                    type="checkbox"
                                    value={option}
                                    checked={formik.values[name]?.includes(option)}
                                    onChange={handleCheckboxChange}
                                />
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            {formik.touched[name] && formik.errors[name] ? (
                <div className="invalid-feedback">{formik.errors[name]}</div>
            ) : null}
        </div>
    );
};

export default SelectField;
