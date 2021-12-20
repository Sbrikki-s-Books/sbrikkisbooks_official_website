import React from 'react';
import * as styles from './navItem.module.scss';
import { Link } from 'gatsby';

const NavItem = (props) => {
    return (<>
        {
            props.isHref ?
                <a href={props.path} className={styles.item} onClick={props.onClick} title={"Go to " + props.text + " page"}>
                    {props.text}
                </a>
                :
                <Link className={styles.item} to={props.path} onClick={props.onClick} title={"Go to " + props.text + " page"} >
                    {props.text}
                </Link>
        }</>
    );
}

export default NavItem
