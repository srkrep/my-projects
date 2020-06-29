import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../appState/Actions/addToCartAction';

class Home extends Component {

    constructor(props) {
        super(props)
        console.log("HOME PROPS", this.props)
    }

    render() {
        const productList = Object.entries(this.props.homeProps.products)

        return (
            <div>
                {productList}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    homeProps: state.homeState
})


export default connect(mapStateToProps, { addToCart })(Home)