import React, { useEffect } from 'react'
import KingHero from '../../components/kingHero/kingHero'

function King() {
    
    useEffect(() => {
        window.addEventListener('beforeunload', (event) => {
            event.preventDefault();
           // Google Chrome requires returnValue to be set.
            event.returnValue = '';
            return;
        });
    }, [])

    return (
        <>
            <KingHero />
        </>
    )
}

export default King
