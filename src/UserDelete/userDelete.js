import React from 'react';

const UserDelete = (props) => (
    <table>
        <tr>
            <h3>Are you sure you want to delete employee with ID {props.userId} ?</h3>
            <td><button onClick={(e) => { e.preventDefault(); props.handleDeleteUser(props.userId) }}>Yes, I am sure</button></td>
            <td><button className="pull-right" bsSize="small" bsStyle="danger" onClick={(e) => { e.preventDefault(); props.dismissModal() }}>Never mind</button></td>
        </tr>
    </table>

);

export default UserDelete;