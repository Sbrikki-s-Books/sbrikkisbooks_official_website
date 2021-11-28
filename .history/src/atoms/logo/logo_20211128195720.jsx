import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import * as styles from './logo.module.scss'

const Logo = (props) => {
    return (
        <Link href="/">
            <img 
                src={logo} 
                alt="Sbrikki's Books Logo"
                className={styles.logo}
            />
        </Link>
    )
}

export default Logo
