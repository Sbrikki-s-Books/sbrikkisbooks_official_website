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
            <Seo title={"Book Club"} description={"Sbrikki's Books is an apolitical book club for everyone. The main aim is the growth of every member from a cultural point of view. We also drink."} />
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
                <Separator />
                <div className={styles.description}>
                    <h4 className={styles.title}>Who we are</h4>
                    <p className={styles.description} >
                        <strong>Sbrikki's Books </strong> is an apolitical book club for 
                        <strong> everyone </strong>.<br/> 
                        The main aim is the growth of 
                        <strong> every member </strong>
                        from a cultural point of view. We also drink.
                    </p>
                </div>
                <Separator />
                <BookClub />
                <Separator />
                <div className={styles.description}>
                    <h4 className={styles.title}>What we do</h4>
                    <p className={styles.description} >
                        The idea comes from the <strong>need</strong> of some of us to have a space in which <strong>to share</strong> the passion for culture and the growth of personality while attending an environment where it is difficult to have access to cultural resources.<br/>
                        Thus was born Sbrikki's Books, <strong>our</strong> Book Club, in which we try, Socratically, to broaden our horizons of thought.
                        The format is very simple: divided into work groups, we organize the weekly appointment on <strong>Thursday</strong> evening.
                        We read a good book, drink wine, eat, other things and <strong>debate</strong>.
                        The <strong>discussion</strong> begins after each "chapter" read and concerns what has just been heard.  
                    </p>
                </div>
                <Gigi showGigi={showGigi} setShowGigi={setShowGigi} />
                {/*<LoadingBooks />*/}
                <Separator />
            </div>
        </Layout>
        
    )
}

export default Home
