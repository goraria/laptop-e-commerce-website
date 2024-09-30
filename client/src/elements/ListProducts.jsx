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
import CustomDropDown from '../elements/CustomDropDown'
import ProductItem from "../elements/ProductItem"
import TransitionBar from "../components/TransitionBar"

const products = [
    { id: 1, name: 'Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 ', price: '50000', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 1', rating: 3.5 },
    { id: 2, name: 'Product 2', price: '90000', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 2Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 ', rating: 0 },
    { id: 3, name: 'Product 3', price: '7', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 3', rating: 1.1 },
    { id: 4, name: 'Product 4', price: '8', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 4', rating: 4.2 },
    { id: 5, name: 'Product 5', price: '9', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 5', rating: 2.7 },
    { id: 6, name: 'Product 6', price: '10', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 6', rating: 5 },
    { id: 7, name: 'Product 7', price: '9', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 7', rating: 3.6 },
    { id: 8, name: 'Product 8', price: '10', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 8', rating: 0.2 },
];

const categories = [
    { categorical: 'Thương hiệu', varient: 'danger', item: ['a', 'b', 'c'] },
    { categorical: 'CPU', varient: 'danger', item: ['a', 'b', 'c'] },
    { categorical: 'RAM', varient: 'danger', item: ['a', 'b', 'c'] },
    { categorical: 'GPU', varient: 'danger', item: ['a', 'b', 'c'] },
    { categorical: 'Ổ cứng', varient: 'danger', item: ['a', 'b', 's', "c"] },
    { categorical: 'Màn hình', varient: 'danger', item: ['a', 'b', 'c'] },

]
const brand_list = ['Apple', 'Dell', 'Acer', 'Lenovo', 'Asus', 'Microsolf', 'HP', 'MSI']


function ListProducts() {
    // const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [arrayG, setArray] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:5172/api/search")
        console.log(response.data.name)
        setArray(response.data.name)
    }

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

                                {arrayG.map((item, index) => (
                                    <h1 key={index}>{item}</h1>
                                ))}
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
                                (category, index) => <CustomDropDown key={index} category={category} />
                            )}
                        </div>

                    </Row>
                </Container>


                <Container className="my-3">
                    <h2 className="text-center mb-4">Sản phẩm nổi bật</h2>
                    <Row>

                        {products.map(product =>
                            <Col key={product.id} sm={12} md={6} lg={3} className="mb-3">
                                <ProductItem obj={product} />
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        </div>
    )
}


export default ListProducts;
