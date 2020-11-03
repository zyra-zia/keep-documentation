import React from "react"
import Highlight from "react-highlight.js"

function ECDSATutorial() {
    return (
        <div className="container-fluid ecdsa-guide">
            <div className="row">
                <h2 className="col-12 api-title">ECDSA Development Guide</h2>
                <p className="col-12">
                    ECDSA Keeps make it possible for contracts to communicate cross-chain by signing transactions between chains.
                    ECDSA Keeps can sign transactions on any blockchain-based on ECDSA, such as Bitcoin.
                </p>
                <p className="col-12">
                    A smart contract or dapp can ask the Keep Network to create a new keep. This keep will be backed
                    by a group of randomly(using the Keep Random Beacon) selected signers.
                    These signers use t-ECDSA to generate the key that can be used to sign cross-chain transactions.
                </p>
                <h4 className="col-12">Creating a Keep</h4>
                <p className="col-12">
                    Here is a javascript code snippet showing an example call to create a new keep:    
                </p>
                <Highlight language="javascript">
                    {`
                        // example web3Providers are metamask, infura etc.
                        const web3 = new Web3(web3Provider);
                        
                        //keepFactoryJsonInterface is the contract abi for the BondedECDSAKeepFactory
                        //keepFactoryAddress is the deployed address of the BondedECDSAKeepFactory
                        const keepFactoryContract = new web3.eth.Contract(keepFactoryJsonInterface, keepFactoryAddress);
                        
                        //bond is the value of ETH bond required from the keep.
                        //groupSize is number of members in the keep.
                        //honestThreshold is minimum number of honest keep members.
                        //owner is address of the keep owner
                        //duration is stake lock duration in seconds
                        //walletAddress is the users ethereum address
                        const keepAddress = await keepFactoryContract.methods.openKeep(bond, groupSize, honestThreshold, owner, duration).send({from: walletAddress});
                    `}
                    </Highlight>

                    <h4 className="col-12">Signing a transaction</h4>
                    <Highlight language="javascript">
                    {`
                        // example web3Providers are metamask, infura etc.
                        const web3 = new Web3(web3Provider);
                        
                        //keepJsonInterface is the contract abi for the BondedECDSAKeep
                        //keepAddress is the address that was returned by the BondedECDSAKeepFactory when the keep was created
                        const keepContract = new web3.eth.Contract(keepJsonInterface, keepAddress);
                        
                        await keepContract.methods.sign(digest).send({from: walletAddress});
                    `}
                    </Highlight>

            </div>
        </div>
    );
}

export default ECDSATutorial;