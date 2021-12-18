import React from 'react';
import * as styles from './navItem.module.scss';
import { Link } from 'gatsby';

const NavItem = (props) => {
    return (<>
        {
            props.isHref ?
                <a href={props.path} className={styles.item}>
                    {props.text}
                </a>
                :
                <Link className={styles.item} to={props.path} onClick={props.onClick}>
                    {props.text}
                </Link>
        }</>
    );
}

export default NavItem
