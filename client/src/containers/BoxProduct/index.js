import React, { Component } from 'react';
import ItemProduct from '../../components/ItemProduct';
import './BoxProduct.css'



class BoxProduct extends Component {
    render() {
        return (
            <div className="container">
              
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />
                    <ItemProduct />



            </div>
        );
    }
}

export default BoxProduct;