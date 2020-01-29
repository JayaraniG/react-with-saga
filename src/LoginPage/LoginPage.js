import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {LOGIN_REQUEST} from '../actions/LoginActions';
import aroopa from '../aroopa.jpg';
import '../LoginPage/login.css';
import {inputvalidation} from '../Validation';
import {history} from '../history'

class LoginPage extends Component {
    constructor(props) {
        super(props);

     
    
        this.state = {
            user:{
            email: '',
            password: ''
            },
            checked: false,
            submitted: false,
            errors:{},
            passwordvalidation:{}
           // }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
       const { user } = this.state;
     
        this.setState({
            user: 
            {
                ...user,
                [name]: value
           }
         });
        
    }

    // handleChange(e) {
    //     const { name, value } = e.target;
    //     this.setState({ [name]: value });
    // }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true});
        const{user}=this.state;
        const { email, password } = this.state;
        const { dispatch } = this.props;
       
        const passwordvalidation=inputvalidation(user.password,"password")
        const emailvalidation=inputvalidation(user.email,"email");
        this.setState({
            errors:emailvalidation,
            passwordvalidation:passwordvalidation
          
        })
        if (emailvalidation.value&&passwordvalidation.value==true) {
          
            dispatch({ type:LOGIN_REQUEST, email, password });
            history.push('/Password');
        }
    }
    handleCheckClick = () => {
        this.setState({ checked: !this.state.checked });
      }

    render() {
      // const login=this.props;
        //console.log(login);
        const{user}=this.state;
        const { email,password} = this.state;
        const{errors} = this.state;
        const{passwordvalidation}=this.state;
        return (
            <div>

                <header>
                    <div>

                        <span>
                            <img className="logo" src={aroopa} width="15%" height="15%" />
                        </span>
                        <span className="signup" >Don't have an account? <Link to ="/signup">Sign Up</Link></span>
                      
                    </div>
                </header>
       
                    <div className="login-page">
                      <div className="form">
                    <div className="h">Log In</div>
                        <form className="form-group" onSubmit={this.handleSubmit}>
                        <input type="email" name="email" value={user.email} placeholder="Enter Email" onChange={this.handleChange} />
                        {!errors.value ?
                        (<label className="emailred">{errors.message}</label>) : (<label>{errors.message}</label>)}
                        <input type="password"  name="password" value={user.password} placeholder="Enter Password" onChange={this.handleChange}  />
                        {!passwordvalidation.value ?
                        (<label className="pwdred">{passwordvalidation.message}</label>) : (<label>{passwordvalidation.message}</label>)}
                
                        <div>
                            <span>
                                <input className="checkbox_aro" type="checkbox" name="checkbox"  checked={this.state.checked} onChange={this.handleCheckClick}/>
                                <label className="font">Stay Logged In</label>
                            </span>&nbsp;
                          <Link to="/Password" className="fp">Forgot Password?</Link>
                        </div>
                        <button type="submit">Log In</button>
                      
                        
                    </form>
                </div>
            </div>
            </div>
        );
    }

}
// function mapStateToProps(state) {
//     const  login  = state;
//       return {
//       login
//     };
// }
 
// const connectedLoginPage = connect(mapStateToProps)(LoginPage);
// export { connectedLoginPage as LoginPage };

export default connect()(LoginPage);