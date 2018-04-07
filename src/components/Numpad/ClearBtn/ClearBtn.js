import React from 'react';
import '../NumberBtn/NumberBtn.css';

const clearBtn = (props) => (
    <button className="NumberBtn" onClick={props.clicked} >
        <h1>C</h1>
    </button>
);

export default clearBtn;