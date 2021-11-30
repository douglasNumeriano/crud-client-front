import React from "react";
import InputMask from "react-input-mask";

function InputCpf (props) {
    return(
        <InputMask mask="999.999.999-99" type={props.type} id={props.id} className={props.className} name={props.name} onChange={props.onChange} />
      );
}

export default InputCpf;