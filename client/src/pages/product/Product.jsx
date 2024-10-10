import { Component, version } from "react";
import {
  Container, Button, Form, ButtonGroup, DropdownButton, Dropdown, Row, Col, Card, Image, Stack, Carousel, ListGroup, Badge,
  CardTitle,
  CardText

} from 'react-bootstrap';
import ProductItem from "../../components/product/ProductItem.jsx";
import TransitionBar from "../../layouts/TransitionBar.jsx";
import { config } from "@fortawesome/fontawesome-svg-core";

const imageList = [
  { id: 1, src: 'https://via.placeholder.com/300x200', alt: 'Image 1' },
  { id: 2, src: 'https://via.placeholder.com/300x200', alt: 'Image 2' },
  { id: 3, src: 'https://via.placeholder.com/300x200', alt: 'Image 3' },
  { id: 4, src: 'https://via.placeholder.com/300x200', alt: 'Image 4' },
  { id: 5, src: 'https://via.placeholder.com/300x200', alt: 'Image 5' },
];
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

const Items = [
  {
    id: 1,
    products_name: 'Lenovo ThinkPad X1 Carbon Gen 8',
    brand: 'Lenovo',
    category: 'laptop',
    configuation: [
      {
        idconfiguration: 1,
        cpu: 'AMD Ryzen 7',
        ram: '16GB',
        gpu: null,
        storage: '512 SSD',
        screen: '15 inch',
        resolution: '1920x1080',
        price: 999
      },

    ],
    rating: [
        {
          score:5,
          comment:'ok'
        }

    ],
    description: {
      title_description: "Laptop",
      sub_description: "ngon bổ rẻ",
      img_description: "ảnh laptop"
    },
    color: ['black', 'silver'],
    
  }
]



