import React from 'react';

const Home = () => {
    return (
        <div
            className="container-fluid py-5"
            style={{
                background: 'linear-gradient(360deg, rgb(238, 242, 246) 1.09%, rgb(255, 255, 255) 100%)',
            }}
        >
            <div className="row align-items-center">
                <div className="col-lg-6 px-4">
                    <h1 className="fw-bold">
                        <span>Use Berry to</span>
                        <br />
                        <span>Power Your Next</span>
                        <br />
                        <span className="text-primary">React Project</span>
                    </h1>
                    <p className="fs-5 mt-4">
                        Berry is a React-based Dashboard template that helps you build faster and more beautiful web applications.
                    </p>
                    <div className="mt-4">
                        <button type="button" className="btn btn-primary me-3">
                            Get Started
                        </button>
                        <button type="button" className="btn btn-light text-primary">
                            Purchase Now
                        </button>
                    </div>
                </div>

                <div className="col-lg-6 mt-5 mt-lg-0 position-relative">
                    <img
                        src="https://berrydashboard.io/assets/tech-light-D329XLIh.svg"
                        alt="Technology Stack"
                        className="img-fluid mb-4"
                    />
                    <img
                        src="https://berrydashboard.io/assets/hero-dashboard-DQLyv36a.png"
                        alt="Dashboard Preview"
                        className="img-fluid position-absolute top-0 end-0 translate-middle"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            transform: 'translate(50%, -50%) scale(1.3)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;


{/* <img src="https://berrydashboard.io/assets/tech-light-D329XLIh.svg" alt="" width='450px' />
<img className='z-10 scale-x-[1.3] scale-y-[1.3] position-absolute' src="https://berrydashboard.io/assets/hero-dashboard-DQLyv36a.png" alt=""/> */}