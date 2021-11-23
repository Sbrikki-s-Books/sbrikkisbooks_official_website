import React, { useEffect } from 'react'
import KingHero from '../../components/kingHero/kingHero'

function King() {

    const askBefore = () => {
        return window.confirm("Are you sure to quit, mbare?");
    }

    useEffect(() => {
        window.onbeforeunload = askBefore();
    }, [])
    
    return (
        <>
            <KingHero />
        </>
    )
}

export default King
