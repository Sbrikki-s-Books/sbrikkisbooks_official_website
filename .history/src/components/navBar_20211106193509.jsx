import React from 'react'
import * as styles from './navBar.module.scss'
import NavItem from '../atoms/navItem/navItem'

const menu = [
    {title: "Read", link: "/read"},
    {title: "Alcool", link: "/alcool"},
    {title: "Pfizer", link: "/pfizer"},
];

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            
        </div>
    )
}

export default NavBar
