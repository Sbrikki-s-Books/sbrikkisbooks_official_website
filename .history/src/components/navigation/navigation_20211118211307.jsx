import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

const Navigation = (props) => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" onClick={props.viewHero} />
                <NavItem text="Spotify" onClick={props.viewSpotify} />
                <NavItem text="Stats" onClick={props.viewStats} />
                <NavItem text="King" onClick={props.viewKing} />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" onClick={props.viewHero} />
                <NavItem text="Spotify" onClick={props.viewSpotify} />
                <NavItem text="Stats" onClick={props.viewStats} />
                <NavItem text="King" onClick={props.viewKing} />
            </div>
        </>
    )
}

export default Navigation
