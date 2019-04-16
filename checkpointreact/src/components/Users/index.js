import React, { Component } from 'react';
import List from './List'
import {connect} from 'react-redux'
import {Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
import * as userActions from '../actions/userActions'

class index extends Component {
    render() {
        //console.log(this.props)
        const {users}=this.props

        return (
            <div className="container">
                <div className='flex align_center right'>
                    <Link 
                    icon="add" 
                    to="/add" 
                    className="btn waves-effect waves-light btn-large btn-floating green space">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
                <div className="list">
                    <List users={users}/>
                </div>
            </div>
        );
    }
}

//const mapStateToProps=({userActions})=>userActions

const mapStateToProps = (state) => {
    return {
      users: state.user.users
    }
  }


export default connect(mapStateToProps)(index);
