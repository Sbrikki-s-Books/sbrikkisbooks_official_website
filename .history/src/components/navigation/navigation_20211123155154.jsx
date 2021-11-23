import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'
import { useRouteMatch } from 'react-router-dom'

const Navigation = (props) => {

    const { url } = useRouteMatch();

    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" path="/sbrikkisbooks_official_website/" />
                <NavItem text="Spotify" path="/sbrikkisbooks_official_website/spotify" />
                <NavItem text="Stats" path="/sbrikkisbooks_official_website/stats" />
                <NavItem text="King" path="/sbrikkisbooks_official_website/king" />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" path="/sbrikkisbooks_official_website/" onClick={props.onClick} />
                <NavItem text="Spotify" path="/sbrikkisbooks_official_website/spotify" onClick={props.onClick} />
                <NavItem text="Stats" path="/sbrikkisbooks_official_website/stats" onClick={props.onClick} />
                <NavItem text="King" path="/sbrikkisbooks_official_website/king" onClick={props.onClick} />
            </div>
        </>
    )
}

export default Navigation
