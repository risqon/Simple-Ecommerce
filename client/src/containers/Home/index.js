import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import BoxProduct from '../BoxProduct';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div >
                <div className="card-home">
                    <Navbar />
                    <div className="body">
                        <BoxProduct />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;