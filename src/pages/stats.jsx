import React, { useState, useEffect } from "react";
import * as styles from "../styles/stats.module.scss";

import Separator from "../atoms/separator/separator";
import LoadingBooks from "../atoms/loadingBooks/loadingBooks";
import database from "../atoms/firebase";
import { ref, get, child } from "firebase/database";
import Qualities from "../components/qualities/qualities";
import Layout from "../components/layout/layout";
import Seo from '../components/seo/seo'

const Stats = () => {
  const [data, setData] = useState([]);
  const [quality, setQuality] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error1, setError1] = useState(Error());
  const [error2, setError2] = useState(Error());
  const [error3, setError3] = useState(false);

  const fetchData = async () => {
    let tmpArray = [[]];
    const dbRef = ref(database);
    get(child(dbRef, `meeting/`))
      .then((snapshot) => {
        setFetched(true);
        setLoaded(true);
        if (snapshot.exists()) {
          tmpArray = JSON.stringify(snapshot.toJSON())
            .replace("{", "")
            .replace("}", "")
            .replaceAll('"', "")
            .split(/(?<=[,])/);
          for (let i = 0; i < tmpArray.length; i++) {
            tmpArray[i] = tmpArray[i].replace(",", "").split(/(?<=[:])/);
            tmpArray[i][0] = tmpArray[i][0].replace(":", "");
          }
          setData(tmpArray);
        } else {
            setError3(true)
        }
      })
      .catch((err) => {
        setFetched(false);
        setLoaded(true);
        setError1(err);
      });

    get(child(dbRef, `meetingQuality/`))
      .then((snapshot) => {
        setFetched(true);
        setLoaded(true);
        if (snapshot.exists()) {
          tmpArray = JSON.stringify(snapshot.toJSON())
            .replace("{", "")
            .replace("}", "")
            .split(/(?<=["])/);
          for (let i = 0; i < tmpArray.length; i++) {
            tmpArray[i] = tmpArray[i].replace('"', "");
            if (
              tmpArray[i] === ":" ||
              tmpArray[i] === "," ||
              tmpArray[i].match(/^\d+$/)
            )
              tmpArray[i] = "";
          }
          for (let i = 0; i < tmpArray.length; i++) {
            if (tmpArray[i] === "") {
              for (let j = i + 1; j < tmpArray.length; j++)
                tmpArray[j - 1] = tmpArray[j];
              tmpArray.length -= 1;
              i--;
            }
          }
          for (let i = 0; i < tmpArray.length; i++)
            tmpArray[i] = tmpArray[i].split("_");
          setQuality(tmpArray);
        } else {
            setError3(true);
        }
      })
      .catch((err) => {
        setFetched(false);
        setLoaded(true);
        setError2(err);
      });
  };

  const setVisibility = (id) => {
    if (document.getElementById(id))
      document.getElementById(id).hidden = !document.getElementById(id).hidden;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Seo title={"Stats"} description={"Look at our stats"} />
      <div className={styles.tmp}>
        <h1>Sbrikki's Books SEO score</h1>
        <p>
          <strong>SEO</strong> is a very important thing <br />
          That's why I'm studying ways to <strong>improve</strong> it <br />
          See our <strong>score</strong> by clicking on the link below
        </p>
        <a href="https://freetools.seobility.net/en/seocheck/sbrikkisbooks.ga"><img src="https://freetools.seobility.net/widget/widget.png?url=sbrikkisbooks.ga" alt="Seobility Score für sbrikkisbooks.ga" /></a>
        <Separator />
        {loaded ? (
          fetched ? (
            <div className={styles.lastMeetings}>
              <p>Here there are last meetings info</p>
              {data.map((elem, i) => {
                return (
                  <div onClick={setVisibility("meeting" + i)} onKeyDown={setVisibility("meeting" + i)} role={"button"} key={i} tabIndex={i}>
                    <p className={styles.meeting}>
                      {"Meeting " + elem[0] + ", Date: " + elem[1]}
                    </p>
                  </div>
                );
              })}
              <Qualities quality={quality} />
            </div>
          ) : (
              <p>{error1.message + <br/> + error2.message + <br/> + error3? "No data avaiable" : null}</p>
          )
        ) : (
          <LoadingBooks />
        )}
        <Separator />
      </div>
    </Layout>
  );
};

export default Stats;
