import React, { useEffect } from 'react'
import KingHero from '../../components/kingHero/kingHero'

function King() {
    
    useEffect(() => {
        return window.onbeforeunload = function(event) {
            return window.confirm("Are you sure, mbare?"+event);
        };
    }, [])

    return (
        <>
            <KingHero />
        </>
    )
}

export default King
