import { Component } from "react";
import {
  Container, Button, Form, ButtonGroup, DropdownButton, Dropdown, Row, Col, Card, Image, Stack, Carousel, ListGroup

} from 'react-bootstrap';

const imageList = [
  { id: 1, src: 'https://via.placeholder.com/300x200', alt: 'Image 1' },
  { id: 2, src: 'https://via.placeholder.com/300x200', alt: 'Image 2' },
  { id: 3, src: 'https://via.placeholder.com/300x200', alt: 'Image 3' },
  { id: 4, src: 'https://via.placeholder.com/300x200', alt: 'Image 4' },
  { id: 5, src: 'https://via.placeholder.com/300x200', alt: 'Image 5' },
];

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <Container style={{marginTop:112}}>
        <Row>
          <Col sm={12} md={6} lg={8} style={{ alignItems: 'center' }}>
            <div style={{ display: "flex", marginBottom: 16, justifyContent: 'center' }}>
              <Image
                className="d-block"
                src='https://via.placeholder.com/500x400'
                alt="Second slide"
                style={{ objectFit: 'cover', width: 224, height: 224, borderRadius: '5px' }}
              />
            </div>
            <Card className="my-3 p-3">
              <Card.Body>
                {/* Section: Cấu hình đặc điểm */}
                <Card.Title>Cấu hình đặc điểm</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col md={4}><strong>Loại switch:</strong></Col>
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

                {/* Section: Sẵn hàng & Trung bày */}
                <Card.Title className="mt-4">Sẵn hàng & Trung bày</Card.Title>
                <Button variant="link" className="p-0">1 chi nhánh</Button>

                {/* Section: Vận chuyển */}
                <Card.Title className="mt-4">Vận chuyển</Card.Title>
                <Button variant="link" className="p-0">Miễn phí HN, TP HCM</Button>

                {/* Section: Bảo hành & đổi trả */}
                <Card.Title className="mt-4">Bảo hành & đổi trả</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Bảo hành <strong>12 tháng</strong> tại chuỗi cửa hàng</ListGroup.Item>
                  <ListGroup.Item>Đổi mới trong 15 ngày đầu tiên</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="my-3 p-3">
              <Card.Body>
                {/* Section: Cấu hình đặc điểm */}
                <Card.Title>Cấu hình đặc điểm</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col md={4}><strong>Loại switch:</strong></Col>
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

                {/* Section: Sẵn hàng & Trung bày */}
                <Card.Title className="mt-4">Sẵn hàng & Trung bày</Card.Title>
                <Button variant="link" className="p-0">1 chi nhánh</Button>

                {/* Section: Vận chuyển */}
                <Card.Title className="mt-4">Vận chuyển</Card.Title>
                <Button variant="link" className="p-0">Miễn phí HN, TP HCM</Button>

                {/* Section: Bảo hành & đổi trả */}
                <Card.Title className="mt-4">Bảo hành & đổi trả</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Bảo hành <strong>12 tháng</strong> tại chuỗi cửa hàng</ListGroup.Item>
                  <ListGroup.Item>Đổi mới trong 15 ngày đầu tiên</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Product