import React, { useEffect, useState } from "react";
import ImgCard from "./component/ImgCard";
import css from './styles/main.module.css';
import axios from "axios";
import Fav from "./component/Fav";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const Main = () => {
    const [datas, setDatas] = useState([]);
    const [text, setText] = useState("");
    const [fav, setFav] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(
                "https://jsonplaceholder.typicode.com/albums/1/photos"
            );
            setDatas(data);
        };
        fetchData();
    }, [setDatas]);

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const filtered = !text
    ? datas
    : datas.filter((image) => 
        image.title.toLowerCase().includes(text.toLowerCase())
    )

    if(datas.length !== 0){
        console.log(datas)

        return (
          <>
            <div className={css.navbar}>
                <h1 className={css.header}>Images</h1>
            </div>
            <div className={css.inputContainer}>
                <input className={css.input} onChange={handleChange} name='search' placeholder='Search here...' type="text" />
            </div>
            <div className={css.flexbox}>
                <div className={css.container}>
                    {filtered?.map((datas) => (
                        <ImgCard data={datas} key={datas.url} />
                        ))}
                    <ImgCard setFav={setFav}/>
                </div>
                <div className={css.favContainer}>
                <Card
                    color="light"
                    className={css.container}
                >
                    <div className={css.headerContainer}>
                        <h1 className={css.header}>Favorites</h1>
                        {fav?.map((data) => (
                            <ImgCard data={data} key={data.url} />
                        ))}
                        <ImgCard/>
                    </div>
                </Card>
                </div>
            </div>
          </>
        );
    }else{
        return (
            <div></div>
        )
    }
};

export default Main;
