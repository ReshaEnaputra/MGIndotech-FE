import React from 'react';
import css from '../styles/fav.module.css'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const Fav = () => {
    return (
        <Card
            color="light"
            className={css.container}
        >
            <div className={css.headerContainer}>
                <h1 className={css.header}>Favorites</h1>
            </div>
        </Card>
    );
};

export default Fav;
