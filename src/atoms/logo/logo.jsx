import React from 'react'
import logo from '../../assets/sbrikkislogoextended.svg'
import * as styles from './logo.module.scss'

const Logo = ({width = 100, to = '/', title = 'Go to Home Page' }) => {
    return (
        <a href={to} title={title}>
            <img 
                src={logo} 
                alt="Sbrikki's Books Logo"
                className={styles.logo}
                width={width + "px"}
                height={"auto"}
                title="Sbrikki's Books Logo"
            />
        </a>
    )
}

export default Logo
