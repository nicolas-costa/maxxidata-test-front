import React from 'react';
import styles from './styles';

const Main = (props) => {
    const classes = styles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {props.children}
        </main>
    )
}

export default Main;
