import React from "react";
import InputMask from "react-input-mask";

function InputCep (props) {
    return(
        <InputMask mask="99999-999" type={props.type} id={props.id} className={props.className} name={props.name} onChange={props.onChange} />
      );
}

export default InputCep;