import React from 'react';
import './BtnWrapper.css';

const grid = (props) => {
    return (
        <div className="BtnWrapper">
            {props.children}
        </div>
    )
}

export default grid;