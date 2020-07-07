import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { itemQty, removeFromCart } from '../appState/Actions/addToCartAction';

class CheckOut extends Component {

    constructor(props){
        super(props)
        console.log("CheckOut props : ", props);
    }

    render() {

        let toysInCart = []
        const [toys] = [this.props.cartProps.items]
        Object.values(toys).forEach((e) => {
            return (
              toysInCart.push(e)
            )
            
        })

        const cartDetails = toysInCart.map((e, index) => {
            return(
                <Fragment key={index}>
                    
                      <div className="row">
                          <div className="col-lg-6">
                            <img src={e.image} alt={e.pname} width="150px" />
                          </div>
                          <div className="col-lg-6">
                            <h3 className="subTitle">{e.pname}</h3>
                            <h5>{e.price}.00 INR</h5>
                            <h5>Qty {e.qty}</h5>
                          </div>
                      </div>
                </Fragment>
            )
        })

        return (
            <Fragment>
                  <div className="row center-lg">
                    <div className="col-lg-9 start-lg middle-lg">
                        <h1 className="title">CheckOut</h1>
                        <div className="row">
                          <div className="col-lg-8 border">
                              <div className="row">
                                <div className="col-lg-9">
                                  <h3>{this.props.authProps.userRegDetails[0].billingAddress}</h3>
                                  <h3 className="subTitle">Total amount to be paid</h3>
                                  <h3>INR {this.props.cartProps.totalPrice}.00</h3>
                                </div>
                                <div className="col-lg-3">
                                   <button className="button">Cash On Delivery</button><br></br>
                                   <button className="button">Online Payment</button>
                                </div>
                              </div>
                          </div> 
                          <div className="col-lg-4 border">
                            {cartDetails}
                          </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    cartProps: state.cartState,
    authProps: state.authState
})

export default connect(mapStateToProps,{})(CheckOut)
