import React from 'react'
import logo from '../../assets/sbrikkislogoextended.svg'
import * as styles from './logo.module.scss'

const Logo = () => {
    return (
        <a href="/" title='Go to Home Page'>
            <img 
                src={logo} 
                alt="Sbrikki's Books Logo"
                className={styles.logo}
                width={"100px"}
                height={"auto"}
                title="Sbrikki's Books Logo"
            />
        </a>
    )
}

export default Logo
