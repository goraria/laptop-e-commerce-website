import React, {Component} from "react";
import {Alert, Button, Col, Container, Form, Image, InputGroup, Nav, Row} from "react-bootstrap";
import jp from "../resources/images/jp.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt, faBullseye, faCity, faGift, faHistory, faLocationDot, faMapMarkerAlt, faMapPin,
    faPhone, faQuestionCircle, faSignOutAlt, faStar, faUser
} from "@fortawesome/free-solid-svg-icons";

const sidebarLinks = [
    { id: 1, title: "Account Information", href: '/profile', icon: faUser },
    { id: 2, title: "Order History", href: '/bill', icon: faHistory },
    { id: 3, title: "Voucher Wallet", href: '', icon: faGift },
    { id: 4, title: "Address", href: '', icon: faMapPin },
    { id: 5, title: "Rating", href: '', icon: faStar },
    { id: 6, title: "Faq", href: '', icon: faQuestionCircle },
    { id: 7, title: "Log out", href: '', icon: faSignOutAlt },
]

class SidebarAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {directory} = this.props
        return (
            <Nav.Link href={directory.href} className="d-flex align-items-center" style={{color: '#dc3545'}}>
                <FontAwesomeIcon icon={directory.icon} className="me-2" style={{width: 28}} />{directory.title}
            </Nav.Link>
        )
    }
}

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{marginTop: 112}}>
                <div>
                    <Container style={{padding: '0, 12px'}}>
                        <Row lg="8"  style={{
                            padding: '15px 12px 15px 12px',
                            margin: '0',
                            borderRadius: 10,
                            backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0'
                        }}>
                            <Col md={3} className="bg-light p-3">
                                <Nav defaultActiveKey="/account" className="flex-column">
                                    {/*<Nav.Link href="/account" className="d-flex align-items-center">*/}
                                    {/*    <FontAwesomeIcon icon={faUser} className="me-2" />*/}
                                    {/*    Thông tin tài khoản*/}
                                    {/*</Nav.Link>*/}
                                    {/*<Nav.Link href="/orders" className="d-flex align-items-center">*/}
                                    {/*    <FontAwesomeIcon icon={faHistory} className="me-2" />*/}
                                    {/*    Lịch sử đơn hàng*/}
                                    {/*</Nav.Link>*/}
                                    {/*<Nav.Link href="/voucher" className="d-flex align-items-center">*/}
                                    {/*    <FontAwesomeIcon icon={faGift} className="me-2" />*/}
                                    {/*    Ví voucher*/}
                                    {/*</Nav.Link>*/}
                                    {/*<Nav.Link href="/address" className="d-flex align-items-center">*/}
                                    {/*    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />*/}
                                    {/*    Số địa chỉ*/}
                                    {/*</Nav.Link>*/}
                                    {/*<Nav.Link href="/reviews" className="d-flex align-items-center">*/}
                                    {/*    <FontAwesomeIcon icon={faStar} className="me-2" />*/}
                                    {/*    Đánh giá & nhận xét*/}
                                    {/*</Nav.Link>*/}
                                    {/*<Nav.Link href="/faq" className="d-flex align-items-center">*/}
                                    {/*    <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />*/}
                                    {/*    Câu hỏi thường gặp*/}
                                    {/*</Nav.Link>*/}
                                    {/*<Nav.Link href="/logout" className="d-flex align-items-center">*/}
                                    {/*    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />*/}
                                    {/*    Đăng xuất*/}
                                    {/*</Nav.Link>*/}
                                    {/*<SidebarAccount directory={sidebarLink} />*/}
                                    {
                                        sidebarLinks.map(sidebarLink => (
                                            <SidebarAccount directory={sidebarLink} />
                                        ))
                                    }
                                </Nav>
                            </Col>
                            <Col md={9} className="p-4">
                                <h2>Account Information</h2>
                                {/*<Form>*/}
                                {/*    <Form.Group className="mb-3" controlId="formName">*/}
                                {/*        <Form.Label>Tên của bạn</Form.Label>*/}
                                {/*        <div className="d-flex align-items-center">*/}
                                {/*            <FontAwesomeIcon icon={faUser} className="me-2" />*/}
                                {/*            <Form.Control type="text" defaultValue="Truong Giang Pham" />*/}
                                {/*        </div>*/}
                                {/*    </Form.Group>*/}

                                {/*    <Form.Group className="mb-3" controlId="formEmail">*/}
                                {/*        <Form.Label>Email</Form.Label>*/}
                                {/*        <div className="d-flex align-items-center">*/}
                                {/*            <FontAwesomeIcon icon={faEnvelope} className="me-2" />*/}
                                {/*            <Form.Control type="email" defaultValue="truonggiangpham.workspace@gmail.com" />*/}
                                {/*        </div>*/}
                                {/*    </Form.Group>*/}

                                {/*    <Form.Group className="mb-3" controlId="formPhone">*/}
                                {/*        <Form.Label>Số điện thoại</Form.Label>*/}
                                {/*        <div className="d-flex align-items-center">*/}
                                {/*            <FontAwesomeIcon icon={faPhone} className="me-2" />*/}
                                {/*            <Form.Control type="text" placeholder="Nhập số điện thoại" />*/}
                                {/*        </div>*/}
                                {/*    </Form.Group>*/}
                                {/*</Form>*/}
                                <Form noValidate>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                                defaultValue=""
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Last name"
                                                defaultValue=""
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                            <Form.Label>Username</Form.Label>
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <FontAwesomeIcon icon={faAt} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="username"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose a username.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                                            <Form.Label>Address</Form.Label>
                                            {/*<Form.Control type="text" placeholder="Address" required />*/}
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Address"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid address.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom03">
                                            <Form.Label>City</Form.Label>
                                            {/*<Form.Control type="text" placeholder="City" required />*/}
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <FontAwesomeIcon icon={faCity} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="City"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid city.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                                            <Form.Label>State</Form.Label>
                                            {/*<Form.Control type="text" placeholder="State" required />*/}
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <FontAwesomeIcon icon={faBullseye} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="State"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid state.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                                            <Form.Label>Phone</Form.Label>
                                            {/*<Form.Control type="list-number" placeholder="Phone" required />*/}
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Phone"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid state.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            required
                                            label="Agree to terms and conditions"
                                            feedback="You must agree before submitting."
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                    <Button variant="danger" type="submit" className="mb-3" style={{width: '100%'}}>
                                        Change Password
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default UserProfile