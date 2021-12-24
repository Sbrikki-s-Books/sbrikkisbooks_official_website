import React from 'react'
import { useLocation } from '@reach/router'
import HomeLogo from '../../assets/homelogo.svg'
import SpotifyLogo from '../../assets/spotifylogo.svg'
import StatsLogo from '../../assets/statslogo.svg'
import KingLogo from '../../assets/kinglogo.svg'

const icons = {
    home: {
        path: "home",
        img: HomeLogo
    },
    spotify: {
        path: "spotify",
        img: SpotifyLogo
    },
    stats: {
        path: "stats",
        img: StatsLogo
    },
    king: {
        path: "king",
        img: KingLogo
    }
}

const NavIcons = () => {
    const location = useLocation();
    const pathname = location.pathname === '/' ? "home" : location.pathname.replace('/', '').replace('/', '');

    return (
        <div>
            {
                icons[pathname] ? 
                    <img 
                        src={icons[pathname]["img"]}
                        width={"50px"}
                        alt={pathname}
                    />
                :
                    <p><strong>404</strong></p>
            }
            
        </div>
    )
}

export default NavIcons
