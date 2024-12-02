import {Button} from "react-bootstrap";
import AddressForm from "../../modal/form/AddressForm.jsx";
import React from "react";

import jp from '../../../assets/images/jp.jpeg'

const VoucherItem = () => {
    let item = {
        percentage: 10,
        max: 10,
        least: 50,
        outdate: new Date().toLocaleDateString()
    }
    return (
        <>
            <div className="container p-0 d-flex">{/* ps-2 pe-2 */}
                <div style={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center"
                }}> {/**/}
                    {/*<h4 style={{margin: '0 auto 0 8px'}}>Address</h4>*/}
                    <img className="avatar-initial me-2 rounded-3" src={jp} alt={jp} style={{width: 96, height: 96, objectFit: "cover"}}/>
                </div>
                <div className="container m-3 ms-0">
                    <h5 className="m-0 p-0">Discount {item.percentage}% max {item.max}$</h5>
                    <p className="m-0 p-0">Order with price at least {item.least}</p>
                    <p className="m-0 p-0">Available: {item.outdate}</p>
                </div>
                <div>
                    {/*<h6 style={{margin: 8}}>{item.idaddress}</h6>*/}
                    {/*{*/}
                    {/*    [item.tower, item.street, item.district, item.city, item.state, item.country].map((element, index) => (*/}
                    {/*        <h6 key={index} className="m-2">{element}</h6>*/}
                    {/*    ))*/}
                    {/*}*/}
                </div>
            </div>
            {/*<AddressForm*/}
            {/*    show={modalShow}*/}
            {/*    // onHide={() => setModalShow(false)}*/}
            {/*    onHide={handleModalClose}*/}
            {/*    onReload={onReload}*/}
            {/*    address={selectedAddress}*/}
            {/*/>*/}
        </>
    )
}

export default VoucherItem