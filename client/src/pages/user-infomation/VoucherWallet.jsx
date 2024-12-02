import AddressList from "./AddressList.jsx";
import AddressItem from "../../components/information/address/AddressItem.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import VoucherItem from "../../components/information/voucher/VoucherItem.jsx";

const VoucherWallet = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [reloadAddressManagement, setReloadAddressManagement] = useState(0);
    const [reloadTrigger, setReloadTrigger] = useState(false);

    const handleReload = () => {
        setReloadTrigger(!reloadTrigger);
    };

    useEffect(() => {
        // const fetchAddresses = async () => {
        //     try {
        //         // setLoading(true);
        //         const token = localStorage.getItem('token');
        //         const response = await axios.get('http://localhost:5172/address/list', {
        //             headers: {
        //                 Authorization: `Bearer ${token}`
        //             }
        //         });
        //         setAddresses(response.data);
        //     } catch (error) {
        //         console.error('Lỗi khi lấy dữ liệu:', error);
        //     } finally {
        //         // setLoading(false);
        //     }
        // };

        // fetchAddresses();
    }, []);  // Khi reloadTrigger thay đổi, useEffect sẽ gọi lại API //
    return (
        <>
            <div className="card p-0 mb-4">{/* px-3 py-3 */}
                <div className="container h-px-40"></div>
                {/*<AddressList key={reloadTrigger} onReload={handleReload}/>*/}
            </div>
            <div className="row">
                {/*{addresses.map((address, index) => (*/}
                {/*    <div className="col-4 mb-0">*/}
                {/*        <div*/}
                {/*            className="card sticky-summary position-sticky mb-4 px-2 py-3"*/}
                {/*            style={{*/}
                {/*                top: 80,*/}
                {/*            }}>*/}
                {/*            /!*<VoucherItem/> /!* item={address} key={reloadTrigger} onReload={handleReload} *!/*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*))}*/}
                <div className="col-6 mb-0">
                    <div
                        className="card sticky-summary position-sticky mb-4 p-0" // px-2 py-3
                        style={{
                            top: 80,
                        }}>
                        <VoucherItem/> {/* item={address} key={reloadTrigger} onReload={handleReload} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoucherWallet