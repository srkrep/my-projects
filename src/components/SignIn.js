import React, { Component, Fragment } from 'react';

class SignIn extends Component {
    userData

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            mobile: '',
            password: ''
        }
    }



    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('userDetails'));

        if (localStorage.getItem('userDetails')) {
            this.setState({
                email: this.userData.email,
                mobile: this.userData.mobile,
                password: this.userData.password,
            })
        } else {
            this.setState({
                email: '',
                mobile: '',
                password: '',
            })
        }
    }

    render() {
        const handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            });
        }

        const signInSubmit = (e) => {
            e.preventDefault();
            this.userData = JSON.parse(localStorage.getItem('userDetails'));
            if (1 == 2) {
                this.props.history.push("/cart")
            } else {
                this.props.history.push("/singup")
            }
            console.log("signInSubmit :", this.state.email, "/", this.userData.email)
        }

        return (
            <Fragment>
                <div className="row center-xs mt30">
                    <div className="col-xs-4">
                        <h1>Login</h1>
                        <form onSubmit={signInSubmit}>
                            <input type="email" id="email" placeholder="Email Address" onChange={handleChange} /><br></br>
                            <span>Or</span>
                            <input type="tel" id="mobile" placeholder="Mobile Number" onChange={handleChange} /><br></br>
                            <input type="password" id="password" placeholder="Password" onChange={handleChange} /><br></br>
                            <button className="button" type="submit" value="Submit">SignIn</button>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SignIn