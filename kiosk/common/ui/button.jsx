import React, { useState } from 'react';
import "./button.css";

function Button(props) {
    /* const [isToggleOn, setIsToggleOn] = useState(true);

    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    } */

    return (
        <button className={`btn bg${props.color} mr10`} onClick={props.event || null}>
            {props.text}
        </button>

        // <button className={`btn bg${props.color} mr10`} onClick={handleClick}>{isToggleOn ? props.text : '꺼짐'}</button>
    );
}

export default Button;