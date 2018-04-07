import React from 'react';
import './SubmitBtn.css';

const submitBtn = (props) => (
    <button className="SubmitBtn" onClick={() => props.clicked()} >DISPENSE</button>
);

export default submitBtn;