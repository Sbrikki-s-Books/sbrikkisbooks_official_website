import React from 'react'
import * as styles from './navBar.module.scss'
import NavItem from '../../atoms/navItem/navItem'
import Logo from '../../atoms/logo/logo'

const NavBar = () => {

    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.navigation}>
                <NavItem text="Read" link="/read" />
                <NavItem text="Alcool" link="/alcool" />
                <NavItem text="Pfizer" link="/pfizer" />
            </div>
        </div>
    )
}

export default NavBar
