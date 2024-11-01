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
        { "id": 1, "name": "Alice Johnson", "email": "alice.johnson@example.com", "date": "01/01/2020", "salary": "$50000", "status": "Professional" },
        { "id": 2, "name": "Bob Smith", "email": "bob.smith@example.com", "date": "02/02/2020", "salary": "$60000", "status": "Applied" },
        { "id": 3, "name": "Cathy Brown", "email": "cathy.brown@example.com", "date": "03/03/2020", "salary": "$55000", "status": "Current" },
        { "id": 4, "name": "David Wilson", "email": "david.wilson@example.com", "date": "04/04/2020", "salary": "$45000", "status": "Active" },
        { "id": 5, "name": "Eva Green", "email": "eva.green@example.com", "date": "05/05/2020", "salary": "$70000", "status": "Active" },
        { "id": 6, "name": "Frank Moore", "email": "frank.moore@example.com", "date": "06/06/2020", "salary": "$52000", "status": "Resigned" },
        { "id": 7, "name": "Grace Lee", "email": "grace.lee@example.com", "date": "07/07/2020", "salary": "$48000", "status": "Applied" },
        { "id": 8, "name": "Hank Taylor", "email": "hank.taylor@example.com", "date": "08/08/2020", "salary": "$56000", "status": "Rejected" },
        { "id": 9, "name": "Ivy Anderson", "email": "ivy.anderson@example.com", "date": "09/09/2020", "salary": "$59000", "status": "Resigned" },
        { "id": 10, "name": "Jack Thomas", "email": "jack.thomas@example.com", "date": "10/10/2020", "salary": "$65000", "status": "Applied" },
        { "id": 11, "name": "Kathy Robinson", "email": "kathy.robinson@example.com", "date": "11/11/2020", "salary": "$57000", "status": "Active" },
        { "id": 12, "name": "Leo Clark", "email": "leo.clark@example.com", "date": "12/12/2020", "salary": "$62000", "status": "Professional" },
        { "id": 13, "name": "Mia Lewis", "email": "mia.lewis@example.com", "date": "01/13/2021", "salary": "$53000", "status": "Current" },
        { "id": 14, "name": "Noah Walker", "email": "noah.walker@example.com", "date": "02/14/2021", "salary": "$58000", "status": "Active" },
        { "id": 15, "name": "Olivia Hall", "email": "olivia.hall@example.com", "date": "03/15/2021", "salary": "$61000", "status": "Resigned" },
        { "id": 16, "name": "Paul Allen", "email": "paul.allen@example.com", "date": "04/16/2021", "salary": "$64000", "status": "Professional" },
        { "id": 17, "name": "Quinn Young", "email": "quinn.young@example.com", "date": "05/17/2021", "salary": "$57000", "status": "Active" },
        { "id": 18, "name": "Rachel King", "email": "rachel.king@example.com", "date": "06/18/2021", "salary": "$49000", "status": "Resigned" },
        { "id": 19, "name": "Steve Wright", "email": "steve.wright@example.com", "date": "07/19/2021", "salary": "$52000", "status": "Applied" },
        { "id": 20, "name": "Tina Scott", "email": "tina.scott@example.com", "date": "08/20/2021", "salary": "$45000", "status": "Rejected" },
        { "id": 21, "name": "Uma Torres", "email": "uma.torres@example.com", "date": "09/21/2021", "salary": "$54000", "status": "Resigned" },
        { "id": 22, "name": "Vince Nguyen", "email": "vince.nguyen@example.com", "date": "10/22/2021", "salary": "$62000", "status": "Active" },
        { "id": 23, "name": "Wendy Patel", "email": "wendy.patel@example.com", "date": "11/23/2021", "salary": "$59000", "status": "Active" },
        { "id": 24, "name": "Xander Carter", "email": "xander.carter@example.com", "date": "12/24/2021", "salary": "$66000", "status": "Resigned" },
        { "id": 25, "name": "Yara Rodriguez", "email": "yara.rodriguez@example.com", "date": "01/25/2022", "salary": "$53000", "status": "Professional" },
        { "id": 26, "name": "Zoe Martinez", "email": "zoe.martinez@example.com", "date": "02/26/2022", "salary": "$60000", "status": "Current" },
        { "id": 27, "name": "Aaron Hernandez", "email": "aaron.hernandez@example.com", "date": "03/27/2022", "salary": "$58000", "status": "Resigned" },
        { "id": 28, "name": "Bella Lopez", "email": "bella.lopez@example.com", "date": "04/28/2022", "salary": "$52000", "status": "Rejected" },
        { "id": 29, "name": "Cameron Cook", "email": "cameron.cook@example.com", "date": "05/29/2022", "salary": "$62000", "status": "Active" },
        { "id": 30, "name": "Diana Adams", "email": "diana.adams@example.com", "date": "06/30/2022", "salary": "$55000", "status": "Professional" },
        { "id": 31, "name": "Ethan Bell", "email": "ethan.bell@example.com", "date": "07/31/2022", "salary": "$67000", "status": "Active" },
        { "id": 32, "name": "Fiona Lee", "email": "fiona.lee@example.com", "date": "08/31/2022", "salary": "$64000", "status": "Active" },
        { "id": 33, "name": "George Kim", "email": "george.kim@example.com", "date": "09/31/2022", "salary": "$72000", "status": "Resigned" },
        { "id": 34, "name": "Holly Perez", "email": "holly.perez@example.com", "date": "10/31/2022", "salary": "$59000", "status": "Applied" },
        { "id": 35, "name": "Isaac Brown", "email": "isaac.brown@example.com", "date": "11/31/2022", "salary": "$50000", "status": "Active" },
        { "id": 36, "name": "Julia Clark", "email": "julia.clark@example.com", "date": "12/31/2022", "salary": "$68000", "status": "Resigned" },
        { "id": 37, "name": "Kyle White", "email": "kyle.white@example.com", "date": "01/31/2023", "salary": "$55000", "status": "Rejected" },
        { "id": 38, "name": "Laura Johnson", "email": "laura.johnson@example.com", "date": "02/31/2023", "salary": "$61000", "status": "Current" },
        { "id": 39, "name": "Mark Harris", "email": "mark.harris@example.com", "date": "03/31/2023", "salary": "$59000", "status": "Resigned" },
        { "id": 40, "name": "Nina Evans", "email": "nina.evans@example.com", "date": "04/31/2023", "salary": "$65000", "status": "Professional" }
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Salary</th>
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
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="avatar-circle me-2">
                                        {getInitials(item.name)}
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                            </td>
                            <td>{item.email}</td>
                            <td>{item.date}</td>
                            <td>{item.salary}</td>
                            <td>{renderStatusBadge(item.status)}</td>
                            <td>
                                <Button variant="link"><FontAwesomeIcon icon={faPenToSquare} /></Button>
                                <Button variant="link"><FontAwesomeIcon icon={faTrash} /></Button>
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