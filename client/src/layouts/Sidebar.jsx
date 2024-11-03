import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
// import menuData from '../data/menuData.json'

const menuData = [
    {
        "header": "",
        "items": [
            {
                "text": "Dashboard",
                "icon": "bx bx-home",
                "available": true,
                "link": "/admin/"
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

const Sidebar = () => {
    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <Link aria-label='Navigate to sneat homepage' to="/" className="app-brand-link">
                    {/* <span className="app-brand-logo demo">
                        <img src="/assets/img/sneat.svg" alt="sneat-logo" aria-label='Sneat logo image' />
                    </span>
                    <span className="app-brand-text demo menu-text fw-bold ms-2">Bill Cipher</span> */}
                    <span className="app-brand-text demo menu-text fw-bold ms-2" style={{textTransform: 'capitalize'}}>Bill Cipher</span>
                </Link>

                <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                {menuData.map((section) => (
                    <React.Fragment key={section.header}>
                        {section.header && (
                            <li className="menu-header small text-uppercase">
                                <span className="menu-header-text">{section.header}</span>
                            </li>
                        )}
                        {section.items.map(MenuItem)}
                    </React.Fragment>
                ))}
            </ul>
        </aside>
    );
};

const MenuItem = (item, index) => {
    const location = useLocation();
    const isActive = location.pathname === item.link;
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isSubmenuActive = hasSubmenu && item.submenu.some(subitem => location.pathname === subitem.link);

    return (
        <li key={index} className={`menu-item ${isActive || isSubmenuActive ? 'active' : ''} ${hasSubmenu && isSubmenuActive ? 'open' : ''}`}>
            <NavLink
                aria-label={`Navigate to ${item.text} ${!item.available ? 'Pro' : ''}`}
                to={item.link}
                className={`menu-link ${item.submenu ? 'menu-toggle' : ''}`}
                target={item.link.includes('http') ? '_blank' : undefined}
            >
                <i className={`menu-icon tf-icons ${item.icon}`}></i>
                <div>{item.text}</div> {item.available === false && (
                <div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
            )}
            </NavLink>
            {item.submenu && (
                <ul className="menu-sub">{item.submenu.map((subitem, subindex) => MenuItem(subitem, subindex))}</ul>
            )}
        </li>
    );
};

const MenuItem0 = (item) => {
    const location = useLocation();
    const isActive = location.pathname === item.link;
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isSubmenuActive = hasSubmenu && item.submenu.some(subitem => location.pathname === subitem.link);

    return (
        <li className={`menu-item ${isActive || isSubmenuActive ? 'active' : ''} ${hasSubmenu && isSubmenuActive ? 'open' : ''}`}>
            <NavLink
                aria-label={`Navigate to ${item.text} ${!item.available ? 'Pro' : ''}`}
                to={item.link}
                className={`menu-link ${item.submenu ? 'menu-toggle' : ''}`}
                target={item.link.includes('http') ? '_blank' : undefined}
            >
                <i className={`menu-icon tf-icons ${item.icon}`}></i>
                <div>{item.text}</div> {item.available === false && (
                    <div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                )}
            </NavLink>
            {item.submenu && (
                <ul className="menu-sub">{item.submenu.map(MenuItem)}</ul> /** need key */
            )}
        </li>
    );
};

export default Sidebar;