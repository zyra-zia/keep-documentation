import React from "react"
import Highlight from "react-highlight.js"

function TBTCTutorial() {
    return (
        <div className="container-fluid tbtc-guide">
            <div className="row">
                <h2 className="col-12 api-title">TBTC Development Guide</h2>
                <p className="col-12">
                    Keep Network has developed tbtc.js, a javascript library for interacting with  the TBTC contracts. 
                    You can find complete working examples for deposits and redemptions at&nbsp;
                    <a href="https://github.com/keep-network/tbtc.js/tree/master/examples">
                        https://github.com/keep-network/tbtc.js/tree/master/examples
                    </a>
                </p>
                <h4 className="col-12">Initializing the TBTC configuration</h4>
                <p className="col-12">
                    Once you’ve required tbtc.js, you can get a handle to a configured TBTC setup:
                    <br/>
                    <Highlight language="javascript">
{`import TBTC from './src/TBTC.js';

const tbtc = await TBTC.withConfig({
    web3: web3,
    bitcoinNetwork: "testnet",
    electrum: {
        "testnet": {
            "server": "electrumx-server.test.tbtc.network",
            "port": 50002,
            "protocol": "ssl"
        },
        "testnetWS": {
            "server": "electrumx-server.test.tbtc.network",
            "port": 50003,
            "protocol": "ws"
        }
    },
})`}
                    </Highlight>
                </p>
                <h4 className="col-12">Creating and Funding a Deposit</h4>
                <p className="col-12">
                    With a configured handle to the system, you can fetch the DepositFactory and have a look at available lot sizes, in satoshis:
                    <br/>
                    <Highlight language="javascript">
                        const lotSizes = await tbtc.Deposit.availableSatoshiLotSizes()
                    </Highlight>
                    
                    Then you can make a deposit with any of those; let’s start with the smallest:<br/>

                    <Highlight language="javascript">
                        const deposit = await tbtc.Deposit.withSatoshiLotSize(lotSizes[0])
                    </Highlight>

                    At this point, you have a handle to a deposit that is in the process of initializing. 
                    In the background, a signer group is being selected and undergoing distributed key generation, 
                    at which point it will publish its public key to the Ethereum chain. Once that key is published, 
                    in the current testnet version, you need to poke the deposit to fetch it from the signers 
                    and store it internally. Then you can generate a Bitcoin address from that public key, 
                    use that to send a transaction to the generated address on the Bitcoin chain. 
                    Then you have to wait for that transaction to accumulate sufficient work 
                    (on the testnet, that’s 1 confirmation’s worth), and finally submit a proof 
                    to the Ethereum chain that your transaction was sufficiently confirmed. Then 
                    the deposit becomes active and you can mint TBTC.
                    <br/>
                    That’s a lot, and it’s annoying, so you can do all of the interchain coordination with one call:
                    <br/>
                    <Highlight language="javascript">
                        deposit.autoSubmit()
                    </Highlight>
                    This will wait for the public key from the signers, submit it to the Ethereum chain, generate the Bitcoin address, watch for the Bitcoin transaction, wait for the right confirmations, and submit the proof. Your code just needs to listen for the Bitcoin address and present it on the console:
                    <br/>
                    <Highlight language="javascript">
                    
{`deposit.onBitcoinAddressAvailable(async (address) => {
    const lotSize = await deposit.getLotSizeSatoshis()
    console.log(
        "\tGot deposit address:", address,
        "; fund with:", lotSize.toString(), "satoshis please.",
    )
    console.log("Now monitoring for deposit transaction...")
})
`}
                    </Highlight>
                    And then you can send Bitcoin to that address when it’s printed.<br/>
                    <br/>
                    Once the deposit is active, you can mint TBTC. You can wait for that event and react accordingly:
                    <Highlight language="javascript">
{`deposit.onActive(async (deposit) => {
    console.log("Deposit is active, minting...")
    const tbtcBits = await deposit.mintTBTC()
    console.log(\`Minted \${tbtcBits} TBTC bits!\`)
    // or if you want some TDT action
    // deposit.depositTokenContract.transfer(someLuckyContract)
})`}
                    </Highlight>
                    Minting TBTC gives deposit ownership to the tBTC Vending Machine, though this is largely abstracted away here.
                </p>
                
                <h4 className="col-12">Redeeming a Deposit</h4>
                <p className="col-12">
                    Once you have enough TBTC, you can redeem an existing deposit. 
                    First, you want to look up the deposit you’re trying to redeem:
                    <br/>
                    <Highlight language="javascript">
                    {`const depositToRedeem = await tbtc.Deposit.withAddress("0x<existing deposit address>")`}
                    </Highlight>

                    Then, you can call requestRedemption and pass it a testnet P2WPKH address:
                    <br/>
                    <Highlight language="javascript">
                    const redemption = await deposit.requestRedemption("tb...")
                    </Highlight>
                    
                    Like funding, redemption requires a bit of coordination between the Ethereum and Bitcoin chains: 
                    the client has to construct an unsigned Bitcoin transaction from the signer wallet to the designated 
                    redeemer address, the signers must generate a signature for that transaction, and then the client 
                    must broadcast that transaction to the Bitcoin chain. Finally, after sufficient work has been 
                    included on the Bitcoin chain, the client must notify the Ethereum chain that the deposit is 
                    redeemed by submitting a proof to the deposit.
                    <br/>
                    Once again, that can be automated away by a single call:
                    <br/>
                    <Highlight language="javascript">
                    redemption.autoSubmit()
                    </Highlight>

                    If you want to do something once the redemption is completed, you can use the onWithdrawn handler,
                     which receives the transaction ID/hash of the Bitcoin transaction that redeemed the deposit:

                     <Highlight language="javascript">
{`redemption.onWithdrawn((transactionID) => {
    console.log(
        \`Redeemed deposit \${deposit.address} with Bitcoin transaction \` +
        \`\${transactionID}.\`
    )
})`}
                    </Highlight>
                </p>
            </div>
        </div>
    );
}

export default TBTCTutorial;