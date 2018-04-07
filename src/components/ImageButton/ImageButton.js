import React from 'react';
import './ImageButton.css';

const imageButton = (props) => {
    return (
        <div className="ImageButton">
            <img src={props.src} alt={props.alt} />
            <h1>{props.title}</h1>
        </div>
    )
}

export default imageButton;