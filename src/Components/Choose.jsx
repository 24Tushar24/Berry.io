import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Choose = () => {
    return (
        <div
            className="container-fluid"
            style={{
                background: "rgb(17, 25, 54)",
                paddingTop: "50px",
                paddingBottom: "50px"
            }}
        >
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                    <h2 className="text-white">
                        Choose Berry for <span className="text-primary">Standardization</span>
                    </h2>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src="https://berrydashboard.io/assets/bg-heand-BgtVt5t-.png"
                        alt="Berry Standardization"
                        className="img-fluid"
                        style={{ maxHeight: "400px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Choose;
