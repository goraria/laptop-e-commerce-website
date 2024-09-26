import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
    Carousel, Container, Dropdown, Image, Row
} from "react-bootstrap";
import React from 'react';
import { Link } from 'react-router-dom';

const Administrator = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/admin/users" className="nav-link">Quản lý người dùng</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/products" className="nav-link">Quản lý sản phẩm</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

// let Administrator = () => {

// }

export default Administrator

// sửa role người dùng, thêm sửa xóa sản phẩm, 