import React, { useEffect /*, useState */ } from 'react';
import KingHero from '../components/kingHero/kingHero';
import Layout from '../components/layout/layout';
import Separator from '../atoms/separator/separator';

import * as styles from '../styles/king.module.scss';
import Seo from '../components/seo/seo';

const King = () => {
  //const [isBlocking, setIsBlocking] = useState(true);
  const isBlocking = false;

  useEffect(() => {
    window.addEventListener('beforeunload', (e) => {
      // Cancel the event
      e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
      // Chrome requires returnValue to be set
      e.returnValue = '';
    });

    return window.addEventListener('beforeunload', (e) => {
      // the absence of a returnValue property on the event will guarantee the browser unload happens
      delete e['returnValue'];
    });
  }, []);

  return (
    <Layout isBlocking={isBlocking}>
      <Seo title={'King'} description={"Let's play king!"} />
      <div className={styles.kingPage}>
        {/*isBlocking ? (
          <button className={styles.buttonBlocked} onClick={unBlock()}>
            Click to allow exit
          </button>
        ) : (
          <button className={styles.buttonUnblocked} onClick={block()}>
            Click to block exit
          </button>
        )*/}
        <p>
          <strong>King</strong> is a very good <strong>card game</strong> mbare.
          <br />
          In this section you <strong>cannot</strong> play, it's a <strong>scorer</strong>
        </p>
        <KingHero />
        <Separator />
      </div>
    </Layout>
  );
};

export default King;
