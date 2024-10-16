import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Testaments = () => {
    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h2>Testaments</h2>
                <p>We are so grateful for your positive review and appreciate your support of our product</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <img
                                src="https://berrydashboard.io/assets/testaments-1-DhJJm1dm.png"
                                alt="Nelu"
                                className="img-fluid mb-3"
                            />
                            <h5>Nelu</h5>
                            <p className="text-primary">@Quality Support</p>
                            <p>
                                This is a quality team with quality support. Number of available modules is incredible.
                                Anytime I thought "oh I wish it had this" I was able to find exactly that already
                                pre-made in the template.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <span
                                className="bg-warning text-white rounded-circle d-inline-block mb-3"
                                style={{ height: "40px", width: "40px", lineHeight: "40px", fontSize: "25px" }}
                            >B</span>
                            <h5>Bente</h5>
                            <p className="text-primary">@Customer Support</p>
                            <p>
                                Very good customer service! I liked the design and there was nothing wrong, but found out after
                                testing that it did not quite match the functionality and overall design that I needed for my
                                type of software. I therefore contacted customer service and it was no problem even though the
                                deadline for refund had actually expired.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <img
                                src="data:image/png;base64,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" />
                            <h5>Musaid</h5>
                            <p className="text-primary">@Exceptional</p>
                            <p>
                                Awesome design. Exceptional code quality. Great customer service. I would say, the best theme I have seen in a while
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <span
                                    className="bg-success text-white rounded-circle d-inline-block mb-3"
                                    style={{ height: "40px", width: "40px", lineHeight: "40px", fontSize: "25px" }}
                                > B</span>
                                <h5>Besart</h5>
                                <p className="text-primary">@Customizability</p>
                                <p>
                                    Very well written code and good structure. Very customizable and tons of nice components.
                                    Good documentation. Team is very responsive too
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <span
                                    className="bg-danger text-white rounded-circle d-inline-block mb-3"
                                    style={{ height: "40px", width: "40px", lineHeight: "40px", fontSize: "25px" }}
                                >D</span>
                                <h5>Dillon</h5>
                                <p className="text-primary">@Codebase</p>
                                <p>
                                    The project template is great, as well as the codebase. I am a backend developer, new to frontend
                                    and learning. So this template is turning out to be a great foundation...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <span
                                    className="bg-success text-white rounded-circle d-inline-block mb-3"
                                    style={{ height: "40px", width: "40px", lineHeight: "40px", fontSize: "25px" }}
                                >B</span>
                                <h5>Jean</h5>
                                <p className="text-primary">@Well Written</p>
                                <p>
                                    Very well written. I use it as a base for completely rewriting our existing apps front end.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <img
                                    src="data:image/png;base64,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" />
                                <h5>Felipe</h5>
                                <p className="text-primary">@Customizability</p>
                                <p>
                                    Fantastic design and good code quality. It is a great starting point for any new project.
                                    They provide plenty of premade components, page views, and authentication options. Definitely the
                                    best I have found for Material UI in Typescript
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <button type="button" className="btn btn-outline-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Testaments;

