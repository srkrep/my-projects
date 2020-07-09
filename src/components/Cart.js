import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { itemQty, removeFromCart } from '../appState/Actions/addToCartAction';

class Cart extends Component {
    
    constructor(props){
        super(props)
        // console.log("cart props : ", props);
    }


    render() {

        const goToCheckOut = () => {
            this.props.history.push("/checkout")
        }

        let toysInCart = []

        Object.keys(this.props.cartProps.items).forEach((e) => {
            if(this.props.cartProps.items[e].inCart){
                toysInCart.push(this.props.cartProps.items[e])
            }    
        })

        toysInCart = toysInCart.map((e, index) => {
           return (
               <Fragment key={index}>
                  { 
                    <div className="row col-xs-11 col-sm-9 col-lg-9 middle-xs middle-sm middle-lg border">
                        <div className="col-xs-5  col-sm-3 col-lg-3">
                            <img src={e.image} alt={e.pname} width="150px" />
                        </div>
                        <div className="col-xs-5 col-sm-2 col-lg-2">
                            <h5 className="capitalize">{e.pname}</h5>
                        </div>
                        <div className="col-xs-4 col-sm-2 col-lg-2">
                            <h5>{e.price}.00</h5>
                        </div>
                        
                        <div className="col-xs-4 col-sm-2 col-lg-2">
                            <button onClick={() => {this.props.itemQty('decrease', index)}} > - </button>
                            <span> {e.qty} </span>
                            <button onClick={() => {this.props.itemQty('increase', index)}}> + </button>
                        </div>
                    
                        <div className="col-xs-3 col-sm-2 col-lg-2">
                            <h5>{e.qty * e.price}.00</h5>
                        </div> 
                        <div className="col-xs-1 col-sm-1 col-lg-1">
                            <h5 className="fa fa-trash-o" onClick={() => {this.props.removeFromCart(index)}}></h5>
                        </div>   
                    </div>
                  }
               </Fragment>
           )
        })
                 
                     
        return (

            <Fragment>
                <div className="row center-xs center-sm center-lg">
                    <div className="row col-xs-11 col-sm-9 col-lg-9 middle-lg border">
                        <div className="col-xs-1 col-sm-3 col-lg-3"></div>
                        <div className="col-xs-3 col-sm-2 col-lg-2">
                            <h5 className="bold">Toys</h5>
                        </div>
                        <div className="col-xs-1 col-sm-2 col-lg-2">
                            <h5 className="bold hide">Price</h5>
                        </div>
                        <div className="col-xs-3 col-sm-2 col-lg-2">
                            <h5 className="bold">Total Qty</h5>
                        </div>
                        <div className="col-xs-3 col-sm-2 col-lg-2">
                            <h5 className="bold">Total Price</h5>
                        </div>  
                        <div className="col-xs-2 col-sm-2 col-lg-1"></div>   
                    </div>
                </div> 
                <div className="row center-xs center-sm center-lg">
                   { toysInCart }  
                </div>
               <div className="row center-xs center-sm center-lg">
                  <div className="row col-xs-11 col-sm-9 col-lg-9 middle-lg border">
                    <div className="col-xs-2 col-sm-3 col-lg-3"></div>
                    <div className="col-xs-1 col-sm-2 col-lg-2"></div>
                    <div className="col-xs-2 col-sm-2 col-lg-2"></div>
                    <div className="col-xs-3 col-sm-2 col-lg-2">
                         <h5 className="bold">{this.props.cartProps.itemsInCart}</h5>
                    </div>
                    <div className="col-xs-3 col-sm-2 col-lg-2">
                         <h5 className="bold">{this.props.cartProps.totalPrice}</h5>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-lg-1"></div>   
                  </div>
                </div>
                <div className="row col-xs-10 col-sm-9 col-lg-9 end-xs end-sm end-lg">
                    <div className="col-xs-2 col-sm-1 col-lg-1">
                        <button className="button" onClick={goToCheckOut}>CheckOut</button>
                    </div> 
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    cartProps: state.cartState,
})

export default connect(mapStateToProps, {itemQty, removeFromCart }) (Cart)