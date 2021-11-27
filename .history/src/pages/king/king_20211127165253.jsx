import React from 'react'
import KingHero from '../../components/kingHero/kingHero'

function King(props) {

    return (
        <>
            <KingHero isBlocking={props.isBlocking} setIsBlocking={props.setIsBlocking}/>
        </>
    )
}

export default King
