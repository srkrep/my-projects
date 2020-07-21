import React, { Component, Fragment } from 'react'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {email: ''};
        console.log("HOME PROPS", props)
      }
    
      handleChange = (e) => {
        this.setState({email: e.target.value});
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/conversion')
        let EMAIL = this.state.email
        localStorage.setItem('user-email', EMAIL)
      }
    
      render() {
        return (
        <Fragment>
          <div className="container justify-content-center">
            <div className="row">
                <div className="card">
                    <h3>Get API Key</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input className="width-100" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={this.state.email} placeholder="Please enter your mail id..." onChange={this.handleChange} />
                        <h4 className="policy">By registering, you agree to Terms of Service and Privacy Policy.</h4>
                        <button type="submit" value="Submit" className="btn">Get Your Free API Key</button>
                    </form>
                </div>
            </div>
          </div>
        </Fragment>
        );
      }

}

export default Home


