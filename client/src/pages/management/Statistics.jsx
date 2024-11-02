import React, {useEffect, useRef, useState} from "react";
import {Badge, Button, Dropdown, Form, Pagination, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight,
    faAnglesLeft,
    faAnglesRight,
    faEllipsis, faPenToSquare,
    faPlus, faTrash
} from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";

export const Statistics = () => {
    const [data, setData] = useState([
        {
            idaccount: 1,
            iduser: 1,
            bill: [
                {
                    idbill: 1,
                    discount: '10',
                    date: '2024-11-11',
                    bill_details: [
                        {
                            idbill_detail: 1,
                            product: 'M4',
                            price: 1000,
                            configuration: 'Japtor',
                            accessory: 'Nothing',
                            color: 'primary',
                            quantity: 1,
                        },
                        {
                            idbill_detail: 2,
                            product: 'M4 Pro',
                            price: 1001,
                            configuration: 'Goraria',
                            accessory: 'Nothing',
                            color: 'danger',
                            quantity: 2,
                        }
                    ]
                },
                {
                    idbill: 2,
                    discount: '10',
                    date: '2024-11-11',
                    bill_details: [
                        {
                            idbill_detail: 3,
                            product: 'M5',
                            price: 1002,
                            configuration: 'Japtor',
                            accessory: 'Nothing',
                            color: 'primary',
                            quantity: 2,
                        },
                        {
                            idbill_detail: 4,
                            product: 'M5 Max',
                            price: 1003,
                            configuration: 'Goraria',
                            accessory: 'Nothing',
                            color: 'danger',
                            quantity: 1,
                        }
                    ]
                }
            ]
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEntries, setSelectedEntries] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);


    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [showFromCalendar, setShowFromCalendar] = useState(false);
    const [showToCalendar, setShowToCalendar] = useState(false);
    const [error, setError] = useState("");
    const fromCalendarRef = useRef(null);
    const toCalendarRef = useRef(null);

    const handleFromDateClick = () => {
        setShowFromCalendar(!showFromCalendar);
        setShowToCalendar(false);
    };

    const handleToDateClick = () => {
        setShowToCalendar(!showToCalendar);
        setShowFromCalendar(false);
    };

    const onFromDateChange = (date) => {
        if (toDate && date >= toDate) {
            setError("Ngày bắt đầu phải trước ngày kết thúc.");
        } else {
            setError("");
            setFromDate(date);
            setShowFromCalendar(false);
        }
    };

    const onToDateChange = (date) => {
        if (fromDate && date <= fromDate) {
            setError("Ngày kết thúc phải sau ngày bắt đầu.");
        } else {
            setError("");
            setToDate(date);
            setShowToCalendar(false);
        }
    };

    const handleClickOutside = event => {
        if (
            fromCalendarRef.current &&
            !fromCalendarRef.current.contains(event.target) &&
            toCalendarRef.current &&
            !toCalendarRef.current.contains(event.target)
        ) {
            setShowFromCalendar(false);
            setShowToCalendar(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allVisibleItems = filteredData.slice(indexOfFirstItem, indexOfLastItem).map(item => item.id);
            setSelectedEntries(allVisibleItems);
        } else {
            setSelectedEntries([]);
        }
    };

    const handleSelectItem = (id) => {
        if (selectedEntries.includes(id)) {
            setSelectedEntries(selectedEntries.filter(item => item !== id));
        } else {
            setSelectedEntries([...selectedEntries, id]);
        }
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const getInitials = (name) => {
        const initials = name.split(" ").map(n => n[0]).join("");
        return initials;
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const renderPagination = () => {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);

        // Nếu chỉ có 1 trang, không cần hiển thị phân trang
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

        // Thêm nút 'First' và 'Previous'
        paginationItems.push(
            <Pagination.First
                key="first"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
            />,
            <Pagination.Prev
                key="prev"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            />
        );

        if (totalPages <= 7) {
            // Hiển thị tất cả các trang nếu số trang <= 7
            for (let i = 1; i <= totalPages; i++) {
                paginationItems.push(addPageButton(i));
            }
        } else {
            // Hiển thị phân trang với dấu `...`
            if (currentPage <= 4) {
                // Trường hợp trang hiện tại nằm trong khoảng 1 - 4
                for (let i = 1; i <= 5; i++) {
                    paginationItems.push(addPageButton(i));
                }
                paginationItems.push(<Pagination.Ellipsis key="end-ellipsis" />);
                paginationItems.push(addPageButton(totalPages));
            } else if (currentPage >= totalPages - 3) {
                // Trường hợp trang hiện tại nằm trong khoảng cuối (totalPages - 3 đến totalPages)
                paginationItems.push(addPageButton(1));
                paginationItems.push(<Pagination.Ellipsis key="start-ellipsis" />);
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    paginationItems.push(addPageButton(i));
                }
            } else {
                // Trường hợp trang hiện tại ở giữa
                paginationItems.push(addPageButton(1));
                paginationItems.push(<Pagination.Ellipsis key="start-ellipsis" />);
                paginationItems.push(addPageButton(currentPage - 1));
                paginationItems.push(addPageButton(currentPage));
                paginationItems.push(addPageButton(currentPage + 1));
                paginationItems.push(<Pagination.Ellipsis key="end-ellipsis" />);
                paginationItems.push(addPageButton(totalPages));
            }
        }

        // Thêm nút 'Next' và 'Last'
        paginationItems.push(
            <Pagination.Next
                key="next"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            />,
            <Pagination.Last
                key="last"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
            />
        );

        return <Pagination>{paginationItems}</Pagination>;
    };

    const renderStatusBadge = (status) => {
        switch (status) {
            case "Professional":
                return <Badge bg="label-success">Professional</Badge>;
            case "Resigned":
                return <Badge bg="label-warning">Resigned</Badge>;
            case "Current":
                return <Badge bg="label-primary">Current</Badge>;
            case "Applied":
                return <Badge bg="label-info">Applied</Badge>;
            case "Rejected":
                return <Badge bg="label-danger">Rejected</Badge>;
            default:
                return <Badge bg="label-secondary">{status}</Badge>;
        }
    };

    return (
        <div className="card">
            <div className="card-datatable table-responsive">
                <div className="dataTables_wrapper dt-bootstrap5 no-footer">
                    <div className="card-header flex-column flex-md-row pb-0">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="head-label text-center">
                                <h5 className="card-title mb-0">Statistics</h5>
                            </div>
                            <div className="dt-action-buttons text-end pt-6 pt-md-0">
                                <div className="dt-buttons btn-group flex-wrap">
                                    <div style={{position: 'relative'}} ref={toCalendarRef}> {/* Đặt vị trí tương đối */}
                                        <Button variant="outline-primary" className="me-2" onClick={handleFromDateClick} style={{width: 200}}>
                                            From date: {fromDate ? fromDate.toLocaleDateString() : "Select date"}
                                        </Button>
                                        {showFromCalendar && (
                                            <div style={{position: 'absolute', zIndex: 1, top: '100%', left: 0}}>
                                                <Calendar onChange={onFromDateChange} value={fromDate}/>
                                            </div>
                                        )}
                                    </div>
                                    <div style={{position: 'relative'}} ref={toCalendarRef}> {/* Đặt vị trí tương đối */}
                                        <Button variant="outline-primary" onClick={handleToDateClick} style={{width: 200}}>
                                            To date: {toDate ? toDate.toLocaleDateString() : "Select date"}
                                        </Button>
                                        {showToCalendar && (
                                            <div style={{position: 'absolute', zIndex: 1, top: '100%', right: 0}}>
                                                <Calendar onChange={onToDateChange} value={toDate}/>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-6">
                                <div className="dataTables_length">
                                    <label style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
                                        <span>Show</span>
                                        <select
                                            name="DataTables_Table_0_length"
                                            aria-controls="DataTables_Table_0"
                                            className="form-select ms-3 me-3"
                                            style={{width: "80px"}}
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
                            <div
                                className="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-n6 mt-md-0">
                            <Form.Control
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    style={{ width: "295px" }}
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
                        <th>fullname</th>
                        <th>username</th>
                        <th>Order Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
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
                            <td>{item.fullname}</td>
                            <td>{item.username}</td>
                            <td>{item.date}</td>
                            <td>{item.salary}</td>
                            <td>{renderStatusBadge(item.status)}</td>
                            <td>
                                <Button variant="link"><FontAwesomeIcon icon={faPenToSquare}/></Button>
                                <Button variant="link"><FontAwesomeIcon icon={faTrash}/></Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <div className="card-footer flex-column flex-md-row pb-0 pb-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-6" style={{display: "flex"}}>
                            <div className="dataTables_info"
                                 style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
                                <div className="text-center mt-2">
                                    {/* Calculate starting and ending entries */}
                                    {`Showing entries from ${indexOfFirstItem + 1} to ${Math.min(indexOfLastItem, filteredData.length)} of ${filteredData.length} entries`}
                                </div>
                            </div>
                            <div className="ms-2 me-2"></div>
                            <div className="dataTables_select"
                                 style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
                                <div className="text-center mt-2">
                                    Selected {selectedEntries.length} entries
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                            {renderPagination()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};