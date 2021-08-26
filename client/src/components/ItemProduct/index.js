import React from 'react';
import './CardProduct.css'
import StartRating from 'react-star-ratings'
import Ip12 from '../../assets/images/ip12.jpg'
import { Link } from 'react-router-dom'

export default function ItemProduct(props) {
    return (
        <div className="container-item">
            <div className="product-card">
                <div className="head-card">
                    <img src={Ip12} style={{borderRadius: 10}} alt="Product" />
                </div>
                <div className="body-card">
                    <div className="title-product" >Product Tittle</div>
                    <StartRating
                        rating={props.rate}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                    />
                    <p className="desc-product" >Lorem Ipsum is simply dummy text of the pringting and typesetting industru.</p>
                    <div className="price-product" >Rp.3.990.000,-</div>
                </div>
                <div className="btn-product">
                    <Link to={"/detail"} className="btn-detail" >DETAIL ITEM</Link>
                </div>

            </div>
        </div>

    )
}


