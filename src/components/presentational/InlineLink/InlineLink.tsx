import React from 'react';

import "./InlineLink.scss";

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
        className="inlineLink"
    >
        {children}
    </a>
)