import React, { useState } from 'react'
import ContactUs from '../contactUs/contactUs'
import * as styles from './footer.module.scss'
import spotify from '../../assets/spotify.svg'

function Footer(props) {

    const [formOpened, setFormOpened] = useState(false);

    const openForm = () => {
        setFormOpened(true);
        props.setNotScrolling();
    }

    const closeForm = () => {
        setFormOpened(false);
        props.setScrolling();
    }

    return (
        <div className={styles.footer} id="contactUs">
            <p>
                Join us!
            </p>
            <button onClick={openForm} className={styles.formButton}>
                CONTACT US!
            </button>
            {formOpened ?
                <ContactUs closeForm={closeForm} formOpened={formOpened} />
                : null
            }
            <a href={"https://open.spotify.com/playlist/3XWNoTPdXdIRapbK86Y11l"} title={"Go to our playlist"}>
                <img 
                    src={spotify}
                    width={'40px'}
                    height={'40px'}
                    alt={"Sbrikki's Books Spotify"}
                />
            </a>
            

        </div>
    )
}

export default Footer
