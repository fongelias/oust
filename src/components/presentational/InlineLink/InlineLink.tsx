import React from 'react';

import styles from "./InlineLink.module.scss";

export type AnchorTarget =
    "_blank" |
    "_parent" |
    "_self" |
    "_top";

export interface IInlineLinkProps {
    href?: string
    children: string
    target?: AnchorTarget
}

export const InlineLink = ({
    href,
    children,
    target = "_blank"
}: IInlineLinkProps) => (
    <a
        href={href}
        target={target}
        className={styles.inlineLink}
    >
        {children}
    </a>
)