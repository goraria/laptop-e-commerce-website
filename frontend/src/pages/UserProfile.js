import React, {Component, useEffect, useState} from "react";
import {Alert, Button, Col, Container, Form, Image, InputGroup, Nav, Row} from "react-bootstrap";
import jp from "../resources/images/jp.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt, faBullseye, faCity, faGift, faHistory, faLocationDot, faMapMarkerAlt, faMapPin,
    faPhone, faQuestionCircle, faSignOutAlt, faStar, faUser
} from "@fortawesome/free-solid-svg-icons";
import UserSidebar from "../components/UserSidebar";
import AccountInfo from "../components/AccountInfo";
import axios from 'axios';

function UserProfile() {
    const [arrayG, setArray] = useState([]);


    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:5172/profile")
        console.log(response.data)
        setArray(response.data)
    }

    useEffect(() => {
        fetchAPI()
    }, []);



        // const [sidebarTop, setSidebarTop] = useState(56);
        //
        // useEffect(() => {
        //     const handleScroll = () => {
        //         const scrollY = window.scrollY;
        //
        //         if (scrollY > 32) {
        //             setSidebarTop(24);
        //         } else {
        //             setSidebarTop(56 - scrollY);
        //         }
        //     };
        //     window.addEventListener("scroll", handleScroll);
        //
        //     return () => {
        //         window.removeEventListener("scroll", handleScroll);
        //     };
        // }, []);

        return (
            <div style={{marginTop: 112}}>
                <Container style={{padding: '0 12px'}}>
                    <Row lg="8"
                    style={{
                        margin: '0'
                    }}>
                        <Col
                        sm={12} md={3} lg={3}
                        className="bg-light p-3 mb-4"
                        style={{
                            padding: '15px 12px 15px 12px',
                            borderRadius: 10,
                            // position: "fixed",
                            top: 80,
                            backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0' '0, 12px'
                        }}>
                            <UserSidebar/>
                        </Col>
                        <Col
                        sm={12} md={9} lg={9}
                        className="bg-light p-3 mb-4"
                        style={{
                            padding: '15px 12px 15px 12px',
                            borderRadius: 10,
                            // height: '100vh',
                            backgroundColor: '#000', // backgroundColor: '#eaedf0'
                        }}>
                            <AccountInfo/>
                        </Col>
                    </Row>
                    {/*<Row>*/}
                    {/*    /!* Sidebar *!/*/}
                    {/*    <Col*/}
                    {/*        sm={12}*/}
                    {/*        md={3}*/}
                    {/*        lg={3}*/}
                    {/*        className="p-3"*/}
                    {/*        style={{*/}
                    {/*            backgroundColor: "#e9ecef",*/}
                    {/*            borderRadius: 10,*/}
                    {/*            position: "fixed",*/}
                    {/*            display: "none",*/}
                    {/*            top: `${89}px`, // Dynamic top, dựa theo vị trí cuộn*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <UserSidebar />*/}
                    {/*    </Col>*/}
                    {/*    <Col*/}
                    {/*        sm={12}*/}
                    {/*        md={9}*/}
                    {/*        lg={9}*/}
                    {/*        className="p-3"*/}
                    {/*        style={{*/}
                    {/*            backgroundColor: "#f8f9fa",*/}
                    {/*            borderRadius: 10,*/}
                    {/*            marginLeft: "auto",*/}
                    {/*            border: "1px solid #dee2e6",*/}
                    {/*            height: '100vh'*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <AccountInfo />*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Container>
            </div>
        )

        // return (
        //     <div style={{ marginTop: 112 }}>
        //         <Container style={{ padding: 0 }}>
        //             <Row lg="8" style={{ margin: "0" }}>
        //                 {/* Sidebar */}
        //                 <Col
        //                     sm={12}
        //                     md={3}
        //                     lg={3}
        //                     className="p-3"
        //                     style={{
        //                         padding: "15px 12px",
        //                         backgroundColor: "#f8f9fa",
        //                         borderRadius: 10,
        //                         position: "sticky",
        //                         top: "112px", // Offset for marginTop of main div
        //                         height: "fit-content", // Sidebar height matches content
        //                     }}
        //                 >
        //                     <UserSidebar />
        //                 </Col>
        //
        //                 {/* Account Info */}
        //                 <Col
        //                     sm={12}
        //                     md={9}
        //                     lg={9}
        //                     className="p-3"
        //                     style={{
        //                         padding: "15px 12px",
        //                         backgroundColor: "#fff",
        //                         borderRadius: 10,
        //                         height: "100%",
        //                     }}
        //                 >
        //                     <AccountInfo />
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </div>
        // );

        // return (
        //     <div style={{ marginTop: 112 }}>
        //         <Container style={{ padding: "0 24px" }}> {/* Căn lề cho toàn bộ trang */}
        //             <Row style={{ margin: "0" }}>
        //                 {/* Sidebar */}
        //                 <Col
        //                     sm={12}
        //                     md={3}
        //                     lg={3}
        //                     className="p-3"
        //                     style={{
        //                         backgroundColor: "#e9ecef", // Màu nền cho sidebar
        //                         borderRadius: 10,
        //                         position: "fixed", // Sidebar cố định
        //                         top: "24px", // Dừng lại khi cách header 24px
        //                         width: "23%", // Đảm bảo căn lề 2 bên và phù hợp với khối bên cạnh
        //                         height: "auto", // Sidebar cao vừa đủ theo nội dung
        //                     }}
        //                 >
        //                     <UserSidebar />
        //                 </Col>
        //
        //                 {/* Khoảng cách giữa 2 khối 24px */}
        //                 <Col sm={0} md={1} lg={1}></Col>
        //
        //                 {/* Account Info */}
        //                 <Col
        //                     sm={12}
        //                     md={8}
        //                     lg={8}
        //                     className="p-3"
        //                     style={{
        //                         backgroundColor: "#f8f9fa", // Màu nền cho account info
        //                         borderRadius: 10,
        //                         marginLeft: "auto", // Căn lề bên phải
        //                         border: "1px solid #dee2e6", // Bo viền giống sidebar
        //                         height: "auto", // Chiều cao tự động theo nội dung
        //                     }}
        //                 >
        //                     <AccountInfo />
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </div>
        // );
    }

export default UserProfile
