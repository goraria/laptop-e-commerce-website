import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {
    faApple, faMeta, faGoogle, faTwitter, faXTwitter, faGithub
} from '@fortawesome/free-brands-svg-icons';

import SocialFormButton from "../elements/SocialFormButton.jsx";

import jp from '../resources/images/jp.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const sclItems = [
    // { id: 0, name: "Github", icon: faGithub, color: "secondary" },
    { id: 1, name: "Apple", icon: faApple, color: "dark" },
    { id: 2, name: "Google", icon: faGoogle, color: "success" },
    { id: 3, name: "Meta", icon: faMeta, color: "primary" },
    // { id: 4, name: "Twitter", icon: faTwitter },
]

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
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
                                <h3>Log in</h3>
                                <div style={{display: "flex", marginBottom: 16, justifyContent: 'center'}}>
                                    <Image
                                        className="d-block"
                                        src={jp}
                                        alt="Second slide"
                                        style={{objectFit: 'cover', width: 224, height: 224, borderRadius: '5px'}}
                                    />
                                </div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email"/>
                                        {/*<Form.Text className="text-muted">*/}
                                        {/*    We'll never share your email with anyone else.*/}
                                        {/*</Form.Text>*/}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"/>
                                    </Form.Group>
                                    {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                                    {/*    <Form.Check type="checkbox" label="Remember Account"/>*/}
                                    {/*</Form.Group>*/}
                                    <Row className="mb-3">
                                        <Col xs={6}>
                                            <Form.Check type="checkbox" label="Remember Account"/>
                                        </Col>
                                        <Col xs={6} className="text-end">
                                            <Button variant="link" style={{padding: 0, color: '#dc3545', textDecoration: "none", fontWeight: 'bold'}}>
                                                Forgot password?
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Link to="/">
                                        <Button variant="danger" type="submit" className="mb-3" style={{width: '100%'}}>
                                            Log in
                                        </Button>
                                    </Link>
                                    <hr/>
                                    <div className="text-center" style={{marginBottom: 16}}>or sign in with</div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                                        {/*<Button variant="primary" type="button"*/}
                                        {/*        style={{flex: '1', margin: '0 5px 10px 0', minWidth: '120px'}}>*/}
                                        {/*    <i className="fab fa-facebook" style={{marginRight: 8}}></i> Facebook*/}
                                        {/*</Button>*/}
                                        {/*<Button variant="outline-dark" type="button"*/}
                                        {/*        style={{flex: '1', margin: '0 5px 10px 0', minWidth: '120px'}}>*/}
                                        {/*    <i className="fab fa-google" style={{marginRight: 8}}></i> Google*/}
                                        {/*</Button>*/}
                                        {/*<Button variant="info" type="button"*/}
                                        {/*        style={{flex: '1', margin: '0 5px 10px 0', minWidth: '120px'}}>*/}
                                        {/*    <i className="fab fa-twitter" style={{marginRight: 8}}></i> Twitter*/}
                                        {/*</Button>*/}
                                        {/*<Button variant="secondary" type="button"*/}
                                        {/*        style={{flex: '1', margin: '0 5px 10px 0', minWidth: '120px'}}>*/}
                                        {/*    <i className="fab fa-linkedin" style={{marginRight: 8}}></i> LinkedIn*/}
                                        {/*</Button>*/}
                                        {sclItems.map(socialItem => (
                                            <SocialFormButton key={socialItem.id} socialItems={socialItem}/>
                                        ))}
                                    </div>
                                    <hr/>
                                    <div className="text-center" style={{marginBottom: 16}}>
                                        you don't have an acoount
                                        <Link to="/signup">
                                            <Button variant="link" style={{
                                                padding: 0,
                                                color: '#dc3545',
                                                textDecoration: "none",
                                                fontWeight: 'bold',
                                                paddingLeft: 4
                                            }}>Sign up</Button>
                                        </Link>
                                    </div>
                                </Form>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Login

// a. Bạn có muốn thêm tooltip khi hover vào các nút mạng xã hội không?
//     b. Bạn có muốn sử dụng hiệu ứng khi bấm nút để tăng tính thẩm mỹ không?
//     c. Bạn có muốn thêm hiệu ứng hover để làm nổi bật các nút mạng xã hội khi di chuột qua không?
//     d. Bạn có muốn thay đổi màu sắc cho từng nút mạng xã hội (để đồng bộ với thương hiệu từng mạng như màu xanh của Facebook, màu đỏ của Google, v.v.) không?