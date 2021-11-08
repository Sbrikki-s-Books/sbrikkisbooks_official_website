import React from 'react'
import logo from '../../assets/logo.png'

const Logo = (props) => {
    return (
        <img 
            src={logo} 
            alt="Logo"
            width={props.width}
            height={props.height}
        />
    )
}

export default Logo
