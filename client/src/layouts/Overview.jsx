import React, {useEffect} from "react";
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import jp from "../assets/images/jp.jpeg";

const Overview = ({ children, mt, me }) => {
    useEffect(() => {
        Main();
    }, [])
    return (
        <div style={{marginTop: mt, marginBottom: me}}>
            <Container style={{padding: '0, 12px'}}>
                <Card>
                    <Row style={{
                        padding: '15px 12px 15px 12px',
                        margin: '0',
                        borderRadius: 10,
                        // backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0'
                    }}>
                        {children}
                    </Row>
                </Card>
            </Container>
        </div>
    );
}

export default Overview