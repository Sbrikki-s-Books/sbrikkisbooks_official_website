import React from 'react'
import logo from '../../assets/logo.svg'
import * as styles from './logo.module.scss'

const Logo = (props) => {
    return (
        <a href="/" title='Go to Home Page'>
            <img 
                src={logo} 
                alt="Sbrikki's Books Logo"
                className={styles.logo}
                width={"50px"}
                height={"50px"}
            />
        </a>
    )
}

export default Logo
