import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

const Navigation = (props) => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" onClick={props.viewHome} />
                <NavItem text="King" onClick={props.viewKing} />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" onClick={props.viewHome} />
                <NavItem text="King" onClick={props.viewKing} />
            </div>
        </>
    )
}

export default Navigation
