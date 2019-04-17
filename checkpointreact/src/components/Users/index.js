import React, { Component } from 'react';
import List from './List'
import {connect} from 'react-redux'
import {Icon,Table} from 'react-materialize';
import {Link} from 'react-router-dom';
import {showUsers} from'../actions/userActions'

class index extends Component {
    componentDidMount(){
        this.props.showUsers();
    };
    
    renderUsersList() {
        return this.props.users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          )
        })
    }

    render() {
        //console.log(this.props)
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
                    {/* <List users={users}/> */}
                    <h2>Users List</h2>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderUsersList() }
                        </tbody>
                    </Table> 
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


export default connect(mapStateToProps,{showUsers})(index);
