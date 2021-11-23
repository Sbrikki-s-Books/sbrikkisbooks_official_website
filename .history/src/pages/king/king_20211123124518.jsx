import React, { useEffect } from 'react'
import KingHero from '../../components/kingHero/kingHero'

function King() {

    const askBefore = () => {
        const answer = window.confirm("Are you sure to quit, mbare?");
        window.onunload = answer;
    }

    if (typeof window.addEventListener === 'undefined') {
        window.addEventListener = function(e, callback) {
            return window.attachEvent('on' + e, callback);
        }
    }
    
    window.addEventListener('beforeunload', function() {
        return 'Dialog Text Here';
    });

    
    
    return (
        <>
            <KingHero />
        </>
    )
}

export default King