class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <Container style={{ margin: '168px auto 56px auto' }}>
        <TransitionBar />
        <Row>
          <Col sm={12} md={8} lg={8} style={{ alignItems: 'center' }}>
            <div style={{ display: "flex", marginBottom: 24, justifyContent: 'center' }}>
              <Image
                className="d-block"
                src='https://cdn.tgdd.vn/Products/Images/44/325242/Slider/dell-inspiron-15-3520-i5-1235u-16gb-512gb-120hz-officehs-win11-n5i5052w1638557748484267591.jpg'
                alt="Second slide"
                style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '5px' }}
              />
            </div>
            <Card className="my-3 p-3" style={{ border: 'none', backgroundColor: '#f8f9fa' }}>
              <Card.Body>
                {/* Section: Cấu hình đặc điểm */}
                <Card.Title>Cấu hình đặc điểm</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col md={4}><strong>Loại CPU:</strong></Col>
                      <Col md={8}>AKKO cream yellow pro</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={4}><strong>Kết nối qua:</strong></Col>
                      <Col md={8}>Bluetooth/Wireless/USB C</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={4}><strong>Loại kết nối:</strong></Col>
                      <Col md={8}>Không Dây/Có dây, Bluetooth/Wireless/USB C</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={4}><strong>Chất liệu khung:</strong></Col>
                      <Col md={8}>Nhôm</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={4}><strong>Số nút bấm:</strong></Col>
                      <Col md={8}>82 Nút</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={4}><strong>Loại bàn phím:</strong></Col>
                      <Col md={8}>Phím cơ Custom</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={4}><strong>Layout:</strong></Col>
                      <Col md={8}>75%</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={4}><strong>Tương thích:</strong></Col>
                      <Col md={8}>Windows/MacOS</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="link" className="p-0">Xem cấu hình chi tiết</Button>
              </Card.Body>
            </Card>

            <Card className="my-3 p-3" style={{ border: 'none', backgroundColor: '#f8f9fa' }}>
              <Card.Body>
                <Row className="mt-4">
                  <Col>
                    <h5>Bảo hành & đổi trả</h5>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Bảo hành <strong>12 tháng tại chuỗi cửa hàng</strong></ListGroup.Item>
                      <ListGroup.Item>Đổi mới trong 15 ngày đầu tiên</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="my-3 p-3" style={{ border: 'none', backgroundColor: '#f8f9fa' }}>
              <Card.Body>
                {/* Section: Cấu hình đặc điểm */}
                <Card.Title> Mô tả sản phẩm</Card.Title>
                <div style={{ display: "flex", marginBottom: 24, justifyContent: 'center' }}>
                  <Image
                    className="d-block"
                    src='https://cdn.tgdd.vn/Products/Images/44/325242/Slider/dell-inspiron-15-3520-i5-1235u-16gb-512gb-120hz-officehs-win11-n5i5052w1638557748484267591.jpg'
                    alt="Second slide"
                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '5px' }}
                  />
                </div>
                <div>
                  <p>
                    Laptop Asus Vivobook 15 X1504ZA-NJ517W thuộc dòng laptop Asus Vivobook
                    với giá thành phải chăng nhưng hiệu năng lại cực kỳ ấn tượng.
                    Vi xử lý Intel Core i5 1235U cùng với 16GB RAM và ổ cứng SSD
                    512GB đem đến sức mạnh phần cứng đáng kinh ngạc để xử lý mượt
                    mà không chỉ tác vụ văn phòng mà còn có tác vụ đồ họa và chơi game eSports thoải mái.
                  </p>
                  <h4>
                    Thiết kế thời thượng, thuận tiện di chuyển
                  </h4>
                  <p>
                    Giống như những laptop Asus Vivobook khác, chiếc laptop này cũng sở hữu
                    thiết kế đơn giản với gam màu bạc tinh tế, thanh lịch. Asus đã rất nỗ lực
                    để tối ưu độ mỏng chỉ còn 17.9mm và trọng lượng khoảng 1.7kg để thuận tiện
                    cho việc di chuyển. Nhờ đó, sinh viên và dân văn phòng có thể mang theo máy
                    đi học, đi làm mỗi ngày chỉ cần một chiếc balo hoặc túi xách, không hề cồng kềnh hay nặng nề.

                  </p>
                </div>
                <div style={{ display: "flex", marginBottom: 24, justifyContent: 'center' }}>
                  <Image
                    className="d-block"
                    src='https://cdn.tgdd.vn/Products/Images/44/325242/Slider/dell-inspiron-15-3520-i5-1235u-16gb-512gb-120hz-officehs-win11-n5i5052w1638557748484267591.jpg'
                    alt="Second slide"
                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '5px' }}
                  />
                </div>


              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <Card className=" p-3" style={{ border: 'none', backgroundColor: '#f8f9fa', position: 'sticky', top: 136 }}>
              <Container>
                {/* Product Title */}
                <Row className="mt-4">
                  <Col>
                    <h2>Lenovo ThinkPad X1 Carbon Gen 8</h2>
                    <p>Chưa có đánh giá</p>
                  </Col>
                </Row>

                {/* Product Options */}
                <Row className="mt-3">
                  <Col>
                    <h5>Phiên bản</h5>
                    <Form>
                      {/* Version Options */}
                      <div className="mb-3">
                        <Form.Check
                          type="radio"
                          label="i7 10610U, 16GB, 512GB, FHD"
                          name="version"
                          id="version1"
                        />
                        <Form.Check
                          type="radio"
                          label="i7 10610U, 16GB, 256GB, FHD"
                          name="version"
                          id="version2"
                          defaultChecked
                        />
                        <Form.Check
                          type="radio"
                          label="i5 10310U, 16GB, 256GB, FHD+"
                          name="version"
                          id="version3"
                        />
                      </div>

                      {/* Color Selection */}
                      <h5>Màu</h5>
                      <Button variant="dark" className="mb-3">Black</Button>


                    </Form>
                  </Col>
                </Row>

                {/* Price Section */}
                <Row className="mt-4">
                  <Col>
                    <h3 className="text-danger">13.190.000</h3>
                    <h6 className="text-muted">
                      <del>24.790.000</del> <span className="text-danger">-47%</span>
                    </h6>
                  </Col>
                </Row>

                {/* Action Buttons */}
                <Row className="mt-3">
                  <Col sm={12} md={6} lg={6} className="mb-3">
                    <Button variant="outline-danger" className="me-2" style={{ width: '100%' }}>Thêm vào giỏ</Button>
                  </Col>
                  <Col sm={12} md={3} lg={6} className="mb-3">
                    <Button variant="danger" style={{ width: '100%' }}>Mua ngay</Button>
                  </Col>
                </Row>

                <h5>Đánh giá sản phẩm</h5>
                <Button variant="primary" className="mb-3" style={{ width: '100%' }}>Đánh giá</Button>

              </Container>
            </Card>


            {/* <Container>
              <Row className="my-4">
                <Col>
                  <h2>Laptop Asus Vivobook 15 X1504ZA-N J517W i5-1235U/16GB/512GB/15.6" FHD/Win11</h2>
                  <p><strong>Product No: 00908399</strong></p>
                </Col>
              </Row>

              Pricing Section
              <Row>
                <Col>
                  <Card>
                    <Card.Body>
                      <h4>Price: 14,690,000 ₫</h4>
                      <p className="text-muted"><del>16,490,000 ₫</del> (11% Off)</p>
                      <p>Installment Price: 791,000 ₫ / month</p>
                      <p>Reward Points: +3,672 Points</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              Promotion Section
              <Row className="my-4">
                <Col>
                  <h5>Select a Promotion:</h5>
                  <Form>
                    <Form.Check
                      type="radio"
                      label="Promotion 1: 1,800,000 ₫ off (valid until 26/09)"
                      name="promoOptions"
                      value="promo1"
                      checked
                      onChange
                    />
                    <Form.Check
                      type="radio"
                      label="Promotion 2: 1,300,000 ₫ off + Installment Option"
                      name="promoOptions"
                      value="promo2"
                      checked
                      onChange
                    />
                  </Form>
                </Col>
              </Row>

              Student Discount Section
              <Row className="my-4">
                <Col>
                  <Card>
                    <Card.Body>
                      <h5>Special Student Discount</h5>
                      <p>Get an additional 10% off (1,649,000 ₫)</p>
                      <Button variant="danger">Verify Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container> */}
          </Col>
        </Row>
        <Row>
          <div>
            <h4>Sản phẩm tương tự</h4>

            <Row>
              {products.map(product =>
                <Col key={product.id} sm={12} md={6} lg={3} className="mb-3">
                  <ProductItem obj={product} />
                </Col>
              )}
            </Row>
          </div>
        </Row>
      </Container>
    )
  }
}

export default Product