import React, { useState, useEffect } from "react";

import * as styles from "../styles/404.module.scss";
import gigi from "../assets/gigi.webp";
import Layout from "../components/layout/layout";
import SEO from '../components/seo/seo'

const array = [
  "Le domeniche d'Agosto quanta neve che cadrà",
  "Il mio petto da cuscino per la vita ti farà",
  "Miele, sei bella da morire, mi hai fatto innamorare",
  "Quanti amori nascono così!",
  "Bésame, siente còmo suena el corazon",
  "E quella notte nel fuoco il mio cuore con lei si bruciò",
  "Mai non mollare mai",
];

const NotFoundPage = () => {
  const [random, setRandom] = useState(0);

  useEffect(() => {
    const min = 0;
    const max = array.length;
    const rand = min + Math.random() * (max - min);
    setRandom((r) => parseInt(r + rand));
  }, []);
  return (
    <Layout>
      <SEO title={"Not Found"} description={"Sorry, I can't find your page"} />
      <div className={styles.page404}>
        <img src={gigi} alt="Gigi" className={styles.gigi} />
        <div className={styles.text}>
          <h2>404</h2>
          <h2>Sorry mbare, I can't find the page you asked</h2>
          <h3>"{array[random]}"</h3>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
