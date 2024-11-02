import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";

const CustomDropDown = ({ category, onSelect }) => {

    return (
        <DropdownButton
            as={ButtonGroup}
            key={category.categorical}
            id={`dropdown-variants-${category.categorical}`}
            variant={category.varient}
            title={category.categorical}
            // style={{ margin: '0px 16px 16px 0px' }}
            className="me-3"
        >
            {category.item.map((product, index) => (
                <Dropdown.Item 
                    eventKey={index} 
                    key={index} 
                    onClick={() => onSelect(category.categorical, product)}
                >
                    {product}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

export default CustomDropDown;
