import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

const Navigation = (props) => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" path="/" />
                <NavItem text="Spotify" path="/spotify" />
                <NavItem text="Stats" path="/stats" />
                <NavItem text="King" path="/king" />
                <NavItem text="Contact us" path="/#contactUs" isHref={true} />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" path="/" onClick={props.onClick} />
                <NavItem text="Spotify" path="/spotify" onClick={props.onClick} />
                <NavItem text="Stats" path="/stats" onClick={props.onClick} />
                <NavItem text="King" path="/king" onClick={props.onClick} />
                <NavItem text="Contact us" path="#contactUs" onClick={props.onClick} isHref={true} />
            </div>
        </>
    )
}

export default Navigation
