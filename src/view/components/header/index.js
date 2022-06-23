import React from "react";
import { headerOptions } from "../../../misc/enums";
import styles from './styles.module.scss';
import {func} from 'prop-types';


const Header = ({ scrollTo }) => {
    const renderHeader = () => (
        <ul className={styles.list}>
            {headerOptions.map((item, index) => {
                return <li key={index} className={styles.item}>
                    <ul onClick={() => scrollTo(item.title)}>{item.title}</ul>
                </li>
            })}
        </ul>
    );
    return (
        <div className={styles.header}>
            <p className={styles.title}>Culture and the City</p>
            {renderHeader()}
        </div>
    )
}

Header.propTypes = {
    scrollTo: func,
}

export default Header;