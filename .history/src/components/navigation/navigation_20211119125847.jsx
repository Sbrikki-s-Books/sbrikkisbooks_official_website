import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

const Navigation = () => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" path="/" />
                <NavItem text="Spotify" path="/spotify" />
                <NavItem text="Stats" path="/stats" />
                <NavItem text="King" path="/king" />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" path="/" />
                <NavItem text="Spotify" path="/spotify" />
                <NavItem text="Stats" path="/stats" />
                <NavItem text="King" path="/king" />
            </div>
        </>
    )
}

export default Navigation
