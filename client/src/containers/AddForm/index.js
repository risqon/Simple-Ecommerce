import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { postAdds } from '../../actions';
import Navbar from '../../components/Navbar';
import './AddForm.css'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            rate: "",
            description: "",
            price: "",
            brand: "",
            detailProduct: "",
            image: ""
        }
    }


    handleChange = (e) => {
        if (e.target.name === "image") {
            this.setState({ [e.target.name]: e.target.files[0] })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postAdds(this.state, this.props.history)
    }




    render() {
        return (
            <div >
                <div>
                    <Navbar />
                </div>
                <div className="container-card ">
                    <div className="card">
                        <div className="card-header card-header-custom h2 ">ADD ADDS</div>
                        <div className="card-body text-dark">
                            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                                <div className="flexCustom flexlogin d-flex mt-5 mb-5 flex-column align-items-center">
                                    <div className="my-1 w-75">
                                        <label forhtml="title" className="text-white font-weight-bold">Title</label>
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Title"
                                            id="inputEmail"
                                            name="title"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="my-3 w-75">

                                        <div className="form-group">
                                            <label className="text-white font-weight-bold" forhtml="rate">Rate</label>

                                            <select className="form-control form-control-lg" name="rate" id="rate" required onChange={this.handleChange}>
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="my-3 w-75">
                                        <label forhtml="inputPassword" className="text-white font-weight-bold">Description</label>
                                        <textarea
                                            className="form-control form-control-lg"
                                            id="inputPassword"
                                            name='description'
                                            placeholder="Description"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="my-1 w-75">
                                        <label forhtml="price" className="text-white font-weight-bold">Price</label>
                                        <input
                                            className="form-control form-control-lg"
                                            type="number"
                                            name="price"
                                            id="price"
                                            placeholder="Price"
                                            onChange={this.handleChange}
                                            required
                                            min="1" step="any"
                                        />
                                    </div>

                                    <div className="mt-3 w-75">
                                        <label forhtml="brand" className="text-white font-weight-bold">Brand</label>
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Brand"
                                            name="brand"
                                            onChange={this.handleChange}
                                            required
                                            id="brand"
                                            min="1" step="any" />
                                    </div>

                                    <div className="my-3  w-75">
                                        <label forhtml="detailProduct" className="text-white font-weight-bold">Detail Product</label>
                                        <textarea
                                            className="form-control form-control-lg"
                                            type="Password"
                                            placeholder="Detail Product"
                                            name="detailProduct"
                                            onChange={this.handleChange}
                                            required
                                            rows="5"
                                            id="detailProduct"
                                        />
                                    </div>
                                    <div className="mt-3 mb-5 w-75">
                                        <label forhtml="image" className="text-white font-weight-bold">Image</label>
                                        <input
                                            className="form-control form-control-lg"
                                            type="file"
                                            name="image"
                                            placeholder="Image"
                                            onChange={this.handleChange}
                                            required
                                            min="1" step="any" accept="image/*" />
                                    </div>
                                </div>


                                <div className="d-flex  mt-5 justify-content-center ">
                                    <Link to='/' type="submit" className="btn-success btn btn-lg p-2 mx-1 mb-2" onClick={this.handleSubmit}>Submit</Link>
                                    <Link to="/" type="button" className="btn-warning btn btn-lg p-2 mx-1 mb-2">Cancel</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    postAdds: (newData, history) => dispatch(postAdds(newData, history))
})

export default connect(
    null,
    mapDispatchToProps
) (AddForm);