import React from "react";
import styledBtn from './Button.module.css';
const Button = (props) =>{
    return <button className={styledBtn.button} onClick={props.onClick} type="submit">{props.children}</button>
}

export default Button;