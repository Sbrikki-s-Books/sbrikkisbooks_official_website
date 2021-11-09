import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'

function Navigation() {
    const menu = () =>{
        return(
            <NavItem text="What" link="/what" />
                <NavItem text="Who" link="/who" />
        );
    }
    return (
        <>
            <div className={styles.navDesktop}>
                
            </div>
            <div className={styles.navMobile}>
                <NavItem text="What" link="/what" />
                <NavItem text="Who" link="/who" />
            </div>
        </>
    )
}

export default Navigation
