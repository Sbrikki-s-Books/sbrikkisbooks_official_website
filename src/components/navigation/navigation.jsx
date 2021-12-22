import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'
import HomeLogo from '../../assets/homelogo.svg'
import SpotifyLogo from '../../assets/spotifylogo.svg'
import StatsLogo from '../../assets/statslogo.svg'
import KingLogo from '../../assets/kinglogo.svg'

const Navigation = (props) => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" path="/" image={HomeLogo}/>
                <NavItem text="Spotify" path="/spotify" image={SpotifyLogo}/>
                <NavItem text="Stats" path="/stats" image={StatsLogo}/>
                <NavItem text="King" path="/king" image={KingLogo}/>
                <NavItem text="Contacts" path="#contactUs" isHref={true} />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" path="/" onClick={props.onClick} />
                <NavItem text="Spotify" path="/spotify" onClick={props.onClick} />
                <NavItem text="Stats" path="/stats" onClick={props.onClick} />
                <NavItem text="King" path="/king" onClick={props.onClick} />
                <NavItem text="Contacts" path="#contactUs" onClick={props.onClick} isHref={true} />
            </div>
        </>
    )
}

export default Navigation
