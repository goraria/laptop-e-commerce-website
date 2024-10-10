import React, {Component, useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {Button, Col, Container, FloatingLabel, Form, Image, Row} from "react-bootstrap";
import {
    faApple, faMeta, faGoogle, faTwitter, faXTwitter, faGithub
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";

import SocialFormButton from "../../components/button/SocialFormButton.jsx";

import jp from '../../assets/images/jp.jpeg'

const sclItems = [
    // { id: 0, name: "Github", icon: faGithub, color: "secondary" },
    { id: 1, name: "Apple", icon: faApple, color: "dark" },
    { id: 2, name: "Google", icon: faGoogle, color: "success" },
    { id: 3, name: "Meta", icon: faMeta, color: "primary" },
    // { id: 4, name: "Twitter", icon: faTwitter },
]

function Login() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            try {
                const response = await axios.post('http://localhost:5172/authentication/login', {
                    username: formData.username,
                    password: formData.password
                });

                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    alert('Login successful');
                    navigate('/');
                }
            } catch (error) {
                alert('Login fail');
                setError(error.response ? error.response.data.message : 'Login failed');
            }
        }
        setValidated(true);
    };

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
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                {/*<FloatingLabel*/}
                                {/*    controlId="floatingInput"*/}
                                {/*    label="Email address"*/}
                                {/*    className="mb-3 mt-3"*/}
                                {/*>*/}
                                {/*    <Form.Control type="email" placeholder="name@example.com" required/>*/}
                                {/*    <Form.Control.Feedback type="invalid">*/}
                                {/*        Please enter your password.*/}
                                {/*    </Form.Control.Feedback>*/}
                                {/*</FloatingLabel>*/}
                                <Form.Group className="mb-3" controlId="username">
                                    {/*<Form.Label>Email address</Form.Label>*/}
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                    {/*<Form.Text className="text-muted">*/}
                                    {/*    We'll never share your email with anyone else.*/}
                                    {/*</Form.Text>*/}
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your username.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*<FloatingLabel*/}
                                {/*    controlId="floatingInput"*/}
                                {/*    label="Password"*/}
                                {/*    className="mb-3 mt-3"*/}
                                {/*>*/}
                                {/*    <Form.Control type="password" placeholder="password" required/>*/}
                                {/*    <Form.Control.Feedback type="invalid">*/}
                                {/*        Please enter your password.*/}
                                {/*    </Form.Control.Feedback>*/}
                                {/*</FloatingLabel>*/}
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check
                                                // required
                                                type="checkbox"
                                                label="Remember Account"
                                                // feedback="You must agree before submitting."
                                                feedbackType="invalid"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} className="text-end">
                                        <Button variant="link" style={{padding: 0, color: '#dc3545', textDecoration: "none", fontWeight: 'bold'}}>
                                            Forgot password?
                                        </Button>
                                    </Col>
                                </Row>
                                {/*<Link to="/">*/}
                                <Button variant="danger" type="submit" className="mb-3" style={{width: '100%'}}>
                                    Log in
                                </Button>
                                {/*</Link>*/}
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
                                    you don&#39;t have an acoount
                                    <Link to="/register">
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

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             error: null,
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({ [event.target.name]: event.target.value });
//     }
//
//     async handleSubmit(event) {
//         event.preventDefault();
//         const { username, password } = this.state;
//
//         try {
//             const response = await axios.post('http://localhost:5172/authentication/login', {
//                 username,
//                 password
//             });
//
//             const data = response.data;
//             if (data.token) {
//                 localStorage.setItem('token', data.token);
//                 alert('Login successful');
//
//                 // useNavigate('/');
//             }
//         } catch (error) {
//             this.setState({ error: error.response ? error.response.data.message : 'Login failed' });
//             console.log('fail')
//         }
//     }
//
//     render() {
//
//     }
// }

export default Login