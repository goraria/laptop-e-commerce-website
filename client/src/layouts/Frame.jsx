import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Copyright from './Copyright.jsx';

const Frame = ({ children }) => {
    useEffect(() => {
        Main();
    }, [])
    return (
        <div>
            <Header />
            <div style={{marginTop: 56}}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Frame