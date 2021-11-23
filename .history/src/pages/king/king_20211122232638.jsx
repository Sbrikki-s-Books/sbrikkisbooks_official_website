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
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [note, setNote] = React.useState("");
  
    const isDirty = () => {
        return name.length > 0
          || email.length > 0
          || note.length > 0;
      };
    
    window.confirm(
        "Are you sure you want to leave?",
        isDirty() 
    )

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted!");
          setName("");
          setEmail("");
          setNote("");
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          placeholder="email"
        />
        <label htmlFor="note">Note</label>
        <textarea
          value={note}
          rows={4}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          id="note"
          placeholder="note"
        />
  
        <button type="submit">Submit</button>
      </form>
    );
  }

export default King
