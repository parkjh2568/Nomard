import Proptypes from "prop-types"
import styled from "./button.module.css"

interface ButtonProps {
    text: string,
    fontSize?: number,
}

function NomalButton({text} : ButtonProps){
    return (
        <button className={styled.btn}>{text}</button>
    )
}

NomalButton.propTypes = {
    text: Proptypes.string.isRequired,
    fontSize: Proptypes.number,
}

function UnNomalButton(){

}


export {
    NomalButton as Button,
    UnNomalButton as UButton,
}