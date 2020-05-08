import React, { useEffect } from 'react';
import { Route, Switch, useParams, useRouteMatch, useLocation } from 'react-router-dom';
import { ExitButton } from 'components/presentational/ExitButton/ExitButton';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';

import styles from './GamePage.module.scss';

export const GAME_PAGE_PATH = "/game";

export const CreateGameView = () => {
    return (
        <FlexBox
            className={styles.createGameViewPage}
            direction="column"
            justify="center"
            alignItems="center"
        >
            <h1>create game</h1>
        </FlexBox>
    )
}

export const GameView = () => {
    const { id } = useParams();
    const params = new URLSearchParams(useLocation().search);

    useEffect(() => {
        console.log(params.get("username"));
    }, [id, params])

    return (
        <FlexBox
            className={styles.gameViewPage}
            direction="column"
            justify="center"
            alignItems="center"
        >
            {id}
        </FlexBox>
    )
}

export const GamePage = () => {
    const { path } = useRouteMatch();
    
    return (
        <React.Fragment>
            <ExitButton/>
            <Switch>
                <Route exact path={path}>
                    <CreateGameView />
                </Route>
                <Route path={`${path}/:id`}>
                    <GameView />
                </Route>
            </Switch>
        </React.Fragment>
    )
}
