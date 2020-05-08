import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ExitButton } from 'components/presentational/ExitButton/ExitButton';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';
import { Input } from 'components/presentational/Input/Input';
import { Button } from 'components/presentational/Button/Button';
import { GAME_PAGE_PATH } from 'components/containers/GamePage/GamePage';

import styles from './JoinGamePage.module.scss';

export const JOIN_GAME_PAGE_PATH = '/join'

export const JoinGamePage = () => (
    <React.Fragment>
        <ExitButton/>
        <FlexBox
            className={styles.joinGamePage}
            direction="column"
            justify="center"
            alignItems="center"
        >
            <h1 className={styles.heading}>join game</h1>
            <JoinGameForm />
        </FlexBox>
    </React.Fragment>
)

const JoinGameForm = () => {
    const history = useHistory();
    const [gameId, setGameId] = useState("");
    const [userName, setUserName] = useState("");
    const isFormComplete = () => gameId.length > 0 && userName.length > 0


    const submit = () => {
        history.push(`${GAME_PAGE_PATH}/${gameId}?username=${userName}`)
    }

    return (
        <FlexBox
            className={styles.joinGameForm}
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Input
                label="your name"
                onChange={setUserName}
                className={styles.formInput}
            />
            <Input
                label="room name"
                onChange={setGameId}
                className={styles.formInput}
            />
            <Button
                text="join"
                action={submit}
                disabled={!isFormComplete()}
                className={styles.formInput}
            />
        </FlexBox>
    )
}