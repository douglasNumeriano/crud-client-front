import React from "react";
import InputMask from "react-input-mask";

function InputTel (props) {
    return(
        <InputMask mask="(99)9999-9999" type={props.type} id={props.id} className={props.className} name={props.name} onChange={props.onChange} />
      );
}

export default InputTel;