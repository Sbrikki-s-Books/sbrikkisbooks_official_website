import React, { useState } from 'react';
import * as styles from './home.module.scss';
import Hero from '../../components/hero/hero';
import Separator from '../../atoms/separator/separator'
import Page404 from '../page404/page404';
import LoadingBooks from '../../atoms/loadingBooks/loadingBooks'
import BookClub from '../../atoms/bookClub/bookClub';

const Gigi = (props) => {

    function handleKeyPress(e) {
        console.log(e)
        if(e.key === 'g'){
            props.setShowGigi(!props.showGigi);
        }
    }
    return (
        <div>
            <input type="text" className={styles.hiddenInput} onKeyPress={(e) => handleKeyPress(e)} />
        </div>
    )
}

const Home = () => {
    const [showGigi, setShowGigi] = useState(false);

    return (
        <div className={styles.home}>
            <div className={styles.head}>
                <h1><strong>Sbrikki's Books</strong> - Book Club</h1>
            </div>
            {
                showGigi ?
                    <Page404 />
                :
                    <Hero />
            }
            <div className={styles.description}>
                <p>
                    <strong>Sbrikki's Books </strong> is an apolitical book club for 
                    <strong> everyone </strong>.<br/> 
                    The main aim is the growth of 
                    <strong> every member </strong>
                     from a cultural point of view. We also drink.
                </p>
            </div>
            <Separator />
            <Gigi showGigi={showGigi} setShowGigi={setShowGigi} />
            {/*<LoadingBooks />*/}
            <BookClub />
        </div>
    )
}

export default Home
