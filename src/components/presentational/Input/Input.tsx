import React, { useState, FormEvent, useEffect } from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

export interface IInputProps {
    label: string
    initialValue?: string
    onChange: (val: string) => void
    className?: string
}

export const Input = ({
    label,
    initialValue = "",
    onChange,
    className
}: IInputProps) => {
    const [inputValue, setInputValue] = useState(initialValue);
    const handleValueChange = (e: FormEvent<HTMLInputElement>): void => {
        setInputValue(e.currentTarget.value);
    }

    useEffect(() => {
        onChange(inputValue);
    }, [onChange, inputValue]);

    return (
        <div className={cx(
            styles.input,
            className,
            {
                [styles.hasValue]: inputValue !== ""
            }
        )}>
            <input
                type="text"
                name={label}
                onChange={handleValueChange}
                value={inputValue}
            />
            <span className={styles.inputBorder}/>
            <label htmlFor={label}>{label}</label>
        </div>
    )
}

