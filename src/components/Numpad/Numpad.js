import React from 'react';
import './Numpad.css';
import NumberBtn from './NumberBtn/NumberBtn';
import DeleteBtn from './DeleteBtn/DeleteBtn';
import ClearBtn from './ClearBtn/ClearBtn';
import SubmitBtn from './SubmitBtn/SubmitBtn';

const numpad = (props) => (
    <div className="Numpad">
        <h1 className="Numpad">ATM Simulator</h1>
        <input id="input" type="text" value={props.userInput} disabled />
        <div id="pad">
            <NumberBtn number="1" clicked={props.clicked} />
            <NumberBtn number="2" clicked={props.clicked} />
            <NumberBtn number="3" clicked={props.clicked} />
            <NumberBtn number="4" clicked={props.clicked} />
            <NumberBtn number="5" clicked={props.clicked} />
            <NumberBtn number="6" clicked={props.clicked} />
            <NumberBtn number="7" clicked={props.clicked} />
            <NumberBtn number="8" clicked={props.clicked} />
            <NumberBtn number="9" clicked={props.clicked} />
            <ClearBtn clicked={props.clear}/>
            <NumberBtn number="0" clicked={props.clicked} />
            <DeleteBtn clicked={props.del}/>
            <SubmitBtn clicked={props.dispense} />
        </div>
    </div>
);

export default numpad;