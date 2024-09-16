import {Button, Card, Carousel, Col, Container, Row, Image} from "react-bootstrap";
import React, {Component} from "react";

import mbp from "../resources/images/mbp.jpg"
import mba from "../resources/images/mba.jpeg"
import sfc from "../resources/images/sfc.avif"
import xps from "../resources/images/xps.avif"
import prn from "../resources/images/prn.avif"
import uls from "../resources/images/uls.avif"

const products = [
    { id: 1, name: 'Product 1', price: '$5', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 1' },
    { id: 2, name: 'Product 2', price: '$6', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 2' },
    { id: 3, name: 'Product 3', price: '$7', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 3' },
    { id: 4, name: 'Product 4', price: '$8', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 4' },
    { id: 5, name: 'Product 5', price: '$9', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 5' },
    { id: 6, name: 'Product 6', price: '$10', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 6' },
];

const banners = [
    { id: 1, name: mbp, alt: "First slide", title: "Sale Off 5%", description: "Developer love Mac" },
    { id: 2, name: mba, alt: "Second slide", title: "Sale Off 10%", description: "The best display ever in a laptop." },
    { id: 3, name: xps, alt: "Third slide", title: "Sale Off 12%", description: "Most beautiful Ultrabook" },
    { id: 4, name: prn, alt: "Fourth slide", title: "Sale Off 8%", description: "The best Workstation" },
    { id: 5, name: sfc, alt: "Fifth slide", title: "Sale Off 15%", description: "Surface x Copilot" },
    { id: 6, name: uls, alt: "Sixth slide", title: "Sale Off 20%", description: "XDR Display" },
]

class Home extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Carousel style={{marginTop: 56}}>
                    {/*<Carousel.Item>*/}
                    {/*    <Image*/}
                    {/*        className="d-block w-100"*/}
                    {/*        src={mbp}*/}
                    {/*        alt="First slide"*/}
                    {/*        style={{ objectFit: 'cover', height: '500px' }}*/}
                    {/*    />*/}
                    {/*    <Carousel.Caption>*/}
                    {/*        <h3>Sale Off 50%</h3>*/}
                    {/*        <p>Sale off all product in September</p>*/}
                    {/*    </Carousel.Caption>*/}
                    {/*</Carousel.Item>*/}
                    {/*<Carousel.Item>*/}
                    {/*    <Image*/}
                    {/*        className="d-block w-100"*/}
                    {/*        src="https://via.placeholder.com/1200x400"*/}
                    {/*        alt="Second slide"*/}
                    {/*        style={{ objectFit: 'cover', height: '500px' }}*/}
                    {/*    />*/}
                    {/*    <Carousel.Caption>*/}
                    {/*        <h3>Newest</h3>*/}
                    {/*        <p>Famous Brand in our website</p>*/}
                    {/*    </Carousel.Caption>*/}
                    {/*</Carousel.Item>*/}
                    {banners.map(banner => (
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src={banner.name}
                                alt={banner.alt}
                                style={{ objectFit: 'cover', height: '480px' }}
                            />
                            <Carousel.Caption>
                                <h3>{banner.title}</h3>
                                <p>{banner.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Container className="my-4">
                    <h2 className="text-center mb-4">Sản phẩm nổi bật</h2>
                    <Row>
                        {products.map(product => (
                            <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={product.img}/>
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            {product.description}. Giá: {product.price}
                                        </Card.Text>
                                        <Button variant="primary">Mua ngay</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home