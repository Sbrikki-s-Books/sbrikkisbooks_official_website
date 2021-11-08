import React from 'react'
import * as styles from './navBar.module.scss'
import Logo from '../../atoms/logo/logo'
import Navigation from '../navigation/navigation'

const NavBar = () => {

    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <Logo width="70px" height="70px"/>
            </div>
            <div className={styles.navigation}>
                <Navigation />
            </div>
        </div>
    )
}

export default NavBar
