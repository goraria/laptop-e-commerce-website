import React, { useState, useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Test from "./Test";
import Demo from "./Demo";

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error:', error));
    }, []);
    return (
      <div>
        <Header />
        <div className="container">
          <Demo/>
        </div>
        <Footer />
      </div>
    );
}

export default App;
