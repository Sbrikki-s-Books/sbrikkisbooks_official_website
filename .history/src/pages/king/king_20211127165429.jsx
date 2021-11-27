import React from 'react'
import KingHero from '../../components/kingHero/kingHero'

function King(props) {

    return (
        <>
            <button onClick={props.setIsBlocking}>Click me to prevent exit</button>
            <KingHero />
        </>
    )
}

export default King
