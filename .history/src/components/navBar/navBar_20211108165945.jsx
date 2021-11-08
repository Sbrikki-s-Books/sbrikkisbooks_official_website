import React, { useState } from 'react'
import * as styles from './navBar.module.scss'
import Logo from '../../atoms/logo/logo'
import Navigation from '../navigation/navigation'
import Hamburger from '../../atoms/hamburger/hamburger'
import Cross from '../../atoms/cross/cross'

const NavBar = () => {

    const [navBarOpen, setNavBarOpen] = useState(false);

    const closeNavBar = () => {
        setNavBarOpen(false);
    }

    const openNavBar = () => {
        setNavBarOpen(true);
    }

    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.navigation}>
                <Navigation />
            </div>

            {
                navBarOpen?
                    <Navigation />
                :
                    null
            }
            
            <div className={styles.hamburger}>
                { 
                    navBarOpen ? 
                        <Cross onclick={closeNavBar} />   
                            :   
                        <Hamburger onclick={openNavBar}/>
                }
            </div>
        </div>
    )
}

export default NavBar
