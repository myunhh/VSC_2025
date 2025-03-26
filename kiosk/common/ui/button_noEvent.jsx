import React, { useState } from 'react';
import "./button.css";

function Button(props) {    

    return (
        <button className={`btn bg${props.color} mr10`} onClick={props.event}>
            {props.text}
        </button>

        // <button className={`btn bg${props.color} mr10`} onClick={handleClick}>{isToggleOn ? props.text : '꺼짐'}</button>
    );
}

export default Button;