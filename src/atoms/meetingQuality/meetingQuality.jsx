import React from "react";
import * as styles from "./meetingQuality.module.scss";

const titles = [
  "Chill mood",
  "Alcohol",
  "Pfizer",
  "Reading",
  "Meeting organization",
  "Length of the meeting",
  "Meeting quality",
];

const MeetingQuality = ({ elem }) => {
  return (
    <div>
      {elem.map((value, k) => {
        return (
          <div className={styles.graphs} key={k}>
            <p>{titles[k]}</p>
            <div>
              <progress
                id={titles[k]}
                value={((value * 1) / 5) * 100}
                max="100"
              >
                {" "}
                {((value * 1) / 5) * 100 + "%"}{" "}
              </progress>
            </div>
            <p>{parseFloat(((value * 1) / 5) * 100).toFixed(2) + "%"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MeetingQuality;
