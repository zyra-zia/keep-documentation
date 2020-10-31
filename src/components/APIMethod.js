import React, { Fragment } from 'react';
  
function extractFunctionName(longName){
    return longName.substring(0 , longName.indexOf("(")).trim();
}

export default function APIMethod(props) {
    
    let method = props.method;
    let parameters = [];
    if(method.params !== undefined){
        Object.keys(method.params).forEach((paramName, index)=>{
            parameters.push(
                <Fragment key={index}>
                    <h6 className="param-name">
                        {paramName}
                    </h6>
                    <p className="param-desc">
                        {method.params[paramName]}
                    </p>
                </Fragment>
            );
        });
    }
    return (
        <div className="function col-12">
                        <a name={extractFunctionName(method.name)}></a>
                        <code>function {method.name}</code>
                        {parameters}
                        <p className="description">
                            {method.notice}
                        </p>
                        <p>
                            {method.details}
                        </p>
                        {method.return!==undefined ? 
                        <Fragment>
                            <h6 className="return">
                                Returns
                            </h6>
                            <p>
                                {method.return}
                            </p>
                        </Fragment>
                        :
                        null
                        }
                    </div>
    );
}