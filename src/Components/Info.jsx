import React from 'react';

const Info = () => {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" style={{ background: "#ffe57f" }}>
                        <div className="card-body text-center">
                            <svg style={{ width: "30px", height: "30px", marginTop: "20px" }}
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1lu0yxm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WebOutlinedIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM20 18h-3.5V9H20z"></path></svg>
                            <h4 className="card-title mt-3">150+ Components</h4>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" style={{ background: "#90caf9" }}>
                        <div className="card-body text-center">
                            <svg style={{ width: "30px", height: "30px", marginTop: "20px" }}
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1lu0yxm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WidgetsOutlinedIcon"><path d="m16.66 4.52 2.83 2.83-2.83 2.83-2.83-2.83zM9 5v4H5V5zm10 10v4h-4v-4zM9 15v4H5v-4zm7.66-13.31L11 7.34 16.66 13l5.66-5.66zM11 3H3v8h8zm10 10h-8v8h8zm-10 0H3v8h8z"></path></svg>
                            <h4 className="card-title mt-3">8+ Applications</h4>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" style={{ background: "#b39ddb" }}>
                        <div className="card-body text-center">
                            <svg style={{ width: "30px", height: "30px", marginTop: "20px" }}
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nriy5z" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridViewIcon"><path fill-rule="evenodd" d="M3 3v8h8V3zm6 6H5V5h4zm-6 4v8h8v-8zm6 6H5v-4h4zm4-16v8h8V3zm6 6h-4V5h4zm-6 4v8h8v-8zm6 6h-4v-4h4z"></path></svg>
                            <h4 className="card-title mt-3">10+ Pages</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;


