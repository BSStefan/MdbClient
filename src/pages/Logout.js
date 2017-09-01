import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import LogOut from './../functions/LogOut';

class Logout extends Component {
    componentWillMount(){
        this.props.logout();
    }
    render(){
        return (
            <div>
                <Redirect to="/login"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout : () => {
            dispatch(LogOut());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);


