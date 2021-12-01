import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

const Navigation = () => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" path="/sbrikkisbooks_official_website/" />
                <NavItem text="Spotify" path="/sbrikkisbooks_official_website/spotify" />
                <NavItem text="Stats" path="/sbrikkisbooks_official_website/stats" />
                <NavItem text="King" path="/sbrikkisbooks_official_website/king" />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" path="/sbrikkisbooks_official_website/" />
                <NavItem text="Spotify" path="/sbrikkisbooks_official_website/spotify" />
                <NavItem text="Stats" path="/sbrikkisbooks_official_website/stats" />
                <NavItem text="King" path="/sbrikkisbooks_official_website/king" />
            </div>
        </>
    )
}

export default Navigation