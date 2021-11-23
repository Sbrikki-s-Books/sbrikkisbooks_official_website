import React, { useEffect } from 'react'
import KingHero from '../../components/kingHero/kingHero'

function King() {

    const askBefore = () => {
        const answer = window.confirm("Are you sure to quit, mbare?");
        window.onunload = answer;
    }

    useEffect(() => {
        return window.onbeforeunload = askBefore();
    }, [])
    
    return (
        <>
            <KingHero />
        </>
    )
}

export default King
