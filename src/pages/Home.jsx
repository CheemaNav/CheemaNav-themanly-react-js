import React from 'react';
import Bannerform from"../component/Bannerform.jsx"
import Testimonial from"../component/Testimonial.jsx"




const Home = () => {
    return (
        <>
        <section className="banner bg-dark d-flex align-items-center" id='form'>
            <div className="container">
                <div className="">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-6">
                            <h1 className="text-white">
                            Dear Men,<br/>
                            Welcome to themanly.in  
                            </h1>
                           
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
                        <Bannerform />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='treat_sec space_60'>
            <div className='container'>
                <div className="treat_inner">
                    <h2 className='text-center pb-2'>What we treat?</h2>
                    <div className="row mt-4">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="../images/Ed.jpeg" alt="Card image cap"/>
                                <div className="card-body">
                                  <h5 className="card-title">Sexual Wellness</h5>
                                  <p className="card-text">At TheManly, we specialize in natural solutions for sexual wellness, focusing on premature ejaculation and erectile dysfunction issues.</p>
                                  <a href="#form" className="btn btn-primary">Get in Touch</a>
                                </div>
                              </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="../images/liver.jpeg" alt="Card image cap"/>
                                <div className="card-body">
                                  <h5 className="card-title">Liver Health</h5>
                                  <p className="card-text">TheManly, targets male reproductive health with our 100% pure Ayurvedic treatments designed to optimize sperm health. Our natural formulations focus on improvingsperm count & motility through carefully selection of herbs.</p>
                                  <a href="#form" className="btn btn-primary">Get in Touch</a>
                                </div>
                              </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="../images/diabetes.jpeg" alt="Card image cap"/>
                                <div className="card-body">
                                  <h5 className="card-title">Diabetes</h5>
                                  <p className="card-text">At TheManly, we provide comprehensive Ayurvedic treatments for managing diabetes naturally. Our formulations are tailored to balance blood sugar levels, promote insulin sensitivity, and support overall health through potent herbal solutions.</p>
                                  <a href="#form" className="btn btn-primary">Get in Touch</a>
                                </div>
                              </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="../images/hair.jpeg" alt="Card image cap"/>
                                <div className="card-body">
                                  <h5 className="card-title">Hair Loss</h5>
                                  <p className="card-text">Our Experts specialize in natural treatments for hair loss, targeting root causes with adeptAyurvedic& 100% natural solutions.</p>
                                  <a href="#form" className="btn btn-primary">Get in Touch</a>
                                </div>
                              </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="../images/gut.jpeg" alt="Card image cap"/>
                                <div className="card-body">
                                  <h5 className="card-title">Gut Health</h5>
                                  <p className="card-text">At TheManly, we offer holistic treatments to support liver health, usingAyurvedic principles for detoxification and rejuvenation. Our 100% natural remedies aim to cleanse and strengthen the liver, promoting overall wellness and vitality.</p>
                                  <a href="#form" className="btn btn-primary">Get in Touch</a>
                                </div>
                              </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="../images/Ed.jpeg" alt="Card image cap"/>
                                <div className="card-body">
                                  <h5 className="card-title">Stamina Building</h5>
                                  <p className="card-text">TheManly, empower men to build stamina naturally with time tested ayurvedic herbs & solutions. Our comprehensive approach mixesAyurvedic principles & modern science to increase endurance, strength</p>
                                  <a href="#form" className="btn btn-primary">Get in Touch</a>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className=''>
            <div className='container'>
                <div className='row story_sec bg-primary py-4 rounded'>
                    <div className='col-12 col-md-3'>
                        <div className='text-center'>
                            <h1 className='fw-bold text-white'>10+</h1>
                            <p className='text-white mb-0'>
                            Avg. Years of <strong>Experience</strong>
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className='text-center'>
                            <h1 className='fw-bold text-white'>1000+</h1>
                            <p className='text-white mb-0'>
                            Successful  <strong>Stories</strong>
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className='text-center'>
                            <h1 className='fw-bold text-white'>15+</h1>
                            <p className='text-white mb-0'>
                            Top <strong>Health Experts</strong>
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className='text-center'>
                            <h1 className='fw-bold text-white'>120K+</h1>
                            <p className='text-white mb-0'>
                            People <strong>Educated</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        <section className='py-5 bg-primary expert_sec story_sec'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-6'>
                        <h2 className='h1 fw-bold text-white'>Let's connect in a confidential and safe space.</h2>
                        <a href='#' className='btn btn-light mt-4'> Start your treatment </a>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img className='w-100' src='' />
                    </div>
                </div>
            </div>
        </section>

        <section className='mt-5'>
            <div className='container'>
                <div className='row privacy_sec py-4 position-relative bg-primary align-items-center'>
                    <div className='col-12 col-md-4 d-flex align-items-center justify-content-center'>
                        <img className='w-75' src='https://qurex-s3.s3.ap-south-1.amazonaws.com/assets/wellness/check-shield.webp' />
                    </div>
                    <div className='col-12 col-md-8'>
                       <h2 className='text-white'>At Manly, we take your privacy seriously. Always.</h2>
                       <p className='fony-18 text-white mb-0'>Anonymity and data privacy are non-negotiable. Your confidentiality is our commitment, every step of the way.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className='faq_sec space_60'>
            <div className='container'>
                <div className="treat_inner">
                    <h2 className='text-center pb-2'>Frequently Asked Questions</h2>
                    <div className="accordion mt-3" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                            Is It Safe to Use?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <p>Its 100% Safe.</p>
                                <p>Our team consists of Naturopaths &Ayurveda experts having cumulative experience of more than 4 decades in men’s wellness, thoroughly evaluate your medical history & prescribe formulations which are safe, effective & absolutely for you.</p>
                                <p>You can feel confident that you are in safe hands with our experts guiding you at every step.</p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
                            Is the medication cost included?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <p>Yes, our treatment costs include medications if prescribed. Consultancy charges are separate as mentioned on website.</p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
                            How long does it take?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <p>Every journey is personal, our program is designed to deliver rapid results while establishing healthy habits for long-term. </p>
                                <p>It depends upon individual to individual & also severity of issue. Typically for moderate issues It takes 2-3 months’ time frame rest be assured that you are in right hands & our experts will guide you better in terms of time frame of treatment & medication.</p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefor" aria-expanded="false" aria-controls="flush-collapseOne">
                             Is treatment holistic?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapsefor" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <p>We have many experts on our panel. Right from Naturopath, Ayurveda doctors to re-known Dietitian’s.</p>
                                <p>Along with medication, if it’s required to alter your diet plan than our cross functional team kicks in & advices our patient accordingly to take a holistic approach.</p>
                                <p>The whole idea is to imbibe healthy habits so that the solution is long term &permanent.</p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false" aria-controls="flush-collapseOne">
                            How long will it take to deliver my order?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapsefive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <p>Delivery times may vary depending on the delivery location as well as the type of product you order.</p>
                               
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>

        <Testimonial />
        


       
<section className="space_60 blog_sec">
<h2 className='text-center pb-2'>Blogs</h2>
  <div className="container overflow-hidden">
    <div className="row gy-4 gy-md-5 gx-xl-6 gy-xl-6 gx-xxl-9 gy-xxl-9">
      <div className="col-12 col-lg-4">
        <article>
          <div className="card border-0 bg-transparent">
            <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img className="img-fluid" loading="lazy" src="/public/liver.jpeg" alt="Living" />
              </a>
   
            </figure>
            <div className="card-body m-0 p-0">
              <div className="entry-header mb-2">
                <ul className="entry-meta list-unstyled d-flex mb-3">
                  <li>
                    <a className="d-inline-flex px-2 py-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7" href="#!">Liver Health</a>
                  </li>
                </ul>
                <h2 className="card-title entry-title h4 m-0">
                  <a className="link-dark text-decoration-none" href="#!">TheManly, targets male reproductive</a>
                </h2>
              </div>
            </div>
            <div className="card-footer border-0 bg-transparent p-0 m-0">
              <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                <li>
                  <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="ms-2 fs-7">11 Dec 2024</span>
                  </a>
                </li>
              </ul>
              <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever</p>
            </div>
          </div>
        </article>
      </div>
      <div className="col-12 col-lg-4">
        <article>
          <div className="card border-0 bg-transparent">
            <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img className="img-fluid" loading="lazy" src="/public/liver.jpeg" alt="Relationships" />
              </a>
         
            </figure>
            <div className="card-body m-0 p-0">
              <div className="entry-header mb-2">
                <ul className="entry-meta list-unstyled d-flex mb-3">
                  <li>
                    <a className="d-inline-flex px-2 py-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7" href="#!">Liver Health</a>
                  </li>
                </ul>
                <h2 className="card-title entry-title h4 m-0">
                  <a className="link-dark text-decoration-none" href="#!">TheManly, targets male reproductive</a>
                </h2>
              </div>
            </div>
            <div className="card-footer border-0 bg-transparent p-0 m-0">
              <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                <li>
                  <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="ms-2 fs-7">11 Aug 2023</span>
                  </a>
                </li>
              </ul>
              <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever</p>
            </div>
          </div>
        </article>
      </div>
      <div className="col-12 col-lg-4">
        <article>
          <div className="card border-0 bg-transparent">
            <figure className="card-img-top mb-4 overflow-hidden bsb-overlay-hover">
              <a href="#!">
                <img className="img-fluid" loading="lazy" src="/public/liver.jpeg" alt="Career" />
              </a>
            </figure>
            <div className="card-body m-0 p-0">
              <div className="entry-header mb-2">
                <ul className="entry-meta list-unstyled d-flex mb-3">
                  <li>
                    <a className="d-inline-flex px-2 py-1 link-primary text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none fs-7" href="#!">Liver Health</a>
                  </li>
                </ul>
                <h2 className="card-title entry-title h4 m-0">
                  <a className="link-dark text-decoration-none" href="#!">TheManly, targets male reproductive</a>
                </h2>
              </div>
            </div>
            <div className="card-footer border-0 bg-transparent p-0 m-0">
              <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                <li>
                  <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="ms-2 fs-7">2 Apr 2023</span>
                  </a>
                </li>
              </ul>
              <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever</p>
            </div>

          </div>
        </article>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="col text-center">
        <a href="#!" className="btn btn-primary mt-5 py-2 px-4">Read More</a>
      </div>
    </div>
  </div>
</section>





        </>
    );
  };
  
  export default Home;