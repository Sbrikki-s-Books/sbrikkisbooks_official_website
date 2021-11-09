import React, {Link} from 'react';
import * as styles from './navItem.module.scss';

const NavItem = (props) => {
    return (
        <Link className={styles.item} to={props.link}>
            {props.text}
        </Link>
    );
}

export default NavItem
