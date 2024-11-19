import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from"../../public/manly-logo.webp"
import footer_logo from"../../public/footer_logo.png";

function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll event listener to toggle 'scrolled' class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
   <>
   <header className={`py-3 ${isScrolled ? 'active' : ''}`}>
     <div className="container">
     <nav className="navbar navbar-expand-lg navbar-light p-0">
  <Link to="/" className="d-flex align-items-center">
                <img className="logo" alt="logo" src={logo}/>
            </Link>
  <div className="collapse navbar-collapse justify-content-end" id="navbarText">
   
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href='tel:9755717199'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> +91 9755 7171 99 </a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href='https://api.whatsapp.com/send?phone=9755717199' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg> +91 9755 7171 99</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='mailto:Support@themanly.in'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg> Support@themanly.in</a>
      </li>
    </ul>
    
  </div>
</nav>


     </div>
    </header>
 
<Outlet />


  <footer className="text-lg-start text-white bg-dark pt-4">


    <section className="container">
      <div className="container text-md-start mt-2">
 
        <div className="row mt-3">
   
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
 
            <Link to="/"><img className=" mb-3 logo" src={footer_logo} /></Link>
           
            <p>
            All about Men's wellmess
            </p>
          </div>
 
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-2">
           
            <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
          
            <p>
              <a href="#form" className="text-white">Home</a>
            </p>
            <p>
              <a href="#form" className="text-white">Book Appointment</a>
            </p>
            <p>
              <a href="#Treatments" className="text-white">Treatments</a>
            </p>
            <p>
              <a href="#Experts" className="text-white">Our Experts</a>
            </p>
            <p>
              <a href="#faq" className="text-white">FAQ</a>
            </p>
          </div>
      
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2 contact">

            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><a href='tel:9755717199'><i className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg></i>+91 9755 7171 99</a></p>
<p><a href='https://api.whatsapp.com/send?phone=9755717199' target='_blank'><i className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg></i>+91 9755 7171 99</a></p>
          
            <p><a href='mailto:Support@themanly.in'><i className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></i> Support@themanly.in</a></p>

<p><i className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg></i> Calvry Wellness Solutions Pvt Ltd
Plot - 184C, STPI, Mohali 
Punjab 160071</p>
<ul className="nav  justify-content-start list-unstyled d-flex mb-4 social_icon">
      <li className="ms-3"><a className="text-white" href="https://www.instagram.com/themanly.in" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a></li>
<li className="ms-3"><a className="text-white" href="https://www.facebook.com/profile.php?id=61561176876540" target='_blank'>
<svg width="14" height="22" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.731 23.0832H8.39767V13.7382H12.6023L13.0643 9.09484H8.39767V6.74984C8.39767 6.44042 8.52059 6.14367 8.73938 5.92488C8.95817 5.70609 9.25492 5.58317 9.56434 5.58317H13.0643V0.916504H9.56434C8.01724 0.916504 6.53351 1.53109 5.43955 2.62505C4.34558 3.71901 3.731 5.20274 3.731 6.74984V9.09484H1.39767L0.935669 13.7382H3.731V23.0832Z" fill="white"/>
</svg>
</a></li>
<li className="ms-3"><a className="text-white" href="https://www.youtube.com/@themanlydotin" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></a></li>
<li className="ms-3"><a className="text-white" href="https://x.com/Themanlydotin" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></a></li>
<li className="ms-3"><a className="text-white" href="https://www.linkedin.com/showcase/themanly-in/?viewAsMember=true" target='_blank'>
<svg width="22" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.38582 2.83352C5.3855 3.45236 5.13058 4.04573 4.67714 4.4831C4.2237 4.92046 3.60889 5.166 2.96795 5.16569C2.32701 5.16538 1.71245 4.91925 1.25946 4.48145C0.806475 4.04364 0.55217 3.45003 0.552491 2.83119C0.552811 2.21235 0.807731 1.61898 1.26117 1.18162C1.71461 0.74425 2.32943 0.498714 2.97037 0.499024C3.6113 0.499333 4.22587 0.745462 4.67885 1.18327C5.13184 1.62107 5.38614 2.21469 5.38582 2.83352ZM5.45832 6.89352H0.62499V21.5002H5.45832V6.89352ZM13.095 6.89352H8.28582V21.5002H13.0467V13.8352C13.0467 9.56519 18.8104 9.16852 18.8104 13.8352V21.5002H23.5833V12.2485C23.5833 5.05019 15.0525 5.31852 13.0467 8.85352L13.095 6.89352Z" fill="white"/>
</svg>
</a></li>
     
    </ul>
          </div>
        </div>

      </div>
    </section>

    <div className="p-3 bottom_footer">
        <div className='container d-flex align-items-center justify-content-between'>
          <p className='mb-0'>
          Copyright ©  
          <a className="text-white" href="https://themanly.in"> Themanly 2024 </a> All Rights Reserved.<br/> TheManly.in is sub brand of Calvry Wellness Solutions Pvt Ltd.
          </p>
          <div className='links'>
             <Link to="/Termsconditions" className="text-white me-5">Terms & Conditions</Link>
             <Link to="/Privacypolicy" className="text-white">Privacy Policy</Link>
          </div>
        </div>
    </div>
  </footer>


   </>
  );
}

export default Layout;
