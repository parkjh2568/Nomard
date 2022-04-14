import Proptypes from "prop-types"
import styled from "./Button.module.css"

interface ButtonProps {
    text: string,
    fontSize?: number,
    onClick ?: ()=> void,
}

function NomalButton({text, fontSize, onClick} : ButtonProps){
    return (
        <button className={styled.btn} style={{fontSize}} onClick={onClick}>{text}</button>
    )
}
NomalButton.propTypes = {
    text: Proptypes.string.isRequired,
    fontSize: Proptypes.number,
}


export {
    NomalButton as Button,
}