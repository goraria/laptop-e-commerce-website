import React, { Component } from 'react';
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
import TransitionBar from '../components/TransitionBar';
const products = [
    { id: 1, name: 'Product 1', price: '5', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 1' },
    { id: 2, name: 'Product 2', price: '6', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 2' },
    { id: 3, name: 'Product 3', price: '7', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 3' },
    { id: 4, name: 'Product 4', price: '8', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 4' },
    { id: 5, name: 'Product 5', price: '9', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 5' },
    { id: 6, name: 'Product 6', price: '10', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 6' },
    { id: 7, name: 'Product 7', price: '9', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 7' },
    { id: 8, name: 'Product 8', price: '10', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 8' },
];

const categories = [
    { categorical: 'Thương hiệu', varient: 'danger', item: ['a', 'b', 'c'] },
    { categorical: 'CPU', varient: 'danger', item: ['a', 'b', 'c'] },
    { categorical: 'RAM', varient: 'danger', item: ['a', 'b', 'c'] },
    { categorical: 'GPU', varient: 'danger', item: ['a', 'b', 'c'] },
    { categorical: 'Ổ cứng', varient: 'danger', item: ['a', 'b', 's', "sssssssssssssssssssssss"] },
    { categorical: 'Màn hình', varient: 'danger', item: ['a', 'b', 'c'] },

]
const brand_list = ['Apple', 'Dell', 'Acer', 'Lenovo', 'Asus', 'Microsolf', 'HP', 'MSI']

const classification = [
    { category: "Laptop", icon: faLaptop, items: ['#a', '#b', '#c',] },
    { category: "Chuột", icon: faMouse, items: ['#action1', '#action1', '#action1',] },
    { category: "Bàn phím", icon: faKeyboard, items: ['#action1', '#action1', '#action1',] },

]
class ListProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div style={{ marginTop: 112 }}>
                <TransitionBar classification = {classification}/>
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
                                    {['Lenovo', 'Dell', 'HP', 'Acer', 'Microsoft', 'Asus', 'LG', 'Apple', 'Razer', 'Samsung'].map((brand) => (
                                        <Button variant="outline-danger" key={brand} style={{ marginRight: 16 }}>
                                            {brand}
                                        </Button>
                                    ))}
                                </Container>
                            </Row>
                        </Row>



                    </Container>
                    <Container style={{ marginTop: 3.5 + 'em' }}>
                        <Stack direction="horizontal" gap={3}>
                            <div className="p-2">Chọn theo tiêu chí</div>
                            {categories.map(
                                (category) => CustomDropDown(category)
                            )}
                        </Stack>
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
}

export default ListProducts;
