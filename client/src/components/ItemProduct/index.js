import React from 'react';
import './CardProduct.css'
import StartRating from 'react-star-ratings'
import Ip12 from '../../assets/images/ip12.jpg'

export default function ItemProduct(props) {
    return (
        <div className="container">
            <div className="card-product">
                <div className="head-card">
                    <img src={Ip12} alt="Product" />
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
                    <button className="btn-detail" >DETAIL ITEM</button>
                </div>

            </div>
        </div>

    )
}


