import React, { Component, Fragment } from 'react';


class SignUp extends Component {

    userData

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
            age: '',
            billingAddress: ''
        }
    }


    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('userDetails'));
        console.log("userData", this.userData);
        if (localStorage.getItem('userDetails')) {
            this.setState({
                firstName: this.userData.firstName,
                lastName: this.userData.lastName,
                email: this.userData.email,
                mobile: this.userData.mobile,
                password: this.userData.password,
                confirmPassword: this.userData.confirmPassword,
                age: this.userData.age,
                billingAddress: this.userData.billingAddress
            })
        } else {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                password: '',
                confirmPassword: '',
                age: '',
                billingAddress: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('userDetails', JSON.stringify(nextState));
    }

    render() {

        const formStyle = {
            width: '100%',
            height: '50px'
        }

        const handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            });
        }

        const userRegistrationDetailsSubmit = (e) => {
            e.preventDefault();
            this.props.history.push("/singin")
            console.log("userRegistrationDetailsSubmit :", this.state)
            console.log("SIGNUP PROPS :", this.props.history);
        }


        // function LoginPage() {
        //     let history = useHistory();
        //     let location = useLocation();

        //     let { from } = location.state || { from: { pathname: "/" } };
        //     let login = () => {
        //         fakeAuth.authenticate(() => {
        //             history.replace(from);
        //         });
        //     };

        //     return (
        //         <div>
        //             <p>You must log in to view the page at {from.pathname}</p>
        //             <button onClick={login}>Log in</button>
        //         </div>
        //     );
        // }

        return (
            <Fragment>
                <div className="row center-xs mt30">
                    <div className="col-xs-6 start-lg">
                        <h1 className="center-lg">User Registration</h1>
                        <form onSubmit={userRegistrationDetailsSubmit}>
                            <input type="text" id="firstName" placeholder="First Name" onChange={handleChange} /><br></br>
                            <input type="text" id="lastName" placeholder="Last Name" onChange={handleChange} /><br></br>
                            <input type="email" id="email" placeholder="Email Address" onChange={handleChange} /><br></br>
                            <input type="tel" id="mobile" placeholder="Mobile Number" onChange={handleChange} /><br></br>
                            <input type="password" id="password" placeholder="Password" onChange={handleChange} /><br></br>
                            <input type="password" id="confirmPassword" placeholder="Confirm Password" /><br></br>
                            <input type="text" id="age" placeholder="Age" onChange={handleChange} /><br></br>
                            <div className="dinline valign" align="left">
                                <h4 align="left">Gender</h4>
                                <input type="radio" id="male" className="mlr10" onChange={handleChange} />
                                <label>Male</label>
                                <input type="radio" id="female" className="mlr10" onChange={handleChange} />
                                <label>Female</label>
                            </div><br></br>
                            <textarea style={formStyle} id="billingAddress" placeholder="Delivery / Billing Address" onChange={handleChange} />
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


export default SignUp