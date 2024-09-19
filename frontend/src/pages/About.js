import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel, Image} from "react-bootstrap";

import jp from '../resources/images/jp.jpeg'
import sfc from '../resources/images/sfc.jpeg'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Carousel style={{marginTop: 56}} fade>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={jp}
                            alt="Second slide"
                            style={{ objectFit: 'cover', height: '500px' }}
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
                            style={{ objectFit: 'cover', height: '500px' }}
                        />
                        <Carousel.Caption>
                            <h3>Bill Gortheia</h3>
                            <p>Famous Brand in our website</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <section id="about" style={{marginTop: 56}}>
                    <div className="container px-4">
                        <div className="row gx-4 justify-content-center">
                            <div className="col-lg-8">
                                <h2>About us</h2>
                                <p className="lead">
                                    A laptop e-commerce website serves as a dynamic platform where customers can explore a wide variety of laptops from different brands, compare features, read reviews, and make informed purchases from the convenience of their home. Such a website offers an extensive catalog of laptops, catering to various needs ranging from basic computing tasks to high-performance gaming, professional software development, and graphic design. Users can filter their search based on specifications like processor type, RAM, storage, screen size, and price range, allowing them to find the perfect match for their requirements. Integrated with secure payment gateways and reliable shipping services, the website ensures a smooth and safe purchasing experience. Additionally, it often provides product comparison tools, expert recommendations, and customer reviews to help users make confident decisions. Through promotional offers, seasonal sales, and bundle deals, the website becomes a go-to destination for individuals and businesses looking for cost-effective and cutting-edge computing solutions. In addition, the platform is equipped with responsive customer support to assist buyers in selecting the best product, navigating any technical queries, and ensuring timely delivery, making it a comprehensive solution for all laptop-related needs.
                                </p>
                                <ul>
                                    <li>Order</li>
                                    <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                                    <li>Bootstrap's scrollspy feature which highlights which section of the page you're
                                        on in the navbar
                                    </li>
                                    <li>Minimal custom CSS so you are free to explore your own unique design options
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About


