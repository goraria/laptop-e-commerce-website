import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Row, Col } from 'react-bootstrap';
import CustomDropDown from "../../components/button/CustomDropDown";
import ProductItem from "../../components/product/ProductItem";
import TransitionBar from "../../layouts/TransitionBar";
import { useLocation } from 'react-router-dom';
import Overview from "../../layouts/Overview.jsx";

const categories = [
    { categorical: 'CPU', varient: 'primary', item: ['Intel core i3','Intel core i5','Intel core i7','Intel core i9','AMD Ryzen 5','AMD Ryzen 7','Apple M1'] },
    { categorical: 'RAM', varient: 'info', item: ['4','8','16','32','64'] },
    { categorical: 'GPU', varient: 'success', item: ['RTX 2060', 'RTX 3060','RTX 3090', 'RTX 4070','GTX 1660 Ti'] },
    { categorical: 'Ổ cứng', varient: 'warning', item: ['128','256', '512', '1024', "2048"] },
    { categorical: 'Màn hình', varient: 'danger', item: ['15', '14', '12','16'] },
];

function ProductList() {
    const [count, setCount] = useState(0);
    const [arrayG, setArrayG] = useState([]);
    const location = useLocation();

    // Extract search query from URL
    const query = new URLSearchParams(location.search);
    const searchQuery = query.get("search");
    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:5172/products/load-product");
        setArrayG(response.data);
    };

    const fetchProductByBrand = async (brand) => {
        const response = await axios.get(`http://localhost:5172/products/load-productBrand/${brand}`);
        setArrayG(response.data);
    };

    const fetchProductByName= async () => {
        try {
           const response = await axios.get(`http://localhost:5172/products/load-productName/${searchQuery}`);
        setArrayG(response.data); 
        } catch (error) {
            console.log('chưa nhập tên tìm kiếm')
        }
        
    };

    useEffect(() => {
        fetchAPI();
        if(searchQuery != ''){
            fetchProductByName();
        }
    }, []);

    // Function to filter products based on dropdown selection
    const filterProducts = (category, selectedItem) => {
        const filteredProducts = async () => {
            const response = await axios.get(`http://localhost:5172/products/load-productCPU/${selectedItem}`);
            setArrayG(response.data);
        };
        filteredProducts();
    };

    return (
        <>
            <TransitionBar/>
            <Overview mt={168} me={56}>
                <h2>Laptop</h2>
                <h6 style={{padding: '0 16px'}}>
                    Laptop là một thiết bị máy tính có kích thước nhỏ gọn và di động...
                </h6>
                <Row className="justify-content-center my-3">
                    <Container style={{padding: '0 16px'}}>
                        {['Lenovo', 'Dell', 'HP', 'Acer', 'Microsoft', 'Asus', 'LG', 'Apple', 'Razer', 'Samsung'].map((brand, index) => (
                            <Button
                                variant="outline-primary"
                                key={index}
                                // style={{margin: '0px 16px 16px 0px'}}
                                className="me-3"
                                onClick={() => fetchProductByBrand(brand)} // Call function with brand name
                            >
                                {brand}
                            </Button>
                        ))}
                    </Container>
                </Row>
            </Overview>
            <Overview mt={56} me={56}>
                <h2>Chọn theo tiêu chí</h2>
                <h6 style={{padding: '0 16px'}}>
                    Lọc theo các tiêu chí...
                </h6>
                <Row className="justify-content-center my-3">
                    <Container style={{padding: '0 16px'}}>
                        {categories.map((category, index) => (
                            <CustomDropDown key={index} category={category} onSelect={filterProducts}/>
                        ))}
                    </Container>
                </Row>
            </Overview>

            <Container className="my-3">
                <h2 className="text-center mb-4">Sản phẩm nổi bật</h2>
                <Row>
                    {arrayG.map(product => (
                        <Col key={product.idproduct} sm={12} md={6} lg={3} className="mb-3">
                            <ProductItem obj={product} state={count}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default ProductList;
