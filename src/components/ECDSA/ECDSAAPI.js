import React from "react"
import {Link} from "react-router-dom"

function ECDSAAPI() {
    return (
        <div className="container-fluid ecdsa-api">
            <div className="row">
                <h2 className="col-12 api-title">Keep ECDSA API</h2>
                <p className="col-12">
                    <ul>
                        <li className="nav-item">
                            <Link to="/ecdsa/api/IBondedECDSAKeep" className="nav-link" >IBondedECDSAKeep</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ecdsa/api/IBondedECDSAKeepFactory" className="nav-link" >IBondedECDSAKeepFactory</Link>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default ECDSAAPI;