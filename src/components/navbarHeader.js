import React from 'react'

function NavbarHeader(props){
    return(
        <a href={props.href} className="navbar-brand">{props.label}</a>
    )
}

export default NavbarHeader