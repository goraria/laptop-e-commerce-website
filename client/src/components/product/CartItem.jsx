import React, { useState, useEffect } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CardItem = ({ Item, onCheckboxChange }) => {
    const item = Item;
    const [product, setProduct] = useState([]);
    const [default_config, setdefaultconfig] = useState([]);
    const [descriptions, setArray] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        onCheckboxChange(default_config.price, newCheckedState); // Notify parent with price and new state
    };

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5172/products/load-productid/${item.idproduct}`);
            const data = await response.json();
            setProduct(data[0]);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    const fetchProductConfiguration = async () => {
        try {
            const response = await fetch(`http://localhost:5172/products/load-idconfiguration/${item.idconfiguration}`);
            const data = await response.json();
            setdefaultconfig(data[0]);
        } catch (error) {
            console.error("Error fetching configuration:", error);
        }
    };

    const fetchProductDescription = async () => {
        try {
            const response = await fetch(`http://localhost:5172/products/load-description/${item.idproduct}`);
            const data = await response.json();
            setArray(data[0]);
        } catch (error) {
            console.error("Error fetching description:", error);
        }
    };

    useEffect(() => {
        fetchProductDetails();
        fetchProductConfiguration();
        fetchProductDescription();
    }, []);

    return (
        <Row className="align-items-center py-3" style={{ display: "flex", flexWrap: "wrap" }}>
            <Col xs={12} md={2} className="d-flex align-items-center justify-content-center justify-content-md-start">
                <Form.Check
                    type="checkbox"
                    className="me-3"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <Image
                    src={product.product_image}
                    alt="Product"
                    style={{ objectFit: "cover", width: 112, height: 112, borderRadius: "5px" }}
                />
            </Col>
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center text-md-start text-center" style={{ marginLeft: 10 }}>
                <h5>{product.product_name}</h5>
                <h6>{descriptions.title_description}</h6>
                <h6>${default_config.price}</h6>
            </Col>
            <Col xs={12} md={2} className="d-flex align-items-center justify-content-center justify-content-md-start">
                <Button variant="light">
                    <FontAwesomeIcon icon={faMinus} />
                </Button>
                <Form className="d-flex align-items-center justify-content-center mx-2">
                    <Form.Control
                        type="text"
                        placeholder="0"
                        defaultValue={item.quantity}
                        style={{ width: 56, textAlign: "center" }}
                    />
                </Form>
                <Button variant="light">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </Col>
        </Row>
    );
};

export default CardItem;
