import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {LOGIN_REQUEST, LOGOUT_RESET,userActions} from '../actions/LoginActions';
import aroopa from '../aroopa.jpg';
import '../LoginPage/login.css';
import {inputvalidation} from '../Validation';
import {history} from '../history'
import {loginRequest} from '../actions/LoginActions';



class LoginPage extends Component {
    constructor(props) {
        super(props);

        
    
        this.state = {
        
            username: '',
            password: '',
            status:false,
            checked: false,
            submitted: false,
            errors:{},
            passwordvalidation:{}
           
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
      
        const { username, password } = this.state;
        const { dispatch } = this.props;
       
        if (username && password) {
            dispatch(loginRequest(username, password));
           
        }
    }
// componentDidUpdate(prevProps)
// {
//     const token=localStorage.getItem("token");
//     console.log(token);
//     if(token)
//     {
//         this.props.history.push('/home'); 
//     }
// // if(prevProps.loginData!==this.props.loginData)
// // {
// //     console.log("test",this.props.loginData)
// //     //localStorage.setItem('token', user.token);
// //    this.props.history.push('/home');
// //    const {dispatch}=this.props;
// //     dispatch(userActions.logoutReset());
// //     //this.setState({status:true})
// // }
// }


    handleCheckClick = () => {
        this.setState({ checked: !this.state.checked });
      }

    render() {
      // const login=this.props;
      //localStorage.removeItem("token");
      const token=localStorage.getItem("token");
    console.log(token);
    if(token)
    {
        this.props.history.push('/home'); 
    }
        console.log("guiygyui",this.props.loginData);

        const{user}=this.state;
        const { username,password} = this.state;
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
                        <input type="text" name="username" value={username} placeholder="Enter Email" onChange={this.handleChange} />
                         <input type="password"  name="password" value={password} placeholder="Enter Password" onChange={this.handleChange}  />
                     
                                     
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
export const mapStateToProps = state => 
({  

 loginData: state.LoginReducer.data,
 //user:state.LoginReducer.user
});
 
const connectedLoginPage = withRouter (connect(mapStateToProps)(LoginPage));
export { connectedLoginPage as LoginPage };

// export default connect()(LoginPage);

