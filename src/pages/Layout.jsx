import { Outlet, Link } from "react-router-dom";
import React from 'react';
import logo from"../../public/logo.webp"

function Layout() {
  return (
   <>
    <header className="py-3">
     <div className="container">
        <div className="header d-flex flex-wrap justify-content-between align-items-center">
            <Link href="/" className="d-flex align-items-center">
                <img className="logo" alt="logo" src={logo}/>
            </Link>
           
               {/* <p className="fw-bold text-primary h5 mb-0">Book your appointment in just ₹190</p> */}
          
        </div>
     </div>
    </header>

    
<Outlet />
   </>
  );
}

export default Layout;
