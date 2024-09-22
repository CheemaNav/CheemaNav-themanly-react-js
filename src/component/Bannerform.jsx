import React from 'react';

const Bannerform = () => {
    return(
        <>
        <form className="row g-3 p-4 rounded border">
        <p className='fw-bold text-white text-center h6'>Book your appointment @ just ₹ 499/-</p>
            <div className="col-md-6 col-12">
                <label className="form-label">Name*</label>
                <input type="text" className="form-control" id="validationDefault01"  required />
            </div>
            <div className="col-md-6 col-12">
                <label  className="form-label">Email</label>
                <input type="email" className="form-control" id="validationDefault02" required />
            </div>
            <div className="col-md-6 col-12">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="validationDefault01"  required />
            </div>
            <div className="col-md-6 col-12">
                <label className="form-label">Age
                </label>
                <input type="email" className="form-control" id="validationDefault02" />
            </div>

            <div className="col-12">
                <label className="form-label">Your message</label>
                <textarea className="form-control" rows="3"></textarea>
            </div>
  
            <div className="col-12">
                <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
            </div>
            </form>
        </>
    );
  };
  
  export default Bannerform;