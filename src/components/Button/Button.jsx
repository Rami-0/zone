import React from "react";
import css from "./Button.module.css"

// types : disabled
// colors : black, orange, white 
const Button = ({ text, type, className, onClick}) => {
	return <button className={`${css.button} ${className}`} type={type} onClick={onClick ? onClick : null} >{text}</button>;
};

export default Button;
