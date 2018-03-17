import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import selectUser from '../actions';

class UserList extends Component {
    constructor(props) {
        super(props);

        this._createListItems = this._createListItems.bind(this);
    }

    _createListItems() {
        const {users, selectUser} = this.props;
        return users.list.map((user) => {
            return (
               <li 
               key={user.id}
               onClick={() => selectUser(user)}>
                    {user.first} {user.last}
               </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this._createListItems()}
            </ul>
        );
    }
}

const mapStateToPops = (state) => {
    const { users } = state;
    return {
        users
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectUser }, dispatch);
}

export default connect(mapStateToPops, mapDispatchToProps)(UserList);