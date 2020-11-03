import React from "react"
import {Link} from "react-router-dom"
import Highlight from "react-highlight.js"

function RandomBeaconTutorial() {
    return (
        <div className="container-fluid beacon-guide">
            <div className="row">
                <h2 className="col-12 api-title">Random Beacon Development Guide</h2>
                <p className="col-12">
                    The Random Beacon has one overloaded method&nbsp;
                    <Link to="/random-beacon/api#requestRelayEntry1">requestRelayEntry(address callbackContract, uint256 callbackGas)</Link>&nbsp;
                    and <a href="random-beacon/api#requestRelayEntry2">requestRelayEntry()</a>&nbsp;
                    for requesting random numbers with and without a contract callback, respectively.
                </p>
                <p className="col-12">
                    Dapps that need a random number should use the <a href="random-beacon/api#requestRelayEntry2">requestRelayEntry</a> method,
                    this method returns a relay request id. Once
                    a random entry is generated, a <a href="random-beacon/api#RelayEntryGenerated">RelayEntryGenerated(uint256 requestId, uint256 entry)</a>
                    &nbsp; event is emitted. The dapp should listen to this event to receive the random number.
                </p>
                <p className="col-12">
                    A contract that needs a random number should implement the <a href="random-beacon/api#IRandomBeaconConsumer">IRandomBeaconConsumer</a> interface and 
                    call the <a href="random-beacon/api#requestRelayEntry2">requestRelayEntry</a> with the callback contract specified. Once a 
                    random entry is generated, the <a href="random-beacon/api#beaconCallback">__beaconCallback(uint256 relayEntry)</a> method of the consumer 
                    contract will be called with the new random number.
                </p>
                <div className="col-12">
                    Here is a javascript code snippet showing an example call to the random beacon:
                    <Highlight language="javascript">
                    {`
                        // example web3Providers are metamask, infura etc.
                        const web3 = new Web3(web3Provider);
                        
                        //randomBeaconJsonInterface is the contract abi for the random beacon
                        //randomBeaconAddress is the deployed address of the KeepRandomBeaconServiceImplV1 contract
                        const beaconContract = new web3.eth.Contract(randomBeaconJsonInterface, randomBeaconAddress);
                        
                        //walletAddress is the users ethereum address
                        const relayId = await beaconContract.methods.requestRelayEntry().send({from: walletAddress});
                        
                        beaconContract.RelayEntryGenerated().watch((error, result) => {
                            if (error)
                                console.log(error);
                            else
                                console.log('random number: ' + JSON.stringify(result.args));
                        });
                    `}
                    </Highlight>
                </div>
            </div>
        </div>
    );
}

export default RandomBeaconTutorial;