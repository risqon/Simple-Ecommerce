import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Ip12 from '../../assets/images/ip12.jpg'
import './DetailAdds.css'
import { connect } from 'react-redux';
import { loadDetailAdds } from '../../actions';

class DetailAdds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailTabActive: true
        }
    }

    componentDidMount(){
        const detailId = Number(this.props.match.params.id)
        console.log(detailId)
        this.props.loadDetailAdds(detailId)
    }

    changeTab = (e) => {
        e.preventDefault()
        let { isDetailTabActive } = this.state
        this.setState({
            isDetailTabActive: !isDetailTabActive
        })
    }


    render() {

        const { isDetailTabActive, title, brand, price } = this.state

        return (
            <div>
                <Navbar />
                <div className="detail-container">
                    <div className="card-detail">
                        <div className="row no-gutters">
                            <div className="col-md-5 img-card">
                                <img src={Ip12} className="img-item" alt={title} />
                            </div>

                            <div className="col-md-6 offset-md-1">
                                <div className="card-body">
                                    <h1 className="card-title">{title}</h1>
                                    <h4>{brand}</h4>
                                    <p className="card-text"><small className="text-muted">PRICE</small></p>
                                    <h2 style={{ marginTop: "-15px" }}>{price}</h2>
                                    <p>COLOR</p>
                                    <p>CAPACITY</p>
                                    <p>QTY</p>
                                    <button type="button" onClick={this.toggleModal} className="btn btn-outline-info mt-2 btn-block">Buy item <i className="fa fa-cart-arrow-down fa-lg mx-2"></i></button>
                                    <p>Like</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="card-testi">
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
                </div> */}
            </div>



        );
    }
}

const mapStateToProps = (state) => ({
    data: state.data
})

const mapDispatchToProps = (dispatch) => ({
    loadDetailAdds: (id) => dispatch(loadDetailAdds(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailAdds);