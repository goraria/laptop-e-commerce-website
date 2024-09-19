import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard, faCheck, faTruck, faShieldAlt, faShoppingBag, faMoneyBills, faLaptop, faKeyboard, faMouse
} from '@fortawesome/free-solid-svg-icons';
import {
    Container, Button, Form, ButtonGroup, DropdownButton, Dropdown, Row, Col, Card, Image, Stack, Carousel,
    DropdownItem
} from 'react-bootstrap';
import CustomDropDown from './elements/CustomDropDown'
import './App.css';
import ProductItem from "./elements/ProductItem"
import TransitionBar from './components/TransitionBar';


class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
          <div>
            
          </div>     
        )
    }
}

export default Demo;
