import React from 'react';
import './CardProduct.css'
import StartRating from 'react-star-ratings'
import { Link } from 'react-router-dom'

export default function ItemProduct(props) {
    return (
        <div className="container-item">
            <div className="product-card">
                <div className="head-card">
                    <img src={props.image} style={{borderRadius: 10}} alt={props.title} />
                </div>
                <div className="body-card">
                    <div className="title-product" >{props.title}</div>
                    <StartRating
                        rating={props.rate}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                    />
                    <p className="desc-product" >{props.desc}.</p>
                    <div className="price-product" >{props.price}</div>
                </div>
                <div className="btn-product">
                    <Link to={"/detail"} className="btn-detail" >DETAIL ITEM</Link>
                </div>

            </div>
        </div>

    )
}


