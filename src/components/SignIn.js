import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { userSignInDetails } from '../appState/Actions/userDetails'

class SignIn extends Component {
    userData

    constructor(props) {
        super(props)
    }



    componentWillUpdate() {

    }

    render() {
        console.log("<<SIGN IN DATA>>");

        const handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            });
        }

        const genToken = (e) => {
            localStorage.setItem('JWT', Math.random().toString(36).slice(2));
            this.props.history.push("/")
        }

        const signInSubmit = (e) => {
            e.preventDefault();
            let userSignIn = this.state
            this.setState(this.state)
            this.props.userSignInDetails(userSignIn);
            const USER_EMAIL = localStorage.getItem('USER_EMAIL');
            const USER_PASSWORD = localStorage.getItem('USER_PASSWORD');
            USER_EMAIL === null && USER_PASSWORD === null ? alert("Please SingUp Invalid crendentials") : genToken()

            console.log("<<SIGN IN VALUE>>",)
            
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