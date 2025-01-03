import React, { useState, useRef, useEffect } from 'react';

const SelectField = ({ label, name, formik, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedText, setSelectedText] = useState('Select issue');
    const dropdownRef = useRef(null);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;     
        const selectedValues = formik.values[name] || [];

        if (checked) {
            formik.setFieldValue(name, [...selectedValues, value]);
            if (!selectedValues.length) {
                setSelectedText(value); // Set the button text to the first selected option
            }
        } else {
            const updatedValues = selectedValues.filter(option => option !== value);
            formik.setFieldValue(name, updatedValues);
            if (value === selectedText) {
                setSelectedText(updatedValues[0] || 'Select issue'); // Update button text if the first option is deselected
            }
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="col-md-6 col-12" ref={dropdownRef}>
            <label className="form-label">{label}</label>
            <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
                <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                >
                    {selectedText}
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
