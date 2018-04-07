import React from 'react';
import './Result.css';
import cashImg from '../../assets/image/cash.png';

const result = (props) => (
    <div className="Result" >
        <img src={cashImg} alt="Cash"/>
        <h1>{props.result}</h1>
    </div>
);

export default result;