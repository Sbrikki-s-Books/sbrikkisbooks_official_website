import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

const Navigation = (props) => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" path="/sbrikkisbooks_official_website/" />
                <NavItem text="Spotify" path="/sbrikkisbooks_official_website/spotify" />
                <NavItem text="Stats" path="/sbrikkisbooks_official_website/stats" />
                <NavItem text="King" path="/sbrikkisbooks_official_website/king" />
                <NavItem text="Contact us" path="/#contactUs" />
            </div>
            <div className={props.navBarOpen? styles.navMobileOpen : styles.navMobileClosed }>
                <NavItem text="Home" path="/sbrikkisbooks_official_website/" onClick={props.onClick} /> 
                <NavItem text="Spotify" path="/sbrikkisbooks_official_website/spotify" onClick={props.onClick} />
                <NavItem text="Stats" path="/sbrikkisbooks_official_website/stats" onClick={props.onClick} />
                <NavItem text="King" path="/sbrikkisbooks_official_website/king" onClick={props.onClick} />
                <NavItem text="Contact us" path="/#contactUs" onClick={props.onClick}/>
            </div>
        </>
    )
}

export default Navigation
