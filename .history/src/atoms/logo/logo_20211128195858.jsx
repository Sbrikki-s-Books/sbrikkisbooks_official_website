import React from 'react'
import logo from '../../assets/logo.svg'
import * as styles from './logo.module.scss'

const Logo = (props) => {
    return (
        <a >
            <img 
                src={logo} 
                alt="Sbrikki's Books Logo"
                href="/"
                className={styles.logo}
            />
        </a>
    )
}

export default Logo
