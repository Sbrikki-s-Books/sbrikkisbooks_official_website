import React from 'react'
import * as styles from './navBar.module.scss'
import NavItem from '../../atoms/navItem/navItem'

const NavBar = () => {

    return (
        <div className={styles.navBar}>
            <NavItem text="Read" link="/read" />
            <NavItem text="Alcool" link="/alcool" />
            <NavItem text="Pfizer" link="/pfizer" />
        </div>
    )
}

export default NavBar
