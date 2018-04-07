import React from 'react';
import './NumberBtn.css';

const numberBtn = (props) => (
    <button className="NumberBtn" onClick={() => props.clicked(props.number)} >
        <h1>{props.number}</h1>
    </button>
);

export default numberBtn;