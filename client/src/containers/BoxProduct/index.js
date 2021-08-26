import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAdds } from '../../actions';
import ItemProduct from '../../components/ItemProduct';
import './BoxProduct.css'



class BoxProduct extends Component {

    componentDidMount(){
        this.props.loadAdds()
    }



    render() {
        const adds = this.props.product.map((item, index) => {
            return <ItemProduct 
            key={index}
            id={item.id}
            title={item.title}
            desc={item.description}
            price={item.price}
            brand={item.brand}
            detailProduct={item.detailProduct}
            image={item.image}
            rete={item.rate}/>
        })

        return (
            <div className="box">
                    {adds}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    product: state.adds.data
})

const mapsDispatchToProps = (dispatch) => ({
    loadAdds: () => dispatch(loadAdds()),

})

export default connect(
    mapStateToProps,
    mapsDispatchToProps
) (BoxProduct);