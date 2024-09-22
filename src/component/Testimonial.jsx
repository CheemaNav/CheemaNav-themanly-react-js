import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {

    const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        autoplay: true,
        spaceBetween: 80,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return(
        <>
              <section className='review_Sec bg-primary pt-4 pb-3'>
            <div className='container'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-xl-8 text-center">
                <h3 className="mb-3 text-white">Testimonials</h3>
                </div>
            </div>

                <div className="row text-center mt-0">
                <Slider {...settings}>
                <div className='col-md-12 mb-4 mb-md-0'>
                    <div className='card-body card h-100'>
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(22).webp"
                            className="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <p className="lead my-3 text-white">
                            "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
                            perspiciatis unde omnis."
                        </p>
                        <p className="font-italic font-weight-normal mb-0 text-white">- Anna Morian</p>
                    </div>    
                </div>
                <div className="col-md-12 mb-0">
                    <div className='card card-body h-100'>
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                            className="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <p className="lead my-3 text-white">
                            "Neque cupiditate assumenda in maiores repudiandae mollitia architecto elit sed
                            adipiscing elit."
                        </p>
                        <p className="font-italic font-weight-normal mb-0 text-white">- Teresa May</p>
                    </div>
                </div>
                <div className='col-md-12 mb-4 mb-md-0'>
                    <div className='card-body card h-100'>
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(22).webp"
                            className="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <p className="lead my-3 text-white">
                            "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
                            perspiciatis unde omnis."
                        </p>
                        <p className="font-italic font-weight-normal mb-0 text-white">- Anna Morian</p>
                    </div>    
                </div>
                <div className="col-md-12 mb-0">
                    <div className='card card-body h-100'>
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                            className="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <p className="lead my-3 text-white">
                            "Neque cupiditate assumenda in maiores repudiandae mollitia architecto elit sed
                            adipiscing elit."
                        </p>
                        <p className="font-italic font-weight-normal mb-0 text-white">- Teresa May</p>
                    </div>
                </div>
                </Slider>
            </div>
            </div>
        </section>
        </>
    );
  };
  
  export default Testimonial;