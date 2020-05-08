import React from 'react';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';
import { DescriptionCard, LinkCard } from 'components/presentational/Card/Card';
import { InlineLink } from 'components/presentational/InlineLink/InlineLink';
import { AFFILIATE_LINKS, PERSONAL_SOCIAL_MEDIA_LINKS } from 'constants/OutboundLinks';
import { GAME_PAGE_PATH } from 'components/containers/GamePage/GamePage';
import { JOIN_GAME_PAGE_PATH } from 'components/containers/JoinGamePage/JoinGamePage';


import styles from './LandingPage.module.scss';

const AboutCardBody = () => (
    <article className={styles.aboutCardBody}>
        <h3>what is oust?</h3>
        <p>
            oust is like <InlineLink href={AFFILIATE_LINKS.COUP}>coup</InlineLink>, but online
        </p>
        <br/>
        <h3>who made this?</h3>
        <p>
            <InlineLink href={PERSONAL_SOCIAL_MEDIA_LINKS.GITHUB}>@fongelias</InlineLink>
        </p>
    </article>
)

export const LandingPage = () => (
    <FlexBox
        className={styles.landingPage}
        direction="column"
        justify="center"
        alignItems="center"
    >
        <h1>oust</h1>
        <FlexBox>
            <LinkCard 
                frontTitle="join game"
                link={JOIN_GAME_PAGE_PATH}
            />
            <LinkCard
                frontTitle="create game"
                link={GAME_PAGE_PATH}
            />
            <DescriptionCard frontTitle="about">
                <AboutCardBody />
            </DescriptionCard>
        </FlexBox>
    </FlexBox>
)
