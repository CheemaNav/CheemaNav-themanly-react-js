import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
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

    const createAvatar = (name) => {
        return name?.charAt(0)?.toUpperCase();
    }

    const Avatar = ({ name }) => {
        return (
            <span
                className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                style={{
                    width: '80px', // Fixed width
                    height: '80px', // Fixed height
                    fontSize: '36px', // Adjust font size as needed
                    color: '#fff', // Text color
                }}
            >
                {createAvatar(name)}
            </span>
        );
    };

    return (
        <>
            <section className='review_Sec bg-primary pt-4 pb-3'>
                <div className='container'>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-xl-8 text-center">
                            <h3 className="mb-3 text-white">What do our patients say about us</h3>
                        </div>
                    </div>

                    <div className="row text-center mt-0">
                        <Slider {...settings}>
                            <div className='col-md-12 mb-4 h-100'>
                                <div className='card-body card h-100'>
                                    <div className="d-flex justify-content-center mb-0">
                                      
                                        <Avatar name="Rajesh" />
                                    </div>
                                    <p className="lead text-truncate-box my-3 text-white">
                                        “I’ve been using Diaease for the past six months, and the results have been remarkable. My blood sugar levels are more stable, and I feel more energetic throughout the day. This Ayurvedic solution has truly transformed my diabetes management. Highly recommended!”
                                    </p>
                                    <p className="font-italic font-weight-normal mb-0 text-white">Rajesh - 54 Yrs</p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-0 h-100">
                                <div className='card card-body h-100'>
                                    <div className="d-flex justify-content-center mb-0">
                                       
                                        <Avatar name="Ravi" />
                                    </div>
                                    <p className="lead text-truncate-box my-3 text-white">
                                        “Since I started using ROVER, my energy and endurance have improved significantly. I can now get through my day without feeling exhausted. Highly recommended!”
                                    </p>
                                    <p className="font-italic font-weight-normal mb-0 text-white">Ravi - 47 Yrs</p>
                                </div>
                            </div>
                            <div className='col-md-12 mb-4 h-100'>
                                <div className='card-body card h-100'>
                                    <div className="d-flex justify-content-center mb-0">
                                       
                                        <Avatar name="Sameer" />
                                    </div>
                                    <p className="lead text-truncate-box my-3 text-white">
                                        “I found the TheManly.In experts as the best. I got relief from ED problem within month. TheManly.in & its experts are highly recommended”
                                    </p>
                                    <p className="font-italic font-weight-normal mb-0 text-white">Sameer - 38 Yrs</p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-0 h-100">
                                <div className='card card-body h-100'>
                                    <div className="d-flex justify-content-center mb-0">
                                     
                                        <Avatar name="Vijay" />
                                    </div>
                                    <p className="lead text-truncate-box my-3 text-white">
                                        “Using Diaease has been a turning point in my diabetes journey. My overall health has improved, and I feel more in control of my condition. This Ayurvedic medicine is truly effective and reliable.”
                                    </p>
                                    <p className="font-italic font-weight-normal mb-0 text-white">Vijay Yadav - 52 Yrs</p>
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