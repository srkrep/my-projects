import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
    userData;
    constructor(props){
        super(props)
        console.log("<<<<<NAVBAR PROPS>>>>>", this.props)   
    }


    render() {
        return (
            <header className="navbar">
                <div className="row center-xs start-lg">
                  <div className="col-xs-12 col-sm-4 col-lg-4 logo">
                    <Link to="/">Toys Shopping</Link>
                  </div>
                  <div className="col-xs-12 col-sm-8 col-lg-8">
                    <ul className="nav dinline">
                        <li><Link to={location => ({ ...location, pathname: `/cart` })} className="fa fa-shopping-cart fa-2x"> {this.props.cartProps.itemsInCart} </Link></li>
                        <li><Link to="/signin">SignIn</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                        <li><Link to={location => ({...location, pathname: `/signout` })}>SignOut</Link></li>
                    </ul>
                  </div>
                </div>
            </header>

        );
    }
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps,)(NavBar)    
