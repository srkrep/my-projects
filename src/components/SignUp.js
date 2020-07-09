import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { userSignUpDetails } from '../appState/Actions/authActions';

class SignUp extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const formStyle = {
            width: '100%',
            height: '50px'
        }

        const genToken = (e) => {
            localStorage.setItem('JWT', Math.random().toString(36).slice(2));
            this.props.history.push("/")
        }

        const handleChange = (e) => {
            e.preventDefault();
            this.setState({
                [e.target.id]: e.target.value,  
            });
        }

        const userRegistrationDetailsSubmit = (e) => {
            e.preventDefault();
            let userSignUp = this.state
            this.setState(this.state)
            this.props.userSignUpDetails(userSignUp);
            genToken()
            this.props.history.push('/signin');
        }

        return (
            <Fragment>
                <div className="row center-xs mt30">
                    <div className="col-xs-6 start-lg">
                        <h1 className="center-lg title">User Registration</h1>
                        <form onSubmit={userRegistrationDetailsSubmit}>
                            <input type="text" id="firstName" placeholder="First Name" onChange={handleChange} required/><br></br>
                            <input type="text" id="lastName" placeholder="Last Name" onChange={handleChange} required /><br></br>
                            <input type="email" id="email" placeholder="Email Address" onChange={handleChange} required/><br></br>
                            <input type="tel" id="mobile" placeholder="Mobile Number" onChange={handleChange} pattern="[0-9]{10}" maxLength="13" size="13" required/><br></br>
                            <input type="password" id="password" placeholder="Password" onChange={handleChange} maxLength="12" size="12" required /><br></br>
                            <input type="text" id="age" placeholder="Age" onChange={handleChange} required/><br></br>
                            <div className="dinline valign" align="left">
                                <h4 align="left">Gender</h4>
                                <input type="radio" id="male" className="mlr10" onChange={handleChange} />
                                <label>Male</label>
                                <input type="radio" id="female" className="mlr10" onChange={handleChange} />
                                <label>Female</label>
                            </div><br></br>
                            <textarea style={formStyle} id="billingAddress" placeholder="Delivery / Billing Address" onChange={handleChange}/>
                            <div className="center-lg">
                                <button className="button" type="submit" value="Submit">User Registration</button>
                            </div>
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

export default connect(mapStateToProps, {userSignUpDetails})(SignUp)