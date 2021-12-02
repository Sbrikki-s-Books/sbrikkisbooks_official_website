import React, { useState, useEffect } from 'react'
import * as styles from './navBar.module.scss'
import Logo from '../../atoms/logo/logo'
import Navigation from '../navigation/navigation'
import Hamburger from '../../atoms/hamburger/hamburger'

const NavBar = (props) => {

    const [navBarOpen, setNavBarOpen] = useState(false);

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        /*window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos === 0) {
                document.getElementById("navBar").style.top = "0";
            } else if (prevScrollpos > currentScrollPos) {
                document.getElementById("navBar").style.top = "0";
            } else if (!navBarOpen) {
                document.getElementById("navBar").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        }*/
    });

    const closeNavBar = () => {
        setNavBarOpen(false);
        props.setScrolling();
    }

    const openNavBar = () => {
        setNavBarOpen(true);
        props.setNotScrolling();
    }

    return (
        <div className={styles.navBar} id="navBar">
            <div className={styles.logo}>
                <Logo />
            </div>
            {props.isBlocking ?
                null
                :
                <div className={styles.navigationDesktop}>
                    <Navigation />
                </div>
            }

            {
                navBarOpen && !props.isBlocking ?
                    <div className={styles.navigationMobile}>
                        <Navigation onClick={closeNavBar} />
                    </div>
                    :
                    null
            }

            {
                props.isBlocking ?
                    null
                    :
                    <div className={styles.hamburger}>
                        <Hamburger onClick={navBarOpen ? closeNavBar : openNavBar} navBarOpen={navBarOpen} />
                    </div>
            }
        </div>
    )
}

export default NavBar
