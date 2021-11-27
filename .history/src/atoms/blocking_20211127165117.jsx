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
        <p>
          Blocking? {isBlocking ? "Yes, click a link or the back button" : "Nope"}
        </p>
  
        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={event => {
              setIsBlocking(event.target.value.length > 0);
            }}
          />
        </p>
  
        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    );
  }

export default Blocking
