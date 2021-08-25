import React, { Component } from 'react';
import './AddForm.css'
import { Modal, Button } from 'react-bootstrap'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


  


    render() {
        return (
            <div>
                <div>
                    <button className="btn-add">Add product</button>
                </div>
                <div className="container">
                    <div className="card-add">
                        <div className="head-add" >

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddForm;