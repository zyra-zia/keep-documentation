import React from "react"
import {Link} from "react-router-dom"

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
                    <pre>
                        
                        // example web3Providers are metamask, infura etc.<br/>
                        const web3 = new Web3(web3Provider);
                        <br/><br/>
                        //randomBeaconJsonInterface is the contract abi for the random beacon<br/>
                        const beaconContract = new web3.eth.Contract(randomBeaconJsonInterface);
                        <br/><br/>
                        //walletAddress is the users ethereum address<br/>
                        const relayId = await beaconContract.methods.requestRelayEntry().send(&#123;from: walletAddress&#125;);
                        <br/><br/>
                        beaconContract.RelayEntryGenerated().watch((error, result) =&gt; &#123;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;if (error)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(error);<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;else<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('random number: ' + JSON.stringify(result.args));<br/>
                        &#125;);<br/>
                        
                    </pre> 
                </div>
            </div>
        </div>
    );
}

export default RandomBeaconTutorial;