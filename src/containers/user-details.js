import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {

    constructor(props) {
        super(props);

        this._mapUserDetails = this._mapUserDetails.bind(this);
    }

    _mapUserDetails() {
        if(typeof this.props.activeUser !== 'undefined') {
            const {
                first, 
                last, 
                age, 
                description } = this.props.activeUser;

                return (
                    <div>
                        <h2>{first} {last}</h2>
                        <h3>Age: {age}</h3>
                        <h3>Description: {description}</h3>
                    </div>
                );
        }
        
        return <h4>Select a user...</h4>
    }

    render() {
        return (
            <div>
               {this._mapUserDetails()}
            </div>
        );
    }
}

const mapStateToPops = (state) => {
    const { activeUser } = state.users;
    return {
        activeUser
    }
}

export default connect(mapStateToPops)(UserDetails);