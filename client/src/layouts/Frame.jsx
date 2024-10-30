import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Copyright from './Copyright.jsx';

const Frame = ({ children }) => {
    useEffect(() => {
        Main();
    }, [])
    return (
        <>
            <Header />
            <div style={{marginTop: 56}}>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Frame