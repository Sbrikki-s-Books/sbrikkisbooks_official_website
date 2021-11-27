import React, { useEffect, useRef } from 'react'
import { useNavigate  } from 'react-router';
import KingHero from '../../components/kingHero/kingHero'

function King() {
    const navigate = useNavigate();
    useEffect(() => {
        const unblock = navigate.block((location, action) => {
          if (history.) {
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
