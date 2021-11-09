import React, { useState, useEffect } from 'react'
import * as styles from './navBar.module.scss'
import Logo from '../../atoms/logo/logo'
import Navigation from '../navigation/navigation'
import Hamburger from '../../atoms/hamburger/hamburger'
import Cross from '../../atoms/cross/cross'

const NavBar = () => {

    const [navBarOpen, setNavBarOpen] = useState(false);

        useEffect( ()=>{
            {navBarOpen?
                null
                :
                {
                    var prevScrollpos = window.pageYOffset;
                    window.onscroll = function() {
                        var currentScrollPos = window.pageYOffset;
                        if (prevScrollpos > currentScrollPos) {
                            document.getElementById("navBar").style.top = "0";
                        } else {
                            document.getElementById("navBar").style.top = "-80px";
                        }
                        prevScrollpos = currentScrollPos;
                    }  
                } 
            }
        });
        
    

    const closeNavBar = () => {
        setNavBarOpen(false);
    }

    const openNavBar = () => {
        setNavBarOpen(true);
    }

    return (
        <div className={styles.navBar} id="navBar">
            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.navigationDesktop}>
                <Navigation />
            </div>

            {
                navBarOpen?
                    <div className={styles.navigationMobile}>
                        <Navigation />
                    </div>
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
