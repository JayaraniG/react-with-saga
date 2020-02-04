import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {GETALL_REQUEST} from '../actions/LoginActions'
import {getAllRequest} from '../actions/LoginActions'
import FullscreenModal from '../UserDelete/FullScreenModal';
import UserDelete from '../UserDelete/userDelete'
import {userActions} from '../actions/LoginActions';

class Home extends React.Component {
    constructor() {
        super();
        
        this.state = { shouldDeleteUser: false };
        this.deleteConfirmation = this.deleteConfirmation.bind(this);
        this.dismissModal = this.dismissModal.bind(this);
       this.handleDeleteUser = this.handleDeleteUser.bind(this);
    }
    componentDidMount() {
        const {dispatch}=this.props;
       dispatch(getAllRequest());
        // console.log(e);
        
    }


    deleteConfirmation(userId) {
        this.setState({ shouldDeleteUser: true,userId:userId});
    }

    dismissModal() {
        this.setState({ shouldDeleteUser: false,userId:null });
    }

   handleDeleteUser(userId) {
    const {dispatch}=this.props;
     dispatch(userActions.delete(userId));
       this.dismissModal();
       
   }

 logout()
{
localStorage.removeItem("user");
localStorage.removeItem("token")
}

 renderform() {
      
        const user = this.props.user;
        const users=this.props.users?this.props.users:[];

        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged In !!</p>
                <h3>All registered users:</h3>
                {user.loading && <em>Loading users...</em>}
                {user.error && <span className="text-danger">ERROR: {user.error}</span>}
                
                   
                    <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>UserId</th>
                           <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) =>
                            <tr key={user.id}>
                                <td></td>
                                <td>{user.userId}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.username}</td>
                                <tr><td><a className="action" onClick={(id) => this.handleEditUser(user.id)}>Edit</a>|
     
                                <a onClick={(e) => { e.preventDefault(); this.deleteConfirmation(user.userId); }}>Delete</a></td>
                                </tr>
                            </tr>
                        )}
                    </tbody>
                    </table>
                <p>
                <Link to="/" onClick={this.logout}>logout</Link>
                </p>
            </div>
        );
     }
  
     render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.renderform()}
                    </tbody>
                </table>
                <FullscreenModal shouldDisplay={this.state.shouldDeleteUser}>
                    <UserDelete userId={this.state.userId} dismissModal={this.dismissModal} handleDeleteUser={this.handleDeleteUser} />
                </FullscreenModal>
            </div>
        )
    }
}
 
function mapStateToProps(state) {
    const user=state.LoginReducer.user
     const users=state.usersReducer.users
    return {
        user,
       users
       
    };
}
 
const connectedHome = connect(mapStateToProps)(Home);
export  {connectedHome as Home};