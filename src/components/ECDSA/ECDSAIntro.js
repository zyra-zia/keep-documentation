import React from 'react';
import {Link} from "react-router-dom";

function ECDSAIntro(){
        return (
            <div className="container-fluid ecdsa-intro">
                <div className="row">
                    <h2 className="col-12 api-title">Keep ECDSA Introduction</h2>
                    <p className="col-12">
                        ECDSA Keeps are used for off chain storage of small amounts of private data. They are also used in the 
                        TBTC System for storing bitcoin keys.
                    </p>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Development Guide</h5>
                                <p className="card-text">Find out how to use the ECDSA Keep in your dapps and contracts</p>
                                <Link to="/ecdsa/guide" className="btn btn-primary">ECDSA Usage Guide</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">API Documentation</h5>
                                <p className="card-text">The ECDSA API has a complete list of available methods</p>
                                <Link to="/ecdsa/api" className="btn btn-primary">ECDSA API</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Resources</h5>
                                <p className="card-text">A list of helpful external resources related to ECDSA.</p>
                                <Link to="/ecdsa/resources" className="btn btn-primary">Resources</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default ECDSAIntro;