import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Copyright from './Copyright.jsx';

const menu = [
    {
        "header": "",
        "items": [
            {
                "text": "Dashboard",
                "icon": "bx bx-home",
                "available": true,
                "link": "/admin"
            },
            {
                "text": "Layouts",
                "icon": "bx bx-layout",
                "available": true,
                "link": "/admin/ui",
                "submenu": [
                    {
                        "text": "Without menu",
                        "available": true,
                        "link": "/admin/layout/without-menu"
                    },
                    {
                        "text": "Without navbar",
                        "available": true,
                        "link": "/admin/layout/without-navbar"
                    },
                    {
                        "text": "Container",
                        "available": true,
                        "link": "/admin/layout/container"
                    },
                    {
                        "text": "Fluid",
                        "available": true,
                        "link": "/admin/layout/fluid"
                    },
                    {
                        "text": "Blank",
                        "available": true,
                        "link": "/admin/layout/blank"
                    }
                ]
            }
        ]
    },
    {
        "header": "MANAGEMENTS",
        "items": [
            {
                "text": "Account Setting",
                "icon": "bx bx-user",
                "available": true,
                "link": "/admin/profile"
            },
            {
                "text": "User Management",
                "icon": "bx bx-layout",
                "available": true,
                "link": "/admin/users"
            },
            {
                "text": "Category",
                "icon": "bx bx-category",
                "available": true,
                "link": "/admin/categories"
            },
            {
                "text": "Product",
                "icon": "bx bx-layer",
                "available": true,
                "link": "/admin/product",
                "submenu": [
                    {
                        "text": "Name",
                        "available": true,
                        "link": "/admin/product/name"
                    },
                    {
                        "text": "Accessory",
                        "available": true,
                        "link": "/admin/product/accessory"
                    },
                    {
                        "text": "Configuration",
                        "available": true,
                        "link": "/admin/product/configurarion"
                    },
                    {
                        "text": "Color",
                        "available": true,
                        "link": "/admin/product/color"
                    },
                    {
                        "text": "Description",
                        "available": true,
                        "link": "/admin/product/description"
                    }
                ]
            },
            {
                "text": "Tables",
                "icon": "bx bx-table",
                "available": true,
                "link": "/admin/tables"
            }
        ]
    },
    {
        "header": "AUTHORS",
        "items": [
            {
                "text": "Japtor",
                "icon": "bx bx-support",
                "available": true,
                "link": "https://github.com/goraria"
            },
            {
                "text": "Payhd",
                "icon": "bx bx-support",
                "available": true,
                "link": "https://github.com/pa106"
            },
            {
                "text": "Locst",
                "icon": "bx bx-support",
                "available": true,
                "link": "https://github.com/LocPhamn"
            },
            {
                "text": "Zamcha",
                "icon": "bx bx-support",
                "available": true,
                "link": "https://github.com/zamcha"
            },
            {
                "text": "Goraria",
                "icon": "bx bx-file",
                "available": true,
                "link": "#"
            },
            {
                "text": "Ichibulup",
                "icon": "bx bx-file",
                "available": true,
                "link": "#"
            },
            {
                "text": "Schweitzenburg",
                "icon": "bx bx-file",
                "available": true,
                "link": "#"
            },
            {
                "text": "Braunschweig",
                "icon": "bx bx-file",
                "available": true,
                "link": "#"
            }
        ]
    }
]

const Layout = ({ children, role }) => {
    useEffect(() => {
        Main();
    },[])
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar menu={menu} source={"/admin"}/>
                <div className="layout-page">
                    <Navbar />
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">
                            {children}
                        </div>
                        <Copyright />
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </div>
    );
};

export default Layout;
