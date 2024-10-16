import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div className=" text-white pt-5" style={{ background: "rgb(17, 25, 54)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h4>About Berry</h4>
                        <p>
                            Berry React is a dashboard template that utilizes the Material-UI framework and the React JavaScript library. It offers a range of features and customization options to help you create a powerful and user-friendly admin panel.
                        </p>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h4>Help</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Documentation</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Change Log</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Support</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h4>Store Help</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">License</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Refund Policy</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Submit a Request</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h4>Berry Eco-System</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Bootstrap 5</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Angular</a></li>
                            <li><a href="#" className="text-white text-decoration-none">CodeIgniter</a></li>
                            <li><a href="#" className="text-white text-decoration-none">.Net</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Shopify</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Upcoming</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Vuetify 3</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Full Stack</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Django</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Flask</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h4>Free Versions</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Free React MUI</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Free Bootstrap 5</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Free Angular</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Free Django</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-3" style={{ background: "rgb(33, 41, 70)" }}>
                <p className="mb-0">
                    © Berry is managed by <span style={{ color: "rgb(33, 150, 243" }}>CodedThemes</span>
                </p>
            </div>
        </div>
    );
};

export default Footer;











