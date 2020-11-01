import React from 'react';
import { Link } from "react-router-dom";
import ExternalIcon from "./ExternalIcon";

class Sidebar extends React.Component {
    render(){
        return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" >Home</Link>
                  </li>
                  <li className="nav-item">
                    <button className="menu" type="button" data-toggle="collapse" data-target="#beaconMenu" aria-expanded="false" aria-controls="collapseExample">
                        <Link to="/random-beacon" className="nav-link">Random Beacon</Link>
                    </button>
                    <div className="collapse" id="beaconMenu">
                        <div className="card card-body">
                            <ul>
                                <li className="nav-item">
                                    <Link to="/random-beacon/guide" className="nav-link" >Development Guide</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/random-beacon/api" className="nav-link" >API Documentation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/random-beacon/resources" className="nav-link" >Resources</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <button className="menu" type="button" data-toggle="collapse" data-target="#ecdsaMenu" aria-expanded="false" aria-controls="collapseExample">
                        <Link to="/ecdsa" className="nav-link">ECDSA</Link>
                    </button>
                    <div className="collapse" id="ecdsaMenu">
                        <div className="card card-body">
                            <ul>
                                <li className="nav-item">
                                    <Link to="/ecdsa/guide" className="nav-link" >Development Guide</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="menu" type="button" data-toggle="collapse" data-target="#ecdsaAPIMenu" aria-expanded="false" aria-controls="collapseExample">
                                        <Link to="/ecdsa/api" className="nav-link" >API Documentation</Link>
                                    </button>
                                    <div className="collapse" id="ecdsaAPIMenu">
                                        <div>
                                            <ul>
                                                <li className="nav-item">
                                                    <Link to="/ecdsa/api/IBondedECDSAKeep" className="nav-link" >- IBondedECDSAKeep</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/ecdsa/api/IBondedECDSAKeepFactory" className="nav-link" >-IBondedECDSAKeepFactory</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/ecdsa/resources" className="nav-link" >Resources</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <button className="menu" type="button" data-toggle="collapse" data-target="#tbtcMenu" aria-expanded="false" aria-controls="collapseExample">
                        <Link to="/tbtc" className="nav-link">TBTC</Link>
                    </button>
                    <div className="collapse" id="tbtcMenu">
                        <div className="card card-body">
                            <ul>
                                <li className="nav-item">
                                    <Link to="/tbtc/guide" className="nav-link" >Development Guide</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="menu" type="button" data-toggle="collapse" data-target="#tbtcAPIMenu" aria-expanded="false" aria-controls="collapseExample">
                                        <Link to="/tbtc/api" className="nav-link" >API Documentation</Link>
                                    </button>
                                    <div className="collapse" id="tbtcAPIMenu">
                                        <div>
                                            <ul>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/TBTCSystem" className="nav-link" >- TBTCSystem</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/VendingMachine" className="nav-link" >- VendingMachine</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/Deposit" className="nav-link" >- Deposit</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositFunding" className="nav-link" >- DepositFunding</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositLiquidation" className="nav-link" >- DepositLiquidation</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositRedemption" className="nav-link" >- DepositRedemption</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositStates" className="nav-link" >- DepositStates</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositUtils" className="nav-link" >- DepositUtils</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/DepositFactory" className="nav-link" >- DepositFactory</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/CloneFactory" className="nav-link" >- CloneFactory</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/OutsourceDepositLogging" className="nav-link" >- OutsourceDepositLogging</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/SatWeiPriceFeed" className="nav-link" >- SatWeiPriceFeed</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/FundingScript" className="nav-link" >- FundingScript</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tbtc/api/RedemptionScript" className="nav-link" >- RedemptionScript</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/tbtc/resources" className="nav-link" >Resources</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Resources</span>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a href="https://github.com/keep-network" className="nav-link">Github<ExternalIcon/></a>
                  </li>
                  <li className="nav-item">
                    <a href="https://blog.keep.network/" className="nav-link">Blog<ExternalIcon/></a>
                  </li>
                  <li className="nav-item">
                    <a href="https://discord.com/invite/wYezN7v" className="nav-link">Discord<ExternalIcon/></a>
                  </li>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Sidebar;