import React from 'react'
import { useBlocker } from './useBlocker';

function Blocking(props) {

    const isBlocking = props.isBlocking;
    const setIsBlocking = props.setIsBlocking;
  
    useBlocker(
      () => "Hello from usePrompt -- Are you sure you want to leave?",
      isBlocking
    );
  
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
          setIsBlocking(false);
        }}
      >
      </form>
    );
  }

export default Blocking
