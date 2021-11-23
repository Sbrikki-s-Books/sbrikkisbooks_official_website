import React from 'react'
import KingHero from '../../components/kingHero/kingHero'

function King() {
    return (
        <>
            <Form />
            <KingHero />
        </>
    )
}

function Form() {
  
    const isDirty = () => {
        return true
    };
    
    window.confirm(
        "Are you sure you want to leave?",
        isDirty() 
    )

    return (
      <></>
    );
  }

export default King
