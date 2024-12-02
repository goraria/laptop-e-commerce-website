import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Activitybar from "./Activitybar.jsx";
import Navbar from './Navbar';
import Copyright from './Copyright.jsx';
import {faGift, faHistory, faMapPin, faUser} from "@fortawesome/free-solid-svg-icons";

const menu = [
    {
        "header": "",
        "items": [
            {
                "text": "Dashboard",
                "icon": "bx bx-home",
                "available": true,
                "link": "/user"
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
        "header": "INFORMATION",
        "items": [
            {
                "text": "Account Information",
                "icon": "bx bx-user",
                "available": true,
                "link": "/user/profile"
            },
            {
                "text": "Order History",
                "icon": "bx bx-receipt",
                "available": true,
                "link": "/user/bill"
            },
            {
                "text": "Voucher Wallet",
                "icon": "bx bxs-discount",
                "available": true,
                "link": "/user/voucher"
            },
            {
                "text": "Address Management",
                "icon": "bx bx-location-plus",
                "available": true,
                "link": "/user/address"
            },
            {
                "text": "Rating History",
                "icon": "bx bx-purchase-tag",
                "available": true,
                "link": "/user/rating"
            },
            {
                "text": "FAQ",
                "icon": "bx bx-help-circle",
                "available": true,
                "link": "/faq"
            }
        ]
    }
]

const Panel = ({ children, role }) => {
    useEffect(() => {
        Main();
    },[])
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar menu={menu} source={"/"}/>
                <div className="layout-page">
                    <Activitybar />
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

export default Panel;
