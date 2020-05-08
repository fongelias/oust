import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ExitButton.module.scss';

export const ExitButton = () => (
    <NavLink
        to="/"
        className={styles.exitButton}
    >
        <span>exit</span>
    </NavLink>
)
