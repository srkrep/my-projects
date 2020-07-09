import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { userSignInDetails } from '../appState/Actions/authActions';

class SignIn extends Component {

    constructor(props) {
        super(props)
        // console.log("SIGNIN PROPS :", this.props.authProps)
    }

    render() {

        const handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            });
        }

        const signInSubmit = (e) => {
            e.preventDefault();
                let userSignIn = this.state
                this.setState(this.state)
                this.props.userSignInDetails(userSignIn)
                this.props.history.push('/') 
            console.log("<<SIGN IN VALUE>>", this.props.authProps.isAuthenticated)       
        }

        return (
            <Fragment>
                <div className="row center-xs mt30">
                    <div className="col-xs-4">
                        <h1 className="title">Login</h1>
                        <form onSubmit={signInSubmit}>
                            <input type="email" id="email" placeholder="Email Address" onChange={handleChange}/><br></br>
                            <input type="password" id="password" placeholder="Password" onChange={handleChange}/><br></br>
                            <button className="button" type="submit" value="Submit">SignIn</button>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    authProps: state.authState,
})

export default connect(mapStateToProps,{userSignInDetails})(SignIn)