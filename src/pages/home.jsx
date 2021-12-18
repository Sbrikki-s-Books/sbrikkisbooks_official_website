import React, { useState } from 'react';
import * as styles from '../styles/home.module.scss';

import Hero from '../components/hero/hero';
import Separator from '../atoms/separator/separator'
import NotFoundPage from './404';
import BookClub from '../atoms/bookClub/bookClub';
import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'

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
        <Layout>
            <Seo title={"A Book Club For Everyone"} description={"Sbrikki's Books is an apolitical book club for everyone. The main aim is the growth of every member from a cultural point of view. We also drink."} />
            <div className={styles.home}>
                <div className={styles.head}>
                    <h1><strong>Sbrikki's Books</strong> - Book Club</h1>
                </div>
                {
                    showGigi ?
                        <NotFoundPage />
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
                <Separator />
            </div>
        </Layout>
        
    )
}

export default Home
