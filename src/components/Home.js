import React from 'react';
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="container-fluid home">
            <div className="row">
                <h1 className="col-12">
                    <img className="logo" src={process.env.PUBLIC_URL + "/keep-token-main.png"}/>
                    Keep Network
                </h1>
                <h2 className="col-12 api-title">Developer Documentation</h2>
                <p className="col-12">
                    A keep is a small off-chain data container for private storage and computation that can be opened, closed, and managed by smart contracts autonomously. Keeps allow contracts to manage and
                    use private data without exposing the data to the public blockchain. The Keep Network consists of&nbsp;
                    <Link to="/ecdsa/intro">ECDSA Keeps</Link>, 
                    a <Link to="/random-beacon/intro">Random Beacon</Link>
                    and <Link to="/tbtc/intro">TBTC</Link>,
                    an ERC20 token representing Bitcoin on Ethereum.
                </p>
                <p className="col-12">
                    This developer documentation contains guides and detailed API documentation for developers to use the Keep Network
                    in their own dapps and contracts.
                </p>
                <p className="col-12" style={{margin: '15px 0'}} ></p>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">TBTC Development Guide</h5>
                                <p className="card-text">Find out how to use TBTC in your dapps and contracts</p>
                                <Link to="/tbtc/guide" className="btn btn-primary">TBTC Usage Guide</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">TBTC API Documentation</h5>
                                <p className="card-text">The TBTC API has a complete list of available methods</p>
                                <Link to="/tbtc/api" className="btn btn-primary">TBTC API</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">TBTC Resources</h5>
                                <p className="card-text">A list of helpful external resources related to TBTC.</p>
                                <Link to="/tbtc/resources" className="btn btn-primary">Resources</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Random Beacon Development Guide</h5>
                                <p className="card-text">Find out how to use the Keep Random Beacon in your dapps and contracts</p>
                                <Link to="/random-beacon/guide" className="btn btn-primary">Random Beacon Guide</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Random Beacon API Documentation</h5>
                                <p className="card-text">The Random Beacon API has a complete list of available methods</p>
                                <Link to="/random-beacon/api" className="btn btn-primary">Random Beacon API</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Random Beacon Resources</h5>
                                <p className="card-text">A list of helpful external resources related to the Random Beacon.</p>
                                <Link to="/random-beacon/resources" className="btn btn-primary">Resources</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">ECDSA Development Guide</h5>
                                <p className="card-text">Find out how to use the ECDSA Keep in your dapps and contracts</p>
                                <Link to="/ecdsa/guide" className="btn btn-primary">ECDSA Usage Guide</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">ECDSA API Documentation</h5>
                                <p className="card-text">The ECDSA API has a complete list of available methods</p>
                                <Link to="/ecdsa/api" className="btn btn-primary">ECDSA API</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">ECDSA Resources</h5>
                                <p className="card-text">A list of helpful external resources related to ECDSA.</p>
                                <Link to="/ecdsa/resources" className="btn btn-primary">Resources</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}