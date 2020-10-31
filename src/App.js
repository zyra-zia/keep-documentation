import React from 'react';
import RandomBeaconAPI from "./components/RandomBeacon/RandomBeaconAPI";
import RandomBeaconTutorial from "./components/RandomBeacon/RandomBeaconTutorial";
import RandomBeaconResources from "./components/RandomBeacon/RandomBeaconResources";
import RandomBeaconIntro from "./components/RandomBeacon/RandomBeaconIntro";
import ECDSAIntro from "./components/ECDSA/ECDSAIntro";
import ECDSATutorial from "./components/ECDSA/ECDSATutorial";
import ECDSAAPI from "./components/ECDSA/ECDSAAPI";
import ECDSAResources from "./components/ECDSA/ECDSAResources";
import TBTCIntro from "./components/TBTC/TBTCIntro";
import TBTCAPI from "./components/TBTC/TBTCAPI";
import TBTCTutorial from "./components/TBTC/TBTCTutorial";
import TBTCResources from "./components/TBTC/TBTCResources";
import APIContract from "./components/APIContract";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import APILoader from "./components/APILoader";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

function App() {
  let api = new APILoader();

  let getAPI = function(id){
    return api.getAPI(id);
  }

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">Keep Network Documentation</a>
          <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="dropdown" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <Sidebar />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route path="/random-beacon/guide">
                  <RandomBeaconTutorial />
                </Route>
                <Route path="/random-beacon/api">
                  <RandomBeaconAPI />
                </Route>
                <Route path="/random-beacon/resources">
                  <RandomBeaconResources />
                </Route>
                <Route path="/random-beacon">
                  <RandomBeaconIntro />
                </Route>
                <Route path="/ecdsa/guide">
                  <ECDSATutorial />
                </Route>
                <Route path="/ecdsa/api/:id">
                  <APIContract getAPI={getAPI}/>
                </Route>
                <Route path="/ecdsa/api">
                  <ECDSAAPI />
                </Route>
                <Route path="/ecdsa/resources">
                  <ECDSAResources />
                </Route>
                <Route path="/ecdsa">
                  <ECDSAIntro />
                </Route>
                <Route path="/tbtc/guide">
                  <TBTCTutorial />
                </Route>
                <Route path="/tbtc/api/:id">
                  <APIContract getAPI={getAPI}/>
                </Route>
                <Route path="/tbtc/api">
                  <TBTCAPI />
                </Route>
                <Route path="/tbtc/resources">
                  <TBTCResources />
                </Route>
                <Route path="/tbtc">
                  <TBTCIntro />
                </Route>
                <Route path="/" default>
                  <Home />
                </Route>
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
