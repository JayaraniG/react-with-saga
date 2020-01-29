import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {LOGIN_REQUEST} from '../actions/LoginActions';
import aroopa from '../aroopa.jpg';
//import '../LoginPage/login.css';
import {inputvalidation} from '../Validation';

class Password extends React.Component {
    constructor(props) {
        super(props);

     
    
        this.state = {
           // user:{
            email: '',
            submitted: false,
           // }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true});
        const { email, password } = this.state;
        const { dispatch } = this.props;
       
            dispatch({ type:LOGIN_REQUEST, email, password });
        
    }
  
    render() {
        const { email} = this.state;
        const{errors} = this.state;
       
        return (
            <div>

                <header>
                    <div>

                        <span>
                            <img className="logo" src={aroopa} width="15%" height="15%" />
                        </span>
                        <span className="signup" ><Link to ="/signup">Log In</Link></span>
                      
                    </div>
                </header>
                    <div className="login-page">
                      <div className="form">
                    <div className="h">Forgot Password ?</div>
                        <form className="form-group" onSubmit={this.handleSubmit}>
                        <input type="email" name="email" value={email} placeholder="Enter Email" onChange={this.handleChange} />
                        
                        <button type="submit">Reset Password</button>
                       
                    </form>
                </div>
            </div>
            </div>
        );
    }

}

export default connect()(Password);