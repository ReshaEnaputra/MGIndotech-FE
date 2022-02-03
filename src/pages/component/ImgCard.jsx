import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import css from '../styles/card.module.css'
import Detail from '../modals/ImgDetails'

const ImgCard = (data, setFav) => {
    const [bool, setBool] = useState(false)
    const showModal = () => {
        setBool(true)
    }

    // const addFav = () => {
    //     setFav(data => [...data, `${data.length}`]);
    // };
    if(data.data){
        return(
            <>
                <div>
                    <Card
                            color="light"
                            className={css.container}
                    >
                        <CardBody>
                            <div className={css.flexbox}>
                                <div className={css.idContainer}>
                                    <div className={css.ids}>
                                        <CardTitle tag="h5" className={css.id}>
                                            {data.data.id}
                                        </CardTitle>
                                    </div>
                                </div>
                                <div className={css.dataContainer}>
                                    <CardTitle tag="h5" className={css.header}>
                                        {data.data.title}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        <img src={data.data.thumbnailUrl} alt="" />
                                    </CardSubtitle>
                                    <Button onClick={() => showModal()}>
                                        Zoom In
                                    </Button>
                                    {/* <Button onClick={() => addFav()} className={css.button}>
                                        Add To Favorites
                                    </Button> */}
                                    <Button className={css.button}>
                                        Add To Favorites
                                    </Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <Detail
                    bool = {bool}
                    setBool = {setBool}
                    data = {data}
                />
            </>
        );
    }else{
        return(
            <div>
            </div>
        );
    }
};

export default ImgCard;
