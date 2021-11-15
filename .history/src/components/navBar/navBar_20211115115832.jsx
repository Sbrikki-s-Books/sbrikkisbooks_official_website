import React, { useState, useEffect } from 'react'
import * as styles from './navBar.module.scss'
import Logo from '../../atoms/logo/logo'
import Navigation from '../navigation/navigation'
import Hamburger from '../../atoms/hamburger/hamburger'
import Cross from '../../atoms/cross/cross'

const NavBar = (props) => {

    const [navBarOpen, setNavBarOpen] = useState(false);

    useEffect( ()=>{
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if(currentScrollPos === 0){
                document.getElementById("navBar").style.top = "0";
            } else if (prevScrollpos > currentScrollPos) {
                document.getElementById("navBar").style.top = "0";
            } else if(!navBarOpen){
                document.getElementById("navBar").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        }   
    });

    const closeNavBar = () => {
        setNavBarOpen(false);
    }

    const openNavBar = () => {
        setNavBarOpen(true);
    }

    const viewHero = () => {
        closeNavBar();
        props.viewHero();
    }

    const viewSpotify = () => {
        closeNavBar();
        props.viewSpotify();
    }

    const viewKing = () => {
        closeNavBar();
        props.viewKing();
    }

    return (
        <div className={styles.navBar} id="navBar">
            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.navigationDesktop}>
                <Navigation viewHero={props.viewHero} viewKing={props.viewKing} viewSpotify={props.viewSpotify}/>
            </div>

            {
                navBarOpen?
                    <div className={styles.navigationMobile}>
                        <Navigation viewHero={viewHero} viewKing={viewKing} viewSpotify={viewSpotify}/>
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
