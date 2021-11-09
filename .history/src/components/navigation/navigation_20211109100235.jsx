import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

function Navigation() {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="What" link="/what" />
                <NavItem text="Who" link="/who" />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="What" link="/what" />
                <NavItem text="Who" link="/who" />
            </div>
        </>
    )
}

export default Navigation
