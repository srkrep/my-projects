import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Payment extends Component {

    constructor(props) {
        super(props)
        this.state = {
       
        }
        // console.log("PAYMENT PROPS", this.props)
    }


    render() {

        return (
            <Fragment>
              <div className="row center-xs center-sm center-lg">
                  <div className="col-xs-11 col-sm-5 col-lg-4">
                    <h3>Billing Address</h3>
                    <div className="row start-lg">
                        <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" className="firstname" placeholder="John M. Doe"/>
                        <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                        <input type="text" id="email" className="email" placeholder="john@example.com"/>
                        <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                        <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" placeholder="New York"/>

                        <div className="row">
                        <div className="col-50">
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" name="state" placeholder="NY"/>
                        </div>
                        <div className="col-50">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" id="zip" name="zip" placeholder="10001"/>
                        </div>
                        </div>
                    </div>
                  </div>

                  <div className="col-sm-1 col-lg-1"></div>

                  <div className="col-xs-11 col-sm-5 col-lg-4">
                     <h3>Payment</h3>
                      <div className="row start-lg">
                       <div className="col-50">
                        <label htmlFor="fname">Accepted Cards</label>
                        <i className="fa fa-cc-visa navy mlr10"></i>
                        <i className="fa fa-cc-amex blue mlr10"></i>
                        <i className="fa fa-cc-mastercard orange mlr10"></i>
                        <i className="fa fa-cc-discover red mlr10"></i>
                        </div>
                        <label htmlFor="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                        <label htmlFor="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                        <label htmlFor="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                        <div className="row">
                            <div className="col-50">
                                <label htmlFor="expyear">Exp Year</label>
                                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                            </div>
                            <div className="col-50">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" name="cvv" placeholder="352"/>
                            </div>
                        </div>
                    </div>

                    <div className="row start-lg">
                        <label>
                        <input type="checkbox"  name=""/> Shipping address same as billing
                        </label>
                    </div>
                    <div className="row start-lg">
                        <button type="submit" className="button">Continue to checkout</button>
                    </div>
                    
                  </div>
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    cartProps: state.cartState,
})


export default connect(mapStateToProps, { })(Payment)   