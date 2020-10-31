import React from "react"
import {Link} from "react-router-dom"

function TBTCAPI() {
    return (
        <div className="container-fluid tbtc-api">
            <div className="row">
                <h2 className="col-12 api-title">TBTC API</h2>
                <p className="col-12">
                <ul>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/TBTCSystem" className="nav-link" >TBTCSystem</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/VendingMachine" className="nav-link" >VendingMachine</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/Deposit" className="nav-link" >Deposit</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositFunding" className="nav-link" >DepositFunding</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositLiquidation" className="nav-link" >DepositLiquidation</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositRedemption" className="nav-link" >DepositRedemption</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositStates" className="nav-link" >DepositStates</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositUtils" className="nav-link" >DepositUtils</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositFactory" className="nav-link" >DepositFactory</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/CloneFactory" className="nav-link" >CloneFactory</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/OutsourceDepositLogging" className="nav-link" >OutsourceDepositLogging</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/SatWeiPriceFeed" className="nav-link" >SatWeiPriceFeed</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/FundingScript" className="nav-link" >FundingScript</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/RedemptionScript" className="nav-link" >RedemptionScript</Link>
                                                </li>
                                            </ul>
                </p>
            </div>
        </div>
    );
}

export default TBTCAPI;