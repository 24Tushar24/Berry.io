import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
    return (
        <div className="container text-center mt-5" style={{ background: 'linear-gradient(360deg, rgb(238, 242, 246) 1.09%, rgb(255, 255, 255) 100%)', padding: '20px' }}>
            <h2>Explore Conceptual Apps</h2>
            <p>
                Berry has conceptual working apps like Chat, Inbox, E-commerce, Invoice, Kanban, and <br />
                Calendar dashboard Social Profile
            </p>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="https://berrydashboard.io/assets/slider-light-6-DvQggOnO.png" className="d-block img-fluid mx-auto" alt="Slide 1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://berrydashboard.io/assets/slider-light-5-CgjgeexX.png" className="d-block img-fluid mx-auto" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://berrydashboard.io/assets/slider-light-3-DP_FfJEV.png" className="d-block img-fluid mx-auto" alt="Slide 3" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://berrydashboard.io/assets/slider-light-4-D0InGprx.png" className="d-block img-fluid mx-auto" alt="Slide 4" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://berrydashboard.io/assets/slider-light-2-CktDTGMJ.png" className="d-block img-fluid mx-auto" alt="Slide 5" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://berrydashboard.io/assets/slider-light-1-DliTUNqz.png" className="d-block img-fluid mx-auto" alt="Slide 6" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
