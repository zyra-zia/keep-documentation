import React from 'react';

export default function TBTCResources() {
    return (
        <div className="container-fluid tbtc-resources">
            <div className="row">
                <h2 className="col-12 api-title">Resources</h2>
                <p className="col-12">
                    Some useful resources are listed below:
                </p>
                <ul>
                    <li>
                        An introduction to TBTC:&nbsp;
                        <a href="https://blog.keep.network/introducing-tbtc-the-safest-way-to-earn-with-your-bitcoin-fec077f171f4">Introducing tBTC: The Safe Way to Earn with Your Bitcoin</a>
                    </li>
                    <li>
                        The TBTC dapp for minting and redeeming TBTC: &nbsp;
                        <a href="https://dapp.test.tbtc.network/">TBTC Testnet Dapp</a> and <a href="https://dapp.tbtc.network/">TBTC Mainnet Dapp</a>
                    </li>
                    <li>
                        An in-depth explanation of how TBTC works: &nbsp;
                        <a href="https://docs.keep.network/tbtc/">tBTC: A Decentralized Redeemable BTC-backed ERC-20 Token</a>
                    </li>
                    <li>
                        A javascript library for using tBTC: &nbsp;
                        <a href="https://github.com/keep-network/tbtc.js">tBTC.js Github</a>
                    </li>
                    <li>
                        Official TBTC website: &nbsp;
                        <a href="https://tbtc.network/">TBTC</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}