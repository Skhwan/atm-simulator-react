import React from 'react';
import './SubmitBtn.css';

const submitBtn = (props) => (
    <button className="SubmitBtn" onClick={() => props.clicked()} >ENTER</button>
);

export default submitBtn;