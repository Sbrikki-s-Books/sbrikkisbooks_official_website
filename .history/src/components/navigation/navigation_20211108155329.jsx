import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

function Navigation(props) {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="What" link="/what" />
                <NavItem text="Who" link="/who" />
                <NavItem text="When" link="/when" />
            </div>
            <div className={styles.navMobile}>
                <div className={styles.open}>
                    <NavItem text="What" link="/what" />
                    <NavItem text="Who" link="/who" />
                    <NavItem text="When" link="/when" />
                </div>
            </div>
        </>
    )
}

export default Navigation
