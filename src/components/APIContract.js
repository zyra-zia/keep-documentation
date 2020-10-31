import React, {useState} from 'react';
import APIMethod from "./APIMethod";
import { useParams } from "react-router-dom";
import {ECDSAContracts, TBTCContracts} from "../Constants";
  
function APIContract(props) {
    let [api, setAPI] = useState({});

    let { id } = useParams();
    props.getAPI(id).then(data => {
        setAPI(data);
    });

    if(api.userdoc === undefined){
        return "Loading...";
    }

    //find constant object for contract
    let details;
    let allContracts = [...TBTCContracts, ...ECDSAContracts];
    for(let i=0; i<allContracts.length; i++){
        if(allContracts[i].name === id){
            details = allContracts[i];
            break;
        }
    }

    //merge userdocs and devdocs method descriptions
    let methods = api.devdoc.methods;
    let methodComps = [];
    
    Object.keys(api.userdoc.methods).forEach((name, index) => {
        
        if(!methods[name]){
           methods[name] = {};
        }
        methods[name].name = name;
        methods[name].notice = api.userdoc.methods[name].notice;
        methodComps.push(<APIMethod key={index} method={methods[name]}/>);
    });

    return (
            <div className="container-fluid beacon-api">
                <div className="row">
                    <a name={id}></a>
                    <h2 className="col-12 api-title">{api.contractName}</h2>
                    
                    <p className="col-12">
                        Mainnet Contract Address: &nbsp;
                        <a href={`https://etherscan.io/address/${details.mainnet}`}>
                            {details.mainnet}
                        </a>
                        <br/>
                        Ropsten Contract Address: &nbsp; 
                        <a href={`https://ropsten.etherscan.io/address/${details.ropsten}`}>
                             {details.ropsten}
                        </a>
                        <br/><br/>
                        Github: <a href={details.github}>{details.github}</a>
                    </p>

                    <p className="col-12">
                        {api.userdoc.notice}
                    </p>
                    <p className="col-12">
                        {api.devdoc.details}
                    </p>
                    <h4 className="col-12">Functions</h4>
                        {methodComps}
                </div>
            </div>
    );
}

export default APIContract;