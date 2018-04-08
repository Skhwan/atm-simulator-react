import React from 'react';
import './Result.css';
import cashLogo from '../../assets/image/cash.png';
import warningLogo from '../../assets/image/warning.png';
import successLogo from '../../assets/image/success.png';

const result = (props) => {
    let logo;
    let id;
    if("0" === props.resultCode){
        id="success";
        logo = successLogo;
    }else if("1" === props.resultCode){
        id="warning";
        logo = warningLogo;
    }else {
        id="cash";
        logo = cashLogo;
    }

    return (
        <div className="Result" >
            <img id={id} src={logo} alt="cash"/>
            <h1>{props.resultStr}</h1>
        </div>
    )
}

export default result;