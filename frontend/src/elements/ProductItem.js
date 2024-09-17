import { Component } from "react";
import {
    Button, Card, Dropdown, DropdownButton, ButtonGroup
} from "react-bootstrap";

const obj_test = {
    name: "Product 1",
    price: "5$",
    decription: "scipt",
    image: "src"
}

class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const { obj } = this.props; 
        return (
            <Card >
                <Card.Img variant="top" src={obj.image} />
                <Card.Body>
                    <Card.Title>{obj.name}</Card.Title>
                    <Card.Text> {obj.description} </Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>${obj.price}</span>
                        <Button variant="danger" style={{ float: 'right' }}>Buy now</Button>
                    </div>
                </Card.Body>
            </Card>
        );
    }

}
export default ProductItem;