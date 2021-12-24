import React from "react";
import * as styles from "./navItem.module.scss";
import { Link } from "gatsby";

const NavItem = (props) => {
  return (
    <>
      {props.isHref ? (
        <a
          href={props.path}
          className={styles.item}
          onClick={props.onClick}
          title={"Go to " + props.text + " section"}
        >
          {props.text}
        </a>
      ) : (
        <Link
          className={styles.item}
          to={props.path}
          onClick={props.onClick}
          title={"Go to " + props.text + " page"}
        >
          <p className={styles.item}>{props.text}</p>
        </Link>
      )}
    </>
  );
};

export default NavItem;
