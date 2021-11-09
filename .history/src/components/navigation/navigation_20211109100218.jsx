import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

function Navigation() {
    const menu = () =>{
        <>
                <NavItem text="What" link="/what" />
                <NavItem text="Who" link="/who" />
        </>
    }
    return (
        <>
            <div className={styles.navDesktop}>
                {menu}
            </div>
            <div className={styles.navMobile}>
                {menu}
            </div>
        </>
    )
}

export default Navigation
