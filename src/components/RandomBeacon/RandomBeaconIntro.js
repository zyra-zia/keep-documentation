import React from 'react';
import {Link} from "react-router-dom";

function RandomBeaconIntro(){
        return (
            <div className="container-fluid beacon-intro">
                <div className="row">
                    <h2 className="col-12 api-title">Random Beacon Introduction</h2>
                    <p className="col-12">
                        The Keep Random Beacon is a trustless, decentralized source of randomness that can be 
                        used by dapps and smart contracts to generate random numbers.
                    </p>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Development Guide</h5>
                                <p className="card-text">Find out how to use the Keep Random Beacon in your dapps and contracts</p>
                                <Link to="/random-beacon/guide" className="btn btn-primary">Random Beacon Guide</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">API Documentation</h5>
                                <p className="card-text">The Random Beacon API has a complete list of available methods</p>
                                <Link to="/random-beacon/api" className="btn btn-primary">Random Beacon API</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Resources</h5>
                                <p className="card-text">A list of helpful external resources related to the Random Beacon.</p>
                                <Link to="/random-beacon/resources" className="btn btn-primary">Resources</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default RandomBeaconIntro;