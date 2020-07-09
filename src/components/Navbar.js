import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignOut } from '../appState/Actions/authActions';



class NavBar extends Component {
    constructor(props){
        super(props)
        // console.log("<<<<<NAVBAR PROPS>>>>>", this.props)   
    }

    render() {

        const { isAuthenticated } = this.props.authProps;

        const signout = () => {
            this.props.history.push('/cart')
            this.props.userSignOut(false)
        }

        const userLinks = (
             <li onClick={signout}>SignOut</li>
        )

        const guestLinks = (
            <Fragment>
                <li><Link to="/signin">SignIn</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </Fragment>
        )

        return (
            <header className="navbar">
                <div className="row center-xs start-lg">
                  <div className="col-xs-12 col-sm-4 col-lg-4 logo">
                    <Link to="/">Toys Shopping</Link>
                  </div>
                  <div className="col-xs-12 col-sm-8 col-lg-8">
                    <ul className="nav dinline">
                        <li><Link to={location => ({ ...location, pathname: `/cart` })} className="fa fa-shopping-cart fa-2x"> {this.props.cartProps.itemsInCart} </Link></li>
                        { isAuthenticated ? userLinks : guestLinks}
                    </ul>
                  </div>
                </div>
            </header>

        );
    }
}

const mapStateToProps = state => ({
    cartProps: state.cartState,
    authProps: state.authState
})

export default connect(mapStateToProps, {userSignOut})(NavBar)    
