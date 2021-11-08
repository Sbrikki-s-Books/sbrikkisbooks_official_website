import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

function Navigation() {
    return (
        <div className={styles.navDesktop}>
            <div className={styles.navMobile}>

            </div>
            <NavItem text="Read" link="/read" />
            <NavItem text="Alcool" link="/alcool" />
            <NavItem text="Pfizer" link="/pfizer" />
        </div>
    )
}

export default Navigation
