import React from 'react'

function FormCheck(props){
    return (
        <div className="form-check">
            {props.children}
            <label htmlFor={props.htmlFor}>{props.label}</label>
        </div>
    )
}

export default FormCheck