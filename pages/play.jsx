import React from 'react';

import Read from '../components/contractRead'

import Balance from '../components/Balance';
import End from '../components/end';
import List from '../components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';



function Wallet() {
  return (
    <div className="container-fluid bg-dark text-light">
      
    <Nav/>
      <Balance />
      <div className="row">
        <div className="col text-center">
          <Read /> {/* Display Read component centered within its column */}
        </div>
        <div className="col text-center">
          <List /> {/* Display List component centered within its column */}
        </div>
      </div>
      <End />
    <Footer/>
    </div>
  );
}

export default Wallet;



