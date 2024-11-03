import React, { useEffect, useState } from "react";
import { Table, Button, Form, Pagination, Dropdown, Badge } from "react-bootstrap";
import {
    faPenToSquare,
    faPlus,
    faTrash,
    faAngleLeft,
    faAngleRight,
    faAnglesLeft,
    faAnglesRight,
    faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import {
    faAddressBook
} from "@fortawesome/free-regular-svg-icons";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./DataTables.css"; // Add custom styling here
import { CategoryForm } from "../modal/form/CategoryForm";
export const CategoryDataTables = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([])
    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:5172/admin/get-category")
        console.log(response.data)
        setData(response.data)
    };
    const handleEdit = (idcategory) => {
        // Tìm user theo ID
        console.log(idcategory)
        const categoryToEdit = data.find(product => product.idcategory === idcategory);
        console.log(categoryToEdit)
        if (categoryToEdit) {
            setSelectedCategory(categoryToEdit); // Lưu thông tin user vào state `selectedUser`
            setModalShow(true); // Hiển thị modal để chỉnh sửa thông tin
        }
    };
    const handleModalClose = () => {
        fetchAPI();
        setModalShow(false);
        setSelectedCategory(null);
    };

    const handleDelete = async (id) => {
        try {

            // Send delete request to the server
            await axios.delete(`http://localhost:5172/admin/delete-category/${id}`);

            // Optionally, fetch the updated data again
            fetchAPI();
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    };

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEntries, setSelectedEntries] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allVisibleItems = filteredData.slice(indexOfFirstItem, indexOfLastItem).map(item => item.idcategory);
            setSelectedEntries(allVisibleItems);
        } else {
            setSelectedEntries([]);
        }
    };
    const handleSelectItem = (idcategory) => {
        if (selectedEntries.includes(idcategory)) {
            setSelectedEntries(selectedEntries.filter(item => item !== idcategory));
        } else {
            setSelectedEntries([...selectedEntries, idcategory]);
        }
    };

    const filteredData = data.filter(item =>
        item.category_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const getInitials = (name) => {
        const initials = name.split(" ").map(n => n[0]).join("");
        return initials;
    };
    // const getInitials = (firstname, lastname) => {
    //     return (firstname + lastname);
    // };
    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const renderPagination = () => {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);

        if (totalPages <= 1) return null;

        const paginationItems = [];
        const addPageButton = (pageNumber) => (
            <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => setCurrentPage(pageNumber)}
            >
                {pageNumber}
            </Pagination.Item>
        );

        // Thêm nút 'First' và 'Previous' với Font Awesome icons
        paginationItems.push(
            <Pagination.First
                key="first"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faAnglesLeft} /> {/* << */}
            </Pagination.First>,

            <Pagination.Prev
                key="prev"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faAngleLeft} /> {/* < */}
            </Pagination.Prev>
        );

        // Nếu đang ở các trang đầu (1-3), hiển thị 5 trang đầu và trang cuối cùng
        if (currentPage <= 3) {
            for (let i = 1; i <= Math.min(5, totalPages); i++) {
                paginationItems.push(addPageButton(i));
            }
            if (totalPages > 5) {
                paginationItems.push(<Pagination.Ellipsis key="end-ellipsis" disabled>
                    <FontAwesomeIcon icon={faEllipsis} /> {/* ... */}
                </Pagination.Ellipsis>);
                paginationItems.push(addPageButton(totalPages));
            }
        }
        // Nếu đang ở các trang cuối (từ totalPages - 2 trở lên), hiển thị 5 trang cuối và trang đầu tiên
        else if (currentPage >= totalPages - 2) {
            paginationItems.push(addPageButton(1));
            paginationItems.push(<Pagination.Ellipsis key="start-ellipsis" disabled>
                <FontAwesomeIcon icon={faEllipsis} /> {/* ... */}
            </Pagination.Ellipsis>);
            for (let i = totalPages - 4; i <= totalPages; i++) {
                paginationItems.push(addPageButton(i));
            }
        }
        // Nếu đang ở giữa (trang 4 đến totalPages - 3), hiển thị trang đầu, ... trang hiện tại, và dấu ... cuối
        else {
            paginationItems.push(addPageButton(1)); // Trang đầu tiên
            paginationItems.push(<Pagination.Ellipsis key="start-ellipsis" disabled>
                <FontAwesomeIcon icon={faEllipsis} /> {/* ... */}
            </Pagination.Ellipsis>);

            const startPage = currentPage - 1; // Trang trước
            const endPage = currentPage + 1;   // Trang sau

            for (let i = startPage; i <= endPage; i++) {
                paginationItems.push(addPageButton(i));
            }

            paginationItems.push(<Pagination.Ellipsis key="end-ellipsis" disabled>
                <FontAwesomeIcon icon={faEllipsis} /> {/* ... */}
            </Pagination.Ellipsis>);
            paginationItems.push(addPageButton(totalPages)); // Trang cuối cùng
        }

        // Thêm nút 'Next' và 'Last' với Font Awesome icons
        paginationItems.push(
            <Pagination.Next
                key="next"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}>
                <FontAwesomeIcon icon={faAngleRight} /> {/* > */}
            </Pagination.Next>,

            <Pagination.Last
                key="last"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}>
                <FontAwesomeIcon icon={faAnglesRight} /> {/* >> */}
            </Pagination.Last>
        );

        return <Pagination style={{ margin: 0 }}>{paginationItems}</Pagination>;
    };
    useEffect(() => {
        fetchAPI();
        // fetchAPI1();
    }, []);

    return (
        <div className="card">
            <div className="card-datatable table-responsive">
                <div className="dataTables_wrapper dt-bootstrap5 no-footer">
                    <div className="card-header flex-column flex-md-row pb-0">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="head-label text-center">
                                <h5 className="card-title mb-0">Category DataTable</h5>
                            </div>
                            <div className="dt-action-buttons text-end pt-6 pt-md-0">
                                <div className="dt-buttons btn-group flex-wrap">
                                    <div>
                                        <Button variant="primary" type="button" className="btn btn-secondary create-new btn-primary" style={{ display: "flex", textAlign: "center" }} onClick={() => setModalShow(true)}>
                                            <FontAwesomeIcon icon={faPlus} style={{ marginRight: 10 }} />
                                            Add New Record
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-6">
                                <div className="dataTables_length">
                                    <label style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                                        <span>Show</span>
                                        <select
                                            name="DataTables_Table_0_length"
                                            aria-controls="DataTables_Table_0"
                                            className="form-select ms-3 me-3"
                                            style={{ width: "80px" }}
                                            onChange={handleItemsPerPageChange}
                                            value={itemsPerPage}
                                        >
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                        </select>
                                        <span>entries</span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-n6 mt-md-0">
                                {/* <div className="datatable-controls">
                            </div> */}
                                <Form.Control
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    style={{ width: "290px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Table striped bordered hover responsive className="datatable">
                    <thead>
                        <tr>
                            <th>
                                <Form.Check
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={selectedEntries.length === currentItems.length && currentItems.length > 0}
                                />
                            </th>
                            <th>Category Name</th>
                            <th>Action</th>
                            {/* <th>Email</th> */}
                            {/* <th>Role</th> */}
                            {/* <th>Phone Number</th>
                            <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={selectedEntries.includes(item.id)}
                                        onChange={() => handleSelectItem(item.id)}
                                    />
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-circle me-2">

                                        </div>
                                        <div>
                                            {item.category_name}
                                        </div>
                                    </div>
                                </td>
                                {/* <td>{item.brand}</td> */}
                                {/* <td>{item.product_name}</td> */}
                                {/* <td> {item.role === 1 ? "Admin" : item.role === 0 ? "User" : "Unknown Role"}</td>
                                <td>{item.phone_number}</td> */}
                                <td>
                                    <Button variant="link" onClick={() => handleEdit(item.idcategory)} style={{ marginLeft: 'auto' }}><FontAwesomeIcon icon={faPenToSquare} /></Button>
                                    <Button variant="link" onClick={() => handleDelete(item.idcategory)} style={{ marginLeft: 'auto' }}><FontAwesomeIcon icon={faTrash} /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="card-footer flex-column flex-md-row pb-0 pb-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-6" style={{ display: "flex" }}>
                            <div className="dataTables_info" style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                                <div className="text-center mt-2">
                                    Showing {currentItems.length} of {filteredData.length} entries
                                </div>
                            </div>
                            <div className="ms-2 me-2"></div>
                            <div className="dataTables_select" style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                                <div className="text-center mt-2">
                                    Selected {selectedEntries.length} entries
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                            {renderPagination()}
                        </div>
                        <CategoryForm
                            show={modalShow}
                            // onHide={() => setModalShow(false)}
                            onHide={handleModalClose}
                            onReload='a'
                            category={selectedCategory}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};
