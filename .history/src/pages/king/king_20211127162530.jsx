import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import KingHero from '../../components/kingHero/kingHero'

function King() {
    
    useEffect(() => {
        return window.onbeforeunload = function(event) {
            useNavigate(0);
            return window.confirm("Are you sure, mbare?");
        };
    }, [])

    return (
        <>
            <KingHero />
        </>
    )
}

export default King
