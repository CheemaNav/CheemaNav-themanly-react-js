import React from 'react';
import Bannerform from "../component/Bannerform.jsx"
import Testimonial from "../component/Testimonial.jsx"





const Home = () => {
  return (
    <>
      <section className="banner bg-dark d-flex align-items-center" id='form'>
        <div className="container">
          <div className="">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-md-7 mt-md-5 pt-md-0">
                <h1 className="text-white h5">
                  <strong className="d-block mb-0 h1"> Reboot</strong><strong className="d-block mb-2 h1"> yourself </strong>The holistic wellness programme designed for Men!!
                  </h1>
                      {/* <img className="Guaranteed" src="./images/guaranteed.png" alt="Guaranteed" /> */}
                      <span className='mt-4 d-block text-white h5 step-title'>Follow 3 simple steps for your treatment.</span>
                    <div className='banner_icon row pt-3'>
                    <div className='col-md-4 col-12'>
                      <p className='detail text-center'><span>Step 1</span><strong>Talk to our Expert</strong>Fill the Online Appointment Form on our website & fins out the real problem you are facing.</p>
                    </div>
                    <div className='col-md-4 col-12'>
                      <p className='detail text-center'><span>Step 2</span><strong>Get your Treatment Plan</strong>Post proper diagnosis& severity of problem, Get your customised treatment plan </p>
                    </div>
                    <div className='col-md-4 col-12'>
                      <p className='detail text-center'><span>Step 3</span><strong>Monitor Your Progress</strong>Our team will follow up on your progress & guide you on every step</p>
                    </div>
                  </div> 
                  </div>

              {/* <div className="col-12 col-md-6">
                            <h1 className="text-white h3">
                           <strong className="d-block mb-3 h1"> Dear Men,</strong>
                            Welcome to the holistic wellness programme designed just for YOU !!
                            </h1> 
                            <h1 className="text-white h2">
                           <strong className="d-block mb-3 h1"> Reboot yourself </strong>
                           with us,
                            </h1>
                             
                        </div>*/}
              <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
                <Bannerform />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='treat_sec space_60' id='Treatments'>
        <div className='container'>
          <div className="treat_inner">
            <h2 className='text-center pb-2'>What we treat?</h2>
            <div className="row mt-4">
            <div className="col-12 col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="./images/gut.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Erectile Dysfunction</h5>
                    <p className="card-text"> Revitalize your strength naturally with Ayurveda: harnessing ancient herbs, balanced nutrition, and mindful practices to overcome ED and restore confidence.</p>

                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="./images/Libido.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Early Ejaculation</h5>
                    <p className="card-text">Unlock lasting confidence and control with Ayurveda’s natural, side-effect-free solutions for premature ejaculation.</p>

                  </div>
                </div>
              </div>
            <div className="col-12 col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="./images/Sperm.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Low Sperm Count</h5>
                    <p className="card-text">We offer targeted treatments and lifestyle adjustments to help improve sperm production and fertility outcomes.</p>

                  </div>
                </div>
              </div>
            
              <div className="col-12 col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="./images/Testosterone.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Low Testosterone</h5>
                    <p className="card-text">Our therapies focus on restoring hormonal balance to enhance energy, strength, and overall well-being.</p>

                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="./images/ED.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Loss of Libido</h5>
                    <p className="card-text">We provide personalized care to address hormonal or psychological factors, helping to boost sexual desire and performance.</p>

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="./images/gutissue.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Gut Issue</h5>
                    <p className="card-text">Enhance your digestive health and balance your Agni (digestive fire) with our tailored treatments.</p>

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="./images/liver.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Liver Health</h5>
                    <p className="card-text">Detoxify and rejuvenate your liver with our specially formulated herbal remedies.</p>

                  </div>
                </div>
              </div>
             

             
              <div className="col-12 col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="./images/diabetes.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Diabetes</h5>
                    <p className="card-text">Manage your blood sugar levels naturally with our comprehensive Ayurvedic approach.</p>

                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="./images/hair.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Hair loss</h5>
                    <p className="card-text">Revitalize your roots and reclaim your confidence with Ayurvedic remedies tailored to restore, nourish, and strengthen men's hair naturally.</p>

                  </div>
                </div>
              </div>
             
              {/* <div className="col-12 col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="./images/Energy.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Boosting Stamina & Testosterone</h5>
                    <p className="card-text">Revitalize your energy levels and enhance stamina naturally.</p>

                  </div>
                </div>
              </div> */}
           
             
             
            
            </div>
            <div className='text-center mt-3'>
              <a href="#form" className="btn btn-primary mx-auto">Book an Appointment</a>
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

      <section className='py-5 bg-primary expert_sec story_sec' id='Experts'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 col-md-6'>
              <h2 className='h1 fw-bold text-white'>Let's connect to our experts.</h2>
              <p className='text-white h5'>They have treated more than 20000 patients.</p>
              <div className='row'>
                <div className='col'>
                   <a href='#' className='btn btn-light mt-4'> Start Your Treatment </a>
                </div>
                <div className='col'>
                  <img className="Guaranteed" src="./images/guaranteed.png" alt="Guaranteed" />
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6'>
            <div className='row'>
  <div className='col-12 col-md-4 d-flex mb-4 mb-md-0'>
    <div className='card h-100 flex-grow-1'>
      <div className='card-body p-0 text-center d-flex flex-column'>
        <img className='w-100' src='/images/DrM.jpg' alt="Dr. Manjari Chandra" />
        <div className='flex-grow-1 d-flex flex-column justify-content-start'>
          <p className='mb-0 p-3 px-1'>
            <strong className='d-block mb-1 h6'>Dr. Manjari Chandra</strong>
            Advisor & Clinical Nutritionist
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className='col-12 col-md-4 d-flex mb-4 mb-md-0'>
    <div className='card h-100 flex-grow-1'>
      <div className='card-body p-0 text-center d-flex flex-column'>
        <img className='w-100' src='/images/DrA.jpg' alt="Dr. Atul Bhargava" />
        <div className='flex-grow-1 d-flex flex-column justify-content-start'>
          <p className='mb-0 p-3 px-1'>
            <strong className='d-block mb-1 h6'>Dr. Atul Bhargava</strong>
            MS - Ayurveda
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className='col-12 col-md-4 d-flex '>
    <div className='card h-100 flex-grow-1'>
      <div className='card-body p-0 text-center d-flex flex-column'>
        <img className='w-100' src='/images/DrD.jpg' alt="Dr. Gautam" />
        <div className='flex-grow-1 d-flex flex-column justify-content-start'>
          <p className='mb-0 p-3 px-1'>
            <strong className='d-block mb-1 h6'>Dr. Gautam</strong>
            Naturopath & Ayurveda Expert
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      <section className='mt-5 whycho_Sec'>
  <div className='container'>
    <h2 className="text-center pb-0 mb-0">Why Choose TheManly.in?</h2>
    <div className='row py-4 position-relative mb-4'>
      <div className="col-12 col-md-3 d-flex mb-3 mb-md-0">
        <div className="card text-center flex-grow-1">
          <div className='cardimg'><img className="card-img-top" src="./images/leader.png" alt="Card image cap" /> </div>
          <div className="card-body">
            <h5 className="card-title">Team of Experts</h5>
            <p className="card-text">Trust you are in safe hands. they have treated more than 20000 patients.</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-3 d-flex mb-3 mb-md-0">
        <div className="card text-center flex-grow-1">
          <div className='cardimg'> <img className="card-img-top" src="./images/organic.png" alt="Card image cap" /></div>
          <div className="card-body">
            <h5 className="card-title">100% Natural Products</h5>
            <p className="card-text">We use only the finest natural ingredients, sourced sustainably.</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-3 d-flex mb-3 mb-md-0">
        <div className="card text-center flex-grow-1">
          <div className='cardimg'> <img className="card-img-top" src="./images/bot.png" alt="Card image cap" /></div>
          <div className="card-body">
            <h5 className="card-title">Customised Treatment</h5>
            <p className="card-text">Our treatments are tailored to meet your unique health needs.</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-3 d-flex">
        <div className="card text-center flex-grow-1">
          <div className='cardimg'>
            <img className="card-img-top" src="./images/check.png" alt="Card image cap" />
          </div>
          <div className="card-body">
            <h5 className="card-title">100% Privacy</h5>
            <p className="card-text">We assure our patients to maintain 100% privacy of their treatment.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Testimonial />

      <section className='faq_sec space_60' id='faq'>
        <div className='container'>
          <div className="treat_inner">
            <h2 className='text-center pb-2'>Frequently Asked Questions</h2>
            <div className="accordion mt-3" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                  How can I start my treatment with themanly.in?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                    <p>Visit our website www.themanly.in & fill up the Book Your Appointment form. Or you can call or whatsapp on the mobile no. mentioned on our website (<a href="tel:+91-9755717199">+91-9755717199</a>). Our patient care executive will call you & guide you through the process.</p>
                    
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
                  What can I expect during my first consultation?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body">
                    <p>The first consultation involves a detailed analysis of your health using detailed questionnaire. The doctor will discuss your lifestyle, diet, and current health concerns to develop a personalized treatment plan.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
                  Is it going to be customised for my problem?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    <p>Its completely customised as every individual is unique & every individual has different issues. Hence, we take personalised care of each & everyone separately.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefor" aria-expanded="false" aria-controls="flush-collapseOne">
                  Do I need to consult a doctor before starting treatment?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapsefor" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    <p>Yes, an initial consultation is required to assess your health and prescribe the correct therapies or supplements, as not all treatments suit everyone.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false" aria-controls="flush-collapseOne">
                  How can I be sure about my privacy and confidentiality?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapsefive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    <p>Your personal data is stored behind secured networks and accessible only to authorized personnel. We guarantee to maintain strict confidentiality standards and do not disclose, sell, or transfer personal data unless required by law. Only individuals with specific access rights can view your data. We provide detailed privacy policies explaining how they collect, use, and protect your data, ensuring transparency and trust.</p>

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false" aria-controls="flush-collapseOne">
                  How do I know I have ED issue?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapsefive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    <p>Difficulty getting an erection: Struggling to achieve an erection, even when sexually aroused, could be a sign of ED.</p>
                    <p>Difficulty maintaining an erection: If you can get an erection but cannot sustain it long enough for sexual activity, this may indicate ED.</p>
                    <p>Reduced sexual desire: A low libido or reduced interest in sexual activity may be related to ED or other underlying issues.</p>
                    <p>Intermittent issues: Having occasional difficulty with erections is common, but if the issue persists, it’s advisable to see a doctor for further evaluation.</p>

                  </div>
                </div>
              </div>

             
              <div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
      Is the medication cost included?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
    <div className="accordion-body">
      <p>Yes, our treatment costs include medications if prescribed. Consultancy charges are separate as mentioned on our website.</p>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      What is PME and how can I know if I have PME issue?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
    <div className="accordion-body">
      <p>Premature ejaculation occurs in men when semen leaves the body sooner than wanted during sex. Premature ejaculation is a common sexual complaint...</p>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Is premature ejaculation treatable through Ayurveda?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
    <div className="accordion-body">
      <p>Ayurveda can effectively treat premature ejaculation by using herbal therapies that enhance stamina...</p>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingFour">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
      Can Ayurveda treat erectile dysfunction (ED)?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
    <div className="accordion-body">
      <p>Yes, Ayurveda addresses ED by identifying the root cause, which may be linked to stress, lifestyle, or dosha imbalances...</p>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingFive">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
      How long does it take?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
    <div className="accordion-body">
      <p>Every journey is personal, and our program is designed to deliver rapid results while establishing healthy habits...</p>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingSix">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
      Are there any side effects of Ayurvedic treatments?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
    <div className="accordion-body">
      <p>Ayurvedic treatments are natural and safe when prescribed by a qualified practitioner...</p>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
      Is treatment holistic?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
    <div className="accordion-body">
      <p>We have many experts on our panel, including Naturopaths, Ayurveda doctors, and Dietitians...</p>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingEight">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
      How long will it take to deliver my order?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
    <div className="accordion-body">
      <p>Delivery times may vary depending on the delivery location and the type of product ordered...</p>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingNine">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
      Can I continue my regular medication alongside Ayurvedic treatment?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
    <div className="accordion-body">
      <p>Yes, in many cases, Ayurvedic treatments can be used alongside conventional medicines...</p>
    </div>
  </div>
</div>

          

            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;