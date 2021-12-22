import React from "react";
import * as styles from "./navItem.module.scss";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const NavItem = (props) => {
  const location = useLocation();
  const pathname = location.pathname === '/' ? "home" : location.pathname.replace('/', '');
  console.log(pathname, props.text)

  return (
    <>
      {props.isHref ? (
        <a
          href={props.path}
          className={styles.item}
          onClick={props.onClick}
          title={"Go to " + props.text + " page"}
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
            {
                pathname.toUpperCase() == props.text.toUpperCase() && props.image ?
                <img src={props.image} width={"40px"} alt={props.text} />
                :
                <div className={props.image ? styles.hoverWrap : null}>
                <p>{props.text}</p>
                {props.image ? (
                  <img src={props.image} width={"40px"} alt={props.text} />
                ) : null}
              </div>
            }
        </Link>
      )}
    </>
  );
};

export default NavItem;
