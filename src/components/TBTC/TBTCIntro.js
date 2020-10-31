import React from 'react';
import {Link} from "react-router-dom";

function TBTCIntro(){
        return (
            <div className="container-fluid ecdsa-intro">
                <div className="row">
                    <h2 className="col-12 api-title">TBTC Introduction</h2>
                    <p className="col-12">
                        TBTC is the first fully decentralized Bitcoin on Ethereum and the first dapp to be built using the Keep Network. 
                        It is an ERC20 Token fully backed by BTC and can be used in Defi without any centralized intermediaries.
                    </p>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Development Guide</h5>
                                <p className="card-text">Find out how to use TBTC in your dapps and contracts</p>
                                <Link to="/tbtc/guide" className="btn btn-primary">TBTC Usage Guide</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">API Documentation</h5>
                                <p className="card-text">The TBTC API has a complete list of available methods</p>
                                <Link to="/tbtc/api" className="btn btn-primary">TBTC API</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Resources</h5>
                                <p className="card-text">A list of helpful external resources related to TBTC.</p>
                                <Link to="/tbtc/resources" className="btn btn-primary">Resources</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default TBTCIntro;