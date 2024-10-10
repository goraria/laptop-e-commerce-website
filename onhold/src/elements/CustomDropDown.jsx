import { Component } from "react";
import {
    Button, Card, Dropdown, DropdownButton, ButtonGroup
} from "react-bootstrap";


class CustomDropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render(){
        const { category } = this.props;
        return (
        
        <DropdownButton
            as={ButtonGroup}
            key={category.categorical}
            id={`dropdown-variants-${category.categorical}`}
            variant={category.varient}
            title={category.categorical}
            style={{marginRight: 16}}
        >
            {category.item.map(
                (product,index) => (
                    <Dropdown.Item eventKey="1" key={index}>{product}</Dropdown.Item>
                )
            )}
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
        

    )}
    
}
export default CustomDropDown;
