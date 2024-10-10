import React, {Component, useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {Container, Image, Row} from "react-bootstrap";

import jp from '../../assets/images/jp.jpeg'

function NotFound() {
    return (
        <div style={{marginTop: 112}}>
            <div>
                <Container style={{padding: '0, 12px'}}>
                    <Row style={{
                        padding: '15px 12px 15px 12px',
                        margin: '0',
                        borderRadius: 10,
                        backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0'
                    }}>
                        <div>
                            <h3>Bill Cipher</h3>
                            <div style={{display: "flex", marginBottom: 16, justifyContent: 'center'}}>
                                <Image
                                    className="d-block"
                                    src={jp}
                                    alt="Second slide"
                                    style={{objectFit: 'cover', width: 224, height: 224, borderRadius: '5px'}}
                                />
                            </div>
                            <h1 style={{textAlign: "center"}}>404 Page Not Found.</h1>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default NotFound