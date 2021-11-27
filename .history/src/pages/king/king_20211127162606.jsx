import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import KingHero from '../../components/kingHero/kingHero'

function King() {
    
    useEffect(() => {
        const navigate = useNavigate();
        navigate(0);
        return window.onbeforeunload = function(event) {
            
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
