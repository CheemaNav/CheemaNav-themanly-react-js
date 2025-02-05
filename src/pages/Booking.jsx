import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        city: '',
        mobile: '',
        email: '',
        userQuery: '',
        userContactText: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Submitting Form...',
            text: 'Please wait while we submit your form.',
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const payload = {
            name: formData.name,
            age: formData.age,
            city: formData.city,
            mobile: formData.mobile,
            email: formData.email,
            userQuery: formData.userQuery,
            userContactText: formData.userContactText
        };

        try {
            const response = await fetch("https://api.themanly.in/themanly/auth/addUserQuery", {
                method: "POST",
                headers: {
                    "accept": "*/*",
                    "Authorization": "6437efab-9a11-11ed-b9db-0a54e18c7910",
                    "DEVICE-TYPE": "Web",
                    "VER": "1",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Form Submitted!',
                    text: 'Your form was submitted successfully! Our team will connect with you soon.',
                    confirmButtonText: 'OK'
                }).then(() => {
                    setFormData({ name: '', age: '', city: '', mobile: '', email: '', userQuery: '', userContactText: '' });
                    window.location.href = '/'; // Redirect to home page
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: 'There was an issue submitting your query. Please try again.'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error Occurred',
                text: 'An error occurred. Please try again later.'
            });
        }
    };

    return (
        <section className='mt-5 py-5 booking_page'>
            <div className='container mt-5'>
                <div className='text-center'>
                    <img src='./images/booking_form.png' className='col-md-5 mb-4 rounded form_img' alt='Booking Form' />
                </div>
                <div className='text-center mt-2'>
                    <h1 className='text-center mb-0 h2'>You are just a step away from having <br/>a crazy sexual drive!</h1>
                    <p>Please share your information with us!</p>
                </div>
                <div className="col-md-5 col-12 p-4 bg-white shadow-sm rounded mx-auto banner">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className='form-label'>Name *</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Age *</label>
                            <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>City *</label>
                            <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Mobile No *</label>
                            <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Email</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>What is your issue? *</label>
                            <input type="text" className="form-control" name="userQuery" value={formData.userQuery} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>When can we contact you? (date & time) *</label>
                            <input type="text" className="form-control" name="userContactText" value={formData.userContactText} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-dark w-100">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;
