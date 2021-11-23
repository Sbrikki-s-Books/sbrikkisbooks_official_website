import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'
import { useRouteMatch } from 'react-router-dom'

const Navigation = (props) => {

    const { url } = useRouteMatch();

    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" path={`${url}/`} />
                <NavItem text="Spotify" path={`${url}/spotify`} />
                <NavItem text="Stats" path={`${url}/stats`} />
                <NavItem text="King" path={`${url}/king`} />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" path={`${url}/`} onClick={props.onClick} />
                <NavItem text="Spotify" path={`${url}/spotify`} onClick={props.onClick} />
                <NavItem text="Stats" path={`${url}/stats`} onClick={props.onClick} />
                <NavItem text="King" path={`${url}/king`} onClick={props.onClick} />
            </div>
        </>
    )
}

export default Navigation
