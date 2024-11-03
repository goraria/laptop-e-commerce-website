import React, {useEffect, useState} from "react";
import AccountInfo from "../user-infomation/AccountInfo.jsx";
import {Button} from "react-bootstrap";

export const AdminProfile = () => {
    const [reloadAccountInfo, setReloadAccountInfo] = useState(0);

    const handleReloadAccountInfo = () => {
        setReloadAccountInfo(reloadAccountInfo + 1);  // Tăng giá trị để force re-render
    };

    useEffect(() => {
        const deactivateAcc = document.querySelector('#formAccountDeactivation');

        // Update/reset user image of account page
        let accountUserImage = document.getElementById('uploadedAvatar');
        const fileInput = document.querySelector('.account-file-input');
        const resetFileInput = document.querySelector('.account-image-reset');

        if (accountUserImage) {
            const resetImage = accountUserImage.src;

            fileInput.onchange = () => {
                if (fileInput.files[0]) {
                    accountUserImage.src = window.URL.createObjectURL(fileInput.files[0]);
                }
            };

            resetFileInput.onclick = () => {
                fileInput.value = '';
                accountUserImage.src = resetImage;
            };
        }
    }, []);
    return (
        <>
            <div className="card mb-4">
                <h5 className="card-header">Profile Details</h5>
                <hr className="my-0" />
                <div className="card-body">
                    <AccountInfo key={reloadAccountInfo} onReload={handleReloadAccountInfo} />
                </div>
            </div>
            <div className="card">
                <h5 className="card-header">Delete Account</h5>
                <div className="card-body">
                    <div className="mb-3 col-12 mb-0">
                        <div className="alert alert-warning">
                            <h6 className="alert-heading mb-1">Are you sure you want to delete your account?</h6>
                            <p className="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                        </div>
                    </div>
                    <form id="formAccountDeactivation" onSubmit="return false">
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="accountActivation"
                                id="accountActivation" />
                            <label className="form-check-label" htmlFor="accountActivation">I confirm my account deactivation</label>
                        </div>
                        <Button aria-label='Click me' type="submit" variant="danger">Deactivate Account</Button>
                    </form>
                </div>
            </div>
        </>
    )
}