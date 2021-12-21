import React from 'react'
import logo from '../../assets/sbrikkislogo.svg'
import * as styles from './logo.module.scss'

const Logo = () => {
    return (
        <a href="/" title='Go to Home Page'>
            <img 
                src={logo} 
                alt="Sbrikki's Books Logo"
                className={styles.logo}
                width={"50px"}
                height={"50px"}
                title="Sbrikki's Books Logo"
            />
        </a>
    )
}

export default Logo
