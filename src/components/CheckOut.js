import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class CheckOut extends Component {

    constructor(props){
        super(props)
        // console.log("CheckOut props : ", props);
    }

    render() {

        let toysInCart = []

        Object.keys(this.props.cartProps.items).forEach((e) => {
            if(this.props.cartProps.items[e].inCart){
                toysInCart.push(this.props.cartProps.items[e])
            }    
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

        const cashOnDelivery = () => {
           window.confirm("Please Confirm Your Order & Cash on Delivery Address.....")
           this.props.history.push('/')
        }

        const onlinePayment = () => {
            this.props.history.push('/payment')
        }

        return (
            <Fragment>
                  <div className="row center-xs center-sm center-lg">
                    <div className="col-xs-11 col-sm-11 col-lg-9 start-lg middle-lg">
                        <h1 className="title">CheckOut</h1>
                        <div className="row">
                          <div className="col-xs-12 col-sm-8 col-lg-8 border">
                              <div className="row center-xs start-lg">
                                <div className="col-xs-9 col-sm-9 col-lg-9">
                                  <h2 className="subTitle underline">Total amount to be paid</h2>
                                  <h3>INR {this.props.cartProps.totalPrice}.00</h3>
                                  <h2 className="subTitle underline">Delivery Address</h2>
                                  <h3>Full Name:&nbsp;
                                     <span className="address">{this.props.authProps .userRegDetails.firstName}&nbsp;{this.props.authProps .userRegDetails.lastName}</span></h3>
                                  <h3>Email ID: <span className="address">{this.props.authProps .userRegDetails.email}</span></h3>
                                  <h3>Mobile: <span className="address">{this.props.authProps .userRegDetails.mobile}</span></h3>
                                  <h3>Billing Addresss: <span className="address">{this.props.authProps.userRegDetails.billingAddress}</span></h3>
                                </div>
                                <div className="col-sm-3 col-lg-3">
                                   <button className="button" onClick={cashOnDelivery}>Cash On Delivery</button><br></br>
                                   <button className="button" onClick={onlinePayment}>Online Payment</button>
                                </div>
                              </div>
                          </div> 
                          <div className="col-xs-12 col-sm-4 col-lg-4 border center-lg">
                          <h2 className="subTitle underline">Delivery Items Details</h2>    
                            {cartDetails}
                          <h3 className="border">Total Qty: <span className="address">{this.props.cartProps.itemsInCart}</span></h3>
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
