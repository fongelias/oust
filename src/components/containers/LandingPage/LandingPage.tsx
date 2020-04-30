import React from 'react';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';
import { DescriptionCard } from 'components/presentational/Card/Card';
import { InlineLink } from 'components/presentational/InlineLink/InlineLink';
import { AFFILIATE_LINKS, PERSONAL_SOCIAL_MEDIA_LINKS } from 'constants/links';

import './LandingPage.scss';

const AboutCardBody = () => (
    <article className="aboutCardBody">
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
        className="landingPage"
        direction="column"
        justify="center"
        alignItems="center"
    >
        <h1>oust</h1>
        <FlexBox>
            <DescriptionCard
                frontTitle="join game"
            />
            <DescriptionCard
                frontTitle="create game"
            />
            <DescriptionCard frontTitle="about">
                <AboutCardBody />
            </DescriptionCard>
        </FlexBox>
    </FlexBox>
)
