import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import KingHero from '../../components/kingHero/kingHero'

function King() {
    const navigate = useNavigate();
    
    useEffect(() => {
        return window.onbeforeunload = function(event) {
            navigate(0);
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