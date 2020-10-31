import React from 'react';

export default function ECDSAResources() {
    return (
        <div className="container-fluid ecdsa-resources">
            <div className="row">
                <h2 className="col-12 api-title">Resources</h2>
                <p className="col-12">
                    Some useful resources are listed below:
                </p>
                <ul>
                    <li>
                        An overview of the use of ECDSA keeps in the keep network:&nbsp;
                        <a href="https://blog.keep.network/building-bridges-between-blockchains-with-t-ecdsa-keeps-e58d6debb8fd">Building Bridges Between Blockchains With t-ECDSA Keeps</a>
                    </li>
                    <li>
                        A technical description of ECDSA &nbsp;
                        <a href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm">Elliptic Curve Digital Signature Algorithm</a>
                    </li>
                    <li>
                        <a href="https://github.com/keep-network/keep-ecdsa">Keep Network ECDSA Github Repository</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}