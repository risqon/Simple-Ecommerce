import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Ip12 from '../../assets/images/ip12.jpg'
import ReactMarkdown from 'react-markdown';
import './DetailAdds.css'

class DetailAdds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailTabActive: true
        }
    }

    changeTab = (e) => {
        e.preventDefault()
        let { isDetailTabActive } = this.state
        this.setState({
            isDetailTabActive: !isDetailTabActive
        })
    }


    render() {

        const { isDetailTabActive } = this.state

        return (
            <div>
                <Navbar />
                <div className="detail-container">
                    <div className="card-detail">
                        <div className="row no-gutters">
                            <div className="col-md-5 img-card">
                                <img src={Ip12} className="img-item" alt="gambar product" />
                            </div>

                            <div className="col-md-6 offset-md-1">
                                <div className="card-body">
                                    <h1 className="card-title">Iphone 12 5G Unlocked GSM Apple Cell Phone</h1>
                                    <h4>Brand Iphone <small className="text-muted">vote</small></h4>
                                    <p className="card-text"><small className="text-muted">PRICE</small></p>
                                    <h2 style={{ marginTop: "-15px" }}> Rp.3990.000,-</h2>
                                    <p>COLOR</p>
                                    <p>CAPACITY</p>
                                    <p>QTY</p>
                                    <button type="button" onClick={this.toggleModal} className="btn btn-outline-info mt-2 btn-block">Buy item <i className="fa fa-cart-arrow-down fa-lg mx-2"></i></button>
                                    <p>Liek</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-testi">
                    <div>
                        <div className="col-md-12 product-info">
                            <ul className="nav nav-tabs">
                                <li className="nav-item" onClick={this.changeTab}>
                                    <a className={isDetailTabActive ? "nav-link active" : "nav-link"} href="#">Product Detail</a>
                                </li>
                                <li className="nav-item" onClick={this.changeTab}>
                                    <a className={!isDetailTabActive ? "nav-link active" : "nav-link"} href="#">Testimonial</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}

export default DetailAdds;