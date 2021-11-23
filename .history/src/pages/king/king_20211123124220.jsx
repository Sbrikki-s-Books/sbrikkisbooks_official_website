import React from 'react'
import KingHero from '../../components/kingHero/kingHero'

function King() {

    const askBefore = () => {
        const answer = window.confirm("Are you sure to quit, mbare?");
        window.onunload = answer;
    }

    window.onbeforeunload = askBefore();
    
    return (
        <>
            <KingHero />
        </>
    )
}

export default King
