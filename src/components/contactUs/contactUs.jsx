import React, { useState } from 'react';
import Hamburger from '../../atoms/hamburger/hamburger';
import MailTo from '../../atoms/mailTo/mailTo';
import * as styles from './contactUs.module.scss';

function ContactUs(props) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  const changeName = () => {
    setName(document.getElementById('nameIn').value);
  };
  const changeSurname = () => {
    setSurname(document.getElementById('surnameIn').value);
  };

  const checkNameSurname = () => {
    if (name === undefined || surname === undefined) return false;
    if (name === '' || surname === '') return false;
    return true;
  };

  return (
    <div className={styles.contactUs}>
      <div className={styles.contactHero}>
        <div className={styles.hamWrapper}>
          <Hamburger navBarOpen={props.formOpened} onClick={props.closeForm} />
        </div>
        <p>Insert name and surname and contact us!</p>
        <div>
          <p className={styles.nsName}>Name</p>
          <input type="text" id="nameIn" onChange={changeName} className={styles.nsInput} placeholder="Ciro" />
        </div>
        <div>
          <p className={styles.nsName}>Surname</p>
          <input
            type="text"
            id="surnameIn"
            onChange={changeSurname}
            className={styles.nsInput}
            placeholder="Esposito"
          />
        </div>
        {console.log(name + ' ' + surname)}
        <MailTo
          email="admin@sbrikkisbooks.ga"
          subject="I want to join!"
          body={"Hi, I'm " + name + ' ' + surname + '. I want to join to your Book Club!'}
          enabled={checkNameSurname() ? true : false}
        >
          Send us a mail!
        </MailTo>
      </div>
    </div>
  );
}

export default ContactUs;
