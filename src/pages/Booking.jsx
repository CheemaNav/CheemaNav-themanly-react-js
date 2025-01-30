import React from 'react';

const Booking = () => {
    return (
        <>
            <section className='mt-5 py-5 booking_page'>
                <div className='container mt-5'>
                    <div className='text-center'>
                    <img src='./images/booking_form.png' className='col-md-5 mb-4 rounded form_img' />
                    </div>
                    <div className='text-center mt-2'>
                        <h1 className='text-center mb-0 h2'>Welcome to TheManly.in</h1>
                        <p>
                            You are just a step away from having a healthy sexual drive !!
                        </p>
                    </div>
                    <div class="col-md-5 col-12 p-4 bg-white shadow-sm rounded mx-auto banner bg-white">
                        <form>
                            <div class="mb-3">
                                <label className='form-label'>Name *</label>
                                <input type="text" class="form-control"  required />
                            </div>
                            <div class="mb-3">
                            <label className='form-label'>Age *</label>
                                <input type="number" class="form-control" required />
                            </div>
                            <div class="mb-3">
                            <label className='form-label'>City *</label>
                                <input type="text" class="form-control"  required />
                            </div>
                            <div class="mb-3">
                            <label className='form-label'>Mobile No *</label>
                                <input type="tel" class="form-control"  required />
                            </div>
                            <div class="mb-3">
                            <label className='form-label'>Email</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="mb-3">
                            <label className='form-label'>What is your issue? *</label>
                                <input class="form-control"  required />
                            </div>
                            <div class="mb-3">
                            <label className='form-label'>When can we contact you ? (date & time) *</label>
                                <input type="text" class="form-control" required />
                            </div>
                            <button type="submit" class="btn btn-dark w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Booking;