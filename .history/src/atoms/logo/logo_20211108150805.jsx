import React from 'react'
import logo from '../../assets/logo.png'
import * as styles from './logo.module.scss'

const Logo = (props) => {
    return (
        <img 
            src={logo} 
            alt="Logo"
            className={styles.logo}
        />
    )
}

export default Logo
