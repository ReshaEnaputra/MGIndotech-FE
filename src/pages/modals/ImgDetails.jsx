import React from 'react';
import Popup from 'reactjs-popup';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import cssModule from '../styles/detail.module.css'

const overlayStyle = { background: 'rgba(0,0,0,0.5)', overflow: 'auto' };
const ImgDetails = ({bool, setBool, data}) => {
  return (
      <>
          <Popup
              contentStyle={{width: "900px", height: "auto", borderRadius: "5px"}}
              open={bool} onClose={() => setBool(false)}
              modal
              nested
              {...{ overlayStyle }}
          >
              <div className={cssModule.container}>
                  <div>
                      <CardTitle className={cssModule.title} tag="h3">
                          {data.data.title}
                      </CardTitle><br />
                      <img className={cssModule.image} src={data.data.url} alt="" />
                  </div>
              </div>
          </Popup>
      </>
  )
};

export default ImgDetails;
