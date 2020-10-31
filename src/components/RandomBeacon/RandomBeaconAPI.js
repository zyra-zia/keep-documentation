import React from 'react';

function RandomBeaconAPI(){
        return (
            <div className="container-fluid beacon-api">
                <div className="row">
                    <h2 className="col-12 api-title">Keep Random Beacon API</h2>
                    <p className="col-12">
                        Mainnet Contract Address: &nbsp;
                        <a href="https://etherscan.io/address/0x09959798B95d00a3183d20FaC298E4594E599eab">
                             0x09959798B95d00a3183d20FaC298E4594E599eab 
                        </a>
                        <br/>
                        Ropsten Contract Address: &nbsp; 
                        <a href="https://ropsten.etherscan.io/address/0x036474c5Fb4d3A4Ab6BB86428cB4bd93E83dd360">
                             0x036474c5Fb4d3A4Ab6BB86428cB4bd93E83dd360 
                        </a>
                        <br/><br/>
                        Github: <a href="https://github.com/keep-network/keep-core/blob/master/solidity/contracts/KeepRandomBeaconServiceImplV1.sol">
                        KeepRandomBeaconServiceImplV1</a> implements the 
                        <a href="https://github.com/keep-network/keep-core/blob/master/solidity/contracts/IRandomBeacon.sol"> IRandomBeacon </a> 
                        interface described below.
                    </p>
                
                    <a name="IRandomBeacon"></a>
                    <h3 className="col-12 api-title">Interface IRandomBeacon</h3>
                    <p className="col-12">
                        Keep Random Beacon generates verifiable randomness that is resistant to 
                        bad actors both in the relay network and on the anchoring blockchain.
                    </p>
                    <h4 className="col-12">Events</h4>
                    <div className="event col-12">
                        <a name="RelayEntryGenerated"></a>
                        <code>Event RelayEntryGenerated(uint256 requestId, uint256 entry)</code>
                        <h6 className="param-name">
                            uint256 requestId
                        </h6>
                        <p className="param-desc">
                            Relay request ID for which entry was generated.
                        </p>
                        <h6 className="param-name">
                            uint256 entry
                        </h6>
                        <p className="param-desc">
                            Generated relay entry.
                        </p>
                        <p className="description">
                            Event emitted for each new relay entry generated. It contains
                            request ID allowing to associate the generated relay entry with relay
                            request created previously with <a href="#requestRelayEntry1">`requestRelayEntry`</a> function. Event is
                            emitted no matter if callback was executed or not.
                        </p>
                    </div>
                    <h4 className="col-12">Functions</h4>
                    <div className="function col-12">
                        <a name="entryFeeEstimate"></a>
                        <code>function entryFeeEstimate(uint256 callbackGas)</code>
                        <h6 className="param-name">
                            uint256 callbackGas
                        </h6>
                        <p className="param-desc">
                            Gas required for the callback.
                        </p>
                        <p className="description">
                            Provides the customer with an estimated entry fee in wei to use
                            in the request. The fee estimate is only valid for the transaction it is
                            called in, so the customer must make the request immediately after
                            obtaining the estimate. Insufficient payment will lead to the request
                            being rejected and the transaction reverted.
                        </p>
                        <p>
                            The customer may decide to provide more ether for an entry fee than
                            estimated by this function. This is especially helpful when callback gas
                            cost fluctuates. Any surplus between the passed fee and the actual cost
                            of producing an entry and executing a callback is returned back to the
                            customer.
                        </p>
                    </div>
                    <div className="function col-12">
                        <a name="requestRelayEntry1"></a>
                        <code>function requestRelayEntry(address callbackContract, uint256 callbackGas)
                            external
                            payable
                            returns (uint256)
                        </code>
                        <h6 className="param-name">
                            address callbackContract
                        </h6>
                        <p className="param-desc">
                            Callback contract address. Callback is called once a new relay entry has been 
                            generated. Must declare public <a href="#beaconCallback">`__beaconCallback(uint256)`</a> function. It is 
                            recommended to implement <a href="#IRandomBeaconConsumer">`IRandomBeaconConsumer`</a> interface to ensure the correct 
                            callback function signature.
                        </p>
                        <h6 className="param-name">
                            uint256 callbackGas
                        </h6>
                        <p className="param-desc">
                            Gas required for the callback. The customer needs to ensure they provide a 
                            sufficient callback gas to cover the gas fee of executing the callback. 
                            Any surplus is returned to the customer. If the callback gas amount turns 
                            to be not enough to execute the callback, callback execution is skipped.
                        </p>
                        <p className="description">
                            Submits a request to generate a new relay entry. Executes callback on the provided 
                            callback contract with the generated entry and emits <a href="#RelayEntryGenerated">
                            `RelayEntryGenerated(uint256 requestId, uint256 entry)`</a> event. Callback contract 
                            has to declare public 
                            <a href="#beaconCallback">`__beaconCallback(uint256)`</a> function that is going 
                            to be executed with the result, once ready. It is recommended to implement 
                            <a href="#IRandomBeaconConsumer">`IRandomBeaconConsumer`</a> interface to 
                            ensure the correct callback function signature.
                        </p>
                        <p>
                            Beacon does not support concurrent relay requests. No new requests should be made 
                            while the beacon is already processing another request. Requests made while the 
                            beacon is busy will be rejected and the transaction reverted.
                        </p>
                        <h6 className="return">
                            Returns
                        </h6>
                        <p>
                            An uint256 representing uniquely generated relay request ID.
                        </p>
                    </div>
                    <div className="function col-12">
                        <a name="requestRelayEntry2"></a>
                        <code>
                            function requestRelayEntry() external payable returns (uint256)
                        </code>
                        <p className="description">
                            Submits a request to generate a new relay entry. Emits 
                            <a href="#RelayEntryGenerated">`RelayEntryGenerated(uint256 requestId, uint256 entry)`</a> 
                            event for the generated entry. 
                        </p>
                        <p>
                            Beacon does not support concurrent relay requests. No new requests should be made 
                            while the beacon is already processing another request. Requests made while the 
                            beacon is busy will be rejected and the transaction reverted.
                        </p>
                        <h6 className="return">
                            Returns
                        </h6>
                        <p>
                            An uint256 representing uniquely generated relay request ID.
                        </p>
                    </div>
                    <a name="IRandomBeaconConsumer"></a>
                    <h3 className="col-12 api-title">Interface IRandomBeaconConsumer</h3>
                    <p className="col-12">
                        Receives Keep Random Beacon relay entries with <a href="#beaconCallback">`__beaconCallback`</a>
                        &nbsp;function. Contract implementing this interface does not have to be the one
                        requesting relay entry but it is the one receiving the requested relay entry
                        once it is produced.
                    </p>
                    <p className="col-12">
                        Use this interface to indicate the contract receives relay entries from
                        the beacon and to ensure the correctness of callback function signature.
                    </p>
                    <h4 className="col-12">Functions</h4>
                    <div className="function col-12">
                        <a name="beaconCallback"></a>
                        <code>
                            function __beaconCallback(uint256 relayEntry) external
                        </code>
                        <p className="description">
                            Receives relay entry produced by Keep Random Beacon. This function 
                            should be called only by Keep Random Beacon.
                        </p>
                        <h6 className="param-name">
                            uint256 relayEntry
                        </h6>
                        <p className="param-desc">
                            Relay entry (random number) produced by Keep Random Beacon.
                        </p>
                    </div>
                </div>
            </div>
        );
    }


export default RandomBeaconAPI;