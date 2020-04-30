import React, { useState } from 'react';
import cx from 'classnames';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';

import './Card.scss';

export interface IFlippable {
    initialIsFlipped?: boolean;
}

export interface IMagnifiable {
    magnifies?: boolean;
}

export interface ICardProps extends IFlippable, IMagnifiable {
    face: React.ReactNode
    back: React.ReactNode
    initialIsFlipped?: boolean;
}

export const Card = ({
    face,
    back,
    initialIsFlipped = false,
    magnifies = false,
}: ICardProps) => {
    const [isFlipped, setIsFlipped] = useState(initialIsFlipped);
    const toggleIsFlipped = () => {
        console.log(isFlipped);
        setIsFlipped(initialState => !initialState)
    };
    return (
        <section className="card">
            <div
                className={cx("innerContainer", {
                    isFlipped,
                    magnifies
                })}
                onClick={toggleIsFlipped}
            >
                <div className="face">
                    { face }
                </div>
                <div className="back">
                    { back }
                </div>
            </div>
        </section>
    )
}

export interface IDefaultCardBackProps {
    title?: string
}

export const DefaultCardBack = ({
    title
}: IDefaultCardBackProps) => (
    <FlexBox
        className="defaultCardBack"
        direction="column"
        justify="center"
        alignItems="center"
    >
        <h3>{ title }</h3>
    </FlexBox>
);

export interface IEmptyCardFace {
    children?: React.ReactNode;
}

export const EmptyCardFace = ({
    children
}: IEmptyCardFace) => (
    <FlexBox
        className="emptyCardFace"
        direction="column"
        justify="center"
        alignItems="center"
    >
        <div>
            { children }
        </div>
    </FlexBox>
)


export interface IOneSidedCardProps extends IFlippable, IMagnifiable  {
    children?: React.ReactNode
    title?: string
}

export const OneSidedCard = ({
    children,
    title,
    magnifies = false,
    initialIsFlipped = false,
}: IOneSidedCardProps) => (
    <Card
        face={<DefaultCardBack title={title}/>}
        back={children}
        magnifies={magnifies}
        initialIsFlipped={initialIsFlipped}
    />
)

export interface IDescriptionCardProps {
    frontTitle?: string
    children?: React.ReactNode
}

export const DescriptionCard = ({
    frontTitle,
    children
}: IDescriptionCardProps) => (
    <OneSidedCard
        title={ frontTitle }
        magnifies
    >
        <EmptyCardFace>
            { children }
        </EmptyCardFace>
    </OneSidedCard>
)
