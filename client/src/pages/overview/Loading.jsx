import React, {Component, useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {Container, Image, Row} from "react-bootstrap";

import jp from '../../assets/images/jp.jpeg'
import Overview from "../../layouts/Overview.jsx";

const Loading = () => {
    return (
        <Overview mt={112} me={56}>
            <div>
                <h2>Bill Cipher</h2>
                <div style={{display: "flex", marginBottom: 16, justifyContent: 'center'}}>
                    <Image
                        className="d-block"
                        src={jp}
                        alt="Second slide"
                        style={{objectFit: 'cover', width: 224, height: 224, borderRadius: '5px'}}
                    />
                </div>
                <h1 style={{textAlign: "center"}}>Loading</h1>
            </div>
        </Overview>
    )
}

export default Loading