import { Link } from 'react-router-dom'
import { Component } from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { noAuto } from "@fortawesome/fontawesome-svg-core"
import jp from '../../assets/images/jp.jpeg'
function renderStars(rating) {
    // Sanitize rating to be between 0 and 5
    const sanitizedRating = Math.max(0, Math.min(rating, 5));
    const fullStars = Math.floor(sanitizedRating); // Full stars count
    const halfStar = sanitizedRating % 1 >= 0.1 ? 1 : 0; // Half-star check
    const emptyStars = 5 - fullStars - halfStar; // Remaining empty stars

    // Ensure valid star counts
    return (

        <>
            {/* Full stars */}
            {Array.from({ length: fullStars }).map((_, i) => (
                <FontAwesomeIcon key={`full-${i}`} icon={faStar} color="#f39c12" />
            ))}
            {/* Half star */}
            {halfStar === 1 && <FontAwesomeIcon icon={faStarHalfAlt} color="#f39c12" />}
            {/* Empty stars */}
            {Array.from({ length: emptyStars }).map((_, i) => (
                <FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} color="#f39c12" />
            ))}
        </>
    );
}
function ProductItem(product, state) {

    const [descriptions, setArray] = useState([]);
    const [configurations, setconfig] = useState([]);
    const [ratings, setRating] = useState([]);
    const [products, setProduct] = useState([]);
    var obj = product.obj;

    const fetchAPI = async () => {
        const response = await axios.get(`http://localhost:5172/products/load-description/${obj.idproduct}`)
        setArray(response.data[0])
    };

    const fetchAPI1 = async () => {
        const response = await axios.get(`http://localhost:5172/products/load-configuration/${obj.idproduct}`)
        setconfig(response.data[0])
    };
    const fetchAPI2 = async () => {
        const response = await axios.get(`http://localhost:5172/products/load-rating/${obj.idproduct}`)
        setRating(response.data)
    };
    const fetchAPI3 = async () => {
        const response = await axios.get(`http://localhost:5172/products/load-productid/${obj.idproduct}`)
        setProduct(response.data)
    };
    // obj.forEach(idproduct => {
    //     const fetchconfig = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:5172/load-configuration/${idproduct}`);
    //             const data = await response.json();
    //             setConfig(data); // Cập nhật thông tin sản phẩm từ backend
    //         } catch (error) {
    //             console.error('Lỗi khi lấy dữ liệu cấu hình:', error);
    //         }
    //     };
    // }
    // );
    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5172/load-productid/${obj.idproduct}`);
            const data = await response.json();
            setProduct(data); // Cập nhật thông tin sản phẩm từ backend
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        }
    };
    const fetchProductDecription = async () => {
        try {
            const response = await fetch(`http://localhost:5172/load-description/${obj.idproduct}`);
            const data = await response.json();
            setArray(data); // Cập nhật thông tin sản phẩm từ backend
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu mô tả của sản phẩm:', error);
        }
    };
    // const fetchProductColor = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:5172/load-productid/${id}`);
    //         const data = await response.json();
    //         setProduct(data); // Cập nhật thông tin sản phẩm từ backend
    //     } catch (error) {
    //         console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    //     }
    // };
    const fetchProductConfiguration = async () => {
        try {
            const response = await fetch(`http://localhost:5172/load-configuration/${obj.idproduct}`);
            const data = await response.json();
            setconfig(data); // Cập nhật thông tin sản phẩm từ backend
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        }
    };

    useEffect(() => {
        // fetchProductDetails();
        // fetchProductConfiguration();
        // fetchProductDecription();
        // fetchAPI();
        // fetchAPI1();
        // fetchAPI2();
        // fetchAPI3();
    }, []);



    const totalScore = ratings.reduce((sum, rating) => sum + rating.score, 0);
    const averageScore = totalScore / ratings.length;
    const cardWidth = state;
    const imageHeight = (1 / 8) * cardWidth;
    return (
        <Card style={{ border: 'none', backgroundColor: '#f8f9fa', borderRadius: 10 }}>
            <Card.Img variant="top" src={'https://cdn.tgdd.vn/Products/Images/44/272282/Slider/vi-vn-acer-nitro-5-tiger-an515-58-52sp-i5-nhqfhsv001-1.jpg'} style={{ height: { imageHeight }, width: { cardWidth }, objectFit: 'cover' }} />
            <Card.Body>
                {/* Price and Name in the same line */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Card.Title style={{
                        marginBottom: '0',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        {obj.product_name}
                    </Card.Title>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>${configurations.price}</span>
                </div>

                {/* Truncated Description */}
                <Card.Text style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {descriptions.title_description}
                </Card.Text>

                {/* Rating and Buy Button */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Rating Section */}
                    <div style={{ color: '#f39c12', fontSize: '1.2rem' }}>
                        {renderStars(averageScore)}
                    </div>
                    {/* Buy Button */}
                    <Link to={`/product?id=${obj.idproduct}`} style={{ textDecoration: 'none' }}>
                        <Button variant="danger">
                            <FontAwesomeIcon icon={faCartPlus} style={{ width: 56 }} />
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>

    );
}

export default ProductItem;
