import React from 'react';
import {TBTCContracts, ECDSAContracts} from "../Constants";

export default class APILoader{
    constructor(){
        this.init();
        this.loadedContracts = [];
    }

    init(){
        let allContracts = [...TBTCContracts, ...ECDSAContracts]
        allContracts.forEach((contract, index)=> {
            fetch(process.env.PUBLIC_URL + "/contracts/" + contract.name + ".json").then((response)=>{
                return response.json();
            }).then((data)=> {
                this.loadedContracts[contract.name] = data;
            }).catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        })
    }

    getAPI(name){
        const promise = new Promise( (resolve , reject) => {
            const intId = setInterval( () => {
                if(this.loadedContracts[name] !== undefined){
                    clearInterval(intId);
                    resolve(this.loadedContracts[name]);
                }
            }, 500); 
        });
        return promise;
    }
}
