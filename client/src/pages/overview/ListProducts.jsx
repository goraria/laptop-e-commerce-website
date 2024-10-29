import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLaptop, faKeyboard, faMouse
} from '@fortawesome/free-solid-svg-icons';
import {
    Container, Button, Form, ButtonGroup, DropdownButton, Dropdown, Row, Col, Card, Image, Stack, Carousel,
    DropdownItem
} from 'react-bootstrap';
import CustomDropDown from "../../components/button/CustomDropDown"
import ProductItem from "../../components/product/ProductItem"
import TransitionBar from "../../layouts/TransitionBar"



const categories = [
    { categorical: 'Thương hiệu', varient: 'danger', item: ['Lenovo', 'Dell', 'HP', 'Acer', 'Microsoft', 'Asus', 'LG', 'Apple', 'Razer', 'Samsung'] },
    { categorical: 'CPU', varient: 'danger', item: ['Intel core i3', 'Intel core i5', 'Intel core i9','AMD Ryzen 5','AMD Ryzen 7','Apple M1','M2 Max','M1 Pro'] },
    { categorical: 'RAM', varient: 'danger', item: ['4', '8', '16','32','64'] },
    { categorical: 'GPU', varient: 'danger', item: ['RTX3050', 'RTX 3060',' RTX 3090','RTX 4060','RTX 4080','Apple M1 GPU'] },
    { categorical: 'Ổ cứng', varient: 'danger', item: ['128', '256', '512', "1024",'2048','4096'] },
    { categorical: 'Màn hình', varient: 'danger', item: ['1366X768', '1280X800', '1920X1080','2560X1440','2560X1600','3840X2400'] },

]
const brand_list = ['Apple', 'Dell', 'Acer', 'Lenovo', 'Asus', 'Microsolf', 'HP', 'MSI']


function ListProducts() {
    // const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [arrayG, setArray] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:5172/products/load-product")
        console.log(response.data)
        setArray(response.data)
    };

    useEffect(() => {
        fetchAPI()
    }, []);


    return (

        <div style={{ marginTop: 112 }}>
            <TransitionBar />
            <div >
                <Container>
                    <Row style={{ padding: '15px 12px 0px 12px', margin: '0', borderRadius: 10, backgroundColor: '#f8f9fa' }}>

                        <h1>Laptop</h1>
                        <p>
                            Laptop là một thiết bị máy tính có kích thước nhỏ gọn và di động.
                            Nó được thiết kế để sử dụng trong các hoạt động làm việc,
                            giải trí hoặc học tập khi di chuyển mà không cần phải sử dụng những chiếc máy tính để bàn cồng kềnh.
                        </p>
                        <Dropdown.Divider />

                        <Row className="justify-content-center my-3">
                            <Container>

                                
                                {['Lenovo', 'Dell', 'HP', 'Acer', 'Microsoft', 'Asus', 'LG', 'Apple', 'Razer', 'Samsung'].map((brand, index) => (
                                    <Button variant="outline-danger" key={index} style={{ margin: '0px 16px 16px 0px' }}>
                                        {brand}
                                    </Button>
                                ))}
                            </Container>
                        </Row>
                    </Row>
                </Container>

                <Container style={{ marginTop: 3.5 + 'em' }}>

                    <Row style={{ padding: '15px 12px 0px 12px', margin: '0', borderRadius: 10, backgroundColor: '#f8f9fa' }}>
                        <h4 className="p-2">Chọn theo tiêu chí</h4>
                        <div>
                            {categories.map(
                                (category, index) => <CustomDropDown className="justify-content-center mb-3" key={index} category={category} />
                            )}
                        </div>

                    </Row>
                </Container>


                <Container className="my-3">
                    <h2 className="text-center mb-4">Sản phẩm nổi bật</h2>
                    <Row>

                        {arrayG.map(product =>
                            <Col key={product.idproduct} sm={12} md={6} lg={3} className="mb-3">
                                <ProductItem obj={product} state={count} />
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        </div>
    )
}


export default ListProducts;
