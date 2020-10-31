import React from "react";

function RandomBeaconResources() {
    return (
        <div className="container-fluid beacon-resources">
            <div className="row">
                <h2 className="col-12 api-title">Resources</h2>
                <p className="col-12">
                    Some useful resources are listed below:
                </p>
                <ul>
                    <li>
                        An in-depth explanation of the Random Beacon:&nbsp;
                        <a href="https://docs.keep.network/random-beacon/">The Keep Random Beacon: An Implementation of a Threshold Relay</a>
                    </li>
                    <li>
                        A javascript library for using the random beacon:&nbsp;
                        <a href="http://keeprandom.top/">Keep.random</a>
                    </li>
                    <li>
                        A simple dapp that uses the random beacon to generate random numbers:&nbsp;
                        <a href="https://the-only-chance.com/">Keep The Only Chance</a>
                    </li>
                    <li>
                        A guide to a demo dapp that explains how to use the random beacon: &nbsp;
                        Part 1: <a href="https://blog.keep.network/random-beacon-alpha-api-and-demo-app-9b8f9c6347b6">Random Beacon Demo App Part 1</a>
                        &nbsp; and Part 2: <a href="https://blog.keep.network/random-beacon-alpha-api-demo-part-2-f3564aef4930">Random Beacon Demo App Part 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RandomBeaconResources;