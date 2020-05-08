import React from 'react';
import cx from 'classnames';

import styles from './Button.module.scss'

export interface IButtonProps {
    text: string
    className?: string
    action?: () => void
    disabled?: boolean
}

export const Button = ({
    text,
    className,
    action,
    disabled = false
}: IButtonProps) => (
    <button
        className={cx(
            styles.button,
            className
        )}
        onClick={action}
        disabled={disabled}
    >
        {text}
    </button>
)