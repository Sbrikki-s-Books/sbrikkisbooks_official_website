import React, { useEffect } from 'react'
import KingHero from '../../components/kingHero/kingHero'

function King() {
    
    useEffect(() => {
        const unblock = history.block((location, action) => {
          if (checkBlockingCondition) {
            return window.confirm("Navigate Back?");
          }
          return true;
        });
      
        return () => {
          unblock();
        };
      }, []);

    return (
        <>
            <KingHero />
        </>
    )
}

export default King
