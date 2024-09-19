import React, {Component} from "react";
import {Carousel, Container, Dropdown, Image, Row} from "react-bootstrap";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{marginTop: 112}}>
                <Container style={{backgroundColor: '#f8f9fa', borderRadius: 10}}>
                    <Row style={{
                        padding: '15px 12px 15px 12px',
                        margin: '0',
                        borderRadius: 10,
                        textAlign: 'justify',
                        // backgroundColor: '#eaedf0'
                    }}>
                        <div>
                            <h3>About us</h3>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login