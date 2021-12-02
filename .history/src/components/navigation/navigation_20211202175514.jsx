import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

const Navigation = (props) => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" path="/sbrikkisbooks/" />
                <NavItem text="Spotify" path="/sbrikkisbooks/spotify" />
                <NavItem text="Stats" path="/sbrikkisbooks/stats" />
                <NavItem text="King" path="/sbrikkisbooks/king" />
                <NavItem text="Contact us" path="/sbrikkisbooks/#contactUs" />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" path="/sbrikkisbooks/" onClick={props.onClick} />
                <NavItem text="Spotify" path="/sbrikkisbooks/spotify" onClick={props.onClick} />
                <NavItem text="Stats" path="/sbrikkisbooks/stats" onClick={props.onClick} />
                <NavItem text="King" path="/sbrikkisbooks/king" onClick={props.onClick} />
            </div>
        </>
    )
}

export default Navigation
