import {
    Button, Card, Dropdown, DropdownButton, ButtonGroup
} from "react-bootstrap";
function CustomDropDown(category) {
    return (
        <DropdownButton
            as={ButtonGroup}
            key={category.categorical}
            id={`dropdown-variants-${category.categorical}`}
            variant={category.varient}
            title={category.categorical}
        >
            {category.item.map(
                (product) => (
                    <Dropdown.Item eventKey="1">{product}</Dropdown.Item>
                )
            )}
            
    {/** */}
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
        

    );
}
export default CustomDropDown;
