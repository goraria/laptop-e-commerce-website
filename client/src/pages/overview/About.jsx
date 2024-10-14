import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
    Carousel, Container, Dropdown, Image, Row, Card
} from "react-bootstrap";

import jp from '../../assets/images/jp.jpeg'
import sfc from '../../assets/images/sfc.jpeg'
import asusStore from '../../assets/images/asus-store.jpg'
import dellStore from '../../assets/images/dell-store.jpg'
import rogStore from '../../assets/images/rog-store.jpeg'
import lenovoStore from '../../assets/images/lenovo-store.jpg'

const imgItems = [
    { id: 0, name: "jg", src: jp, },
    { id: 1, name: "asus", src: asusStore, },
    { id: 2, name: "asus", src: dellStore, },
    { id: 3, name: "asus", src: rogStore, },
    { id: 4, name: "asus", src: lenovoStore, },
]

class ImageAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { imageItems } = this.props;
        return (
            <div style={{marginBottom: 16}}>
                <Image
                    className="d-block w-100"
                    src={imageItems.src}
                    alt="Second slide"
                    style={{objectFit: 'cover', height: '500px', borderRadius: '5px'}}
                />
            </div>
        )
    }
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{marginTop: 56}}>
                <Carousel fade>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={jp}
                            alt="Second slide"
                            style={{objectFit: 'cover', height: '500px'}}
                        />
                        <Carousel.Caption>
                            <h3>Bill Cipher</h3>
                            <p>Famous Brand in our website</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={sfc}
                            alt="Second slide"
                            style={{objectFit: 'cover', height: '500px'}}
                        />
                        <Carousel.Caption>
                            <h3>Bill Gortheia</h3>
                            <p>Famous Brand in our website</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div>
                    <Container style={{marginTop: 56, padding: '0, 12px' }}>
                        <Card>
                            <Row style={{
                                padding: '15px 12px 15px 12px',
                                margin: '0',
                                borderRadius: 10,
                                textAlign: 'justify',
                                backgroundColor: '#f8f9fa'
                                // backgroundColor: '#eaedf0'
                            }}>
                                <h1>About us</h1>
                                <p className="lead">
                                    A laptop e-commerce website serves as a dynamic platform where customers can explore
                                    a wide variety of laptops from different brands, compare features, read reviews, and
                                    make informed purchases from the convenience of their home. Such a website offers an
                                    extensive catalog of laptops, catering to various needs ranging from basic computing
                                    tasks to high-performance gaming, professional software development, and graphic
                                    design. Users can filter their search based on specifications like processor type,
                                    RAM, storage, screen size, and price range, allowing them to find the perfect match
                                    for their requirements. Integrated with secure payment gateways and reliable
                                    shipping services, the website ensures a smooth and safe purchasing experience.
                                    Additionally, it often provides product comparison tools, expert recommendations,
                                    and customer reviews to help users make confident decisions. Through promotional
                                    offers, seasonal sales, and bundle deals, the website becomes a go-to destination
                                    for individuals and businesses looking for cost-effective and cutting-edge computing
                                    solutions. In addition, the platform is equipped with responsive customer support to
                                    assist buyers in selecting the best product, navigating any technical queries, and
                                    ensuring timely delivery, making it a comprehensive solution for all laptop-related
                                    needs.
                                </p>
                                <ul style={{marginLeft: 20}}>
                                    <li>Order</li>
                                    <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                                    <li>Bootstrap's scrollspy feature which highlights which section of the page you're
                                        on in the navbar
                                    </li>
                                    <li>Minimal custom CSS so you are free to explore your own unique design options
                                    </li>
                                </ul>
                                <ImageAbout imageItems={imgItems[2]}/>
                                <h1>Way to see</h1>
                                <p className="lead">
                                    A laptop e-commerce website serves as a dynamic platform where customers can explore
                                    a wide variety of laptops from different brands, compare features, read reviews, and
                                    make informed purchases from the convenience of their home. Such a website offers an
                                    extensive catalog of laptops, catering to various needs ranging from basic computing
                                    tasks to high-performance gaming, professional software development, and graphic
                                    design. Users can filter their search based on specifications like processor type,
                                    RAM, storage, screen size, and price range, allowing them to find the perfect match
                                    for their requirements. Integrated with secure payment gateways and reliable
                                    shipping services, the website ensures a smooth and safe purchasing experience.
                                    Additionally, it often provides product comparison tools, expert recommendations,
                                    and customer reviews to help users make confident decisions. Through promotional
                                    offers, seasonal sales, and bundle deals, the website becomes a go-to destination
                                    for individuals and businesses looking for cost-effective and cutting-edge computing
                                    solutions. In addition, the platform is equipped with responsive customer support to
                                    assist buyers in selecting the best product, navigating any technical queries, and
                                    ensuring timely delivery, making it a comprehensive solution for all laptop-related
                                    needs.
                                </p>
                                <ImageAbout imageItems={imgItems[4]}/>
                                <h1>High Quanlity</h1>
                                <p className="lead">
                                    ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company that was established in 1989. Dedicated to creating products for today’s and tomorrow’s smart life, ASUS is the world’s No. 1 motherboard and gaming brand as well as a top-three consumer notebook vendor.

                                    ASUS became widely known in North America when it revolutionized the PC industry in 2007 with its Eee PC™. Today, the company is pioneering new mobile trends with the ASUS ZenFone™ series, and it is rapidly developing virtual and augmented reality products as well as IOT devices and robotics technologies. Most recently, ASUS introduced Zenbo, a smart home robot designed to provide assistance, entertainment, and companionship to families.

                                    In 2015 and 2016, Fortune magazine recognized ASUS as one of the World’s Most Admired Companies, and for the past four years Interbrand has ranked ASUS Taiwan’s most valuable international brand. The company has more than 17,000 employees, including a world-class R&D team. Driven by innovation and committed to quality, ASUS won 4,385 awards and earned approximately US$13.3 billion in revenue in 2016.
                                </p>
                                <ImageAbout imageItems={imgItems[1]}/>
                                <Dropdown.Divider/>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </div>
        )
    }
}

export default About


