import React from 'react';
import '../NumberBtn/NumberBtn.css';

const deleteBtn = (props) => (
    <button className="NumberBtn" onClick={props.clicked} >
        <h1>DEL</h1>
    </button>
);

export default deleteBtn;