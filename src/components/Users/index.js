import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userActions from '../../Actions/userActions';
import { Icon } from 'react-materialize';
import Loading from '../General/loading';
import Fatal from '../General/fatal';
import Tables from './usersTable';

class index extends Component {
	componentDidMount() {
		if (!this.props.info.length)
			this.props.bringComments();
	}

	show = () => (
		this.props.info.map((info, key) => (
			<tr key={ key }>
			  <td>{ info.apellidos.paterno }</td>
			  <td>{ info.apellidos.materno }</td>
			  <td>{ info.nombre }</td>
			  <td>{ info.edad }</td>
			  <td>
				  <Link
					  to={`/deps/${info._id}`}
				  >
			  		<Icon>people</Icon>
				  </Link>
				  
				  <Link
					  to={`/add_dep/${info._id}`}
				  >
			  		<Icon>add</Icon>
				  </Link>
			  </td>
			  <td>
				  <Link
					  to={`/edit/${info._id}`}  
				  >
			  		<Icon>edit</Icon>
				  </Link>
			  </td>
			  <td>
				  <Link
					  to={`/`}
						onClick={()=>{
							this.deleteUser(info._id)
						}}
				  >
			  		<Icon>delete</Icon>
				  </Link>
			  </td>
			</tr>
		))
	);

	putInfo = () => {
		if (this.props.loading)
			return <Loading />

		if (this.props.error)
			return <Fatal message={ this.props.error } />

		return <Tables show={ this.show } />
	};

	deleteUser=(id)=>{
		this.props.deleteUser(id)
	}

	render() {
		return (
			<div className="container">
				<div className='flex align_right right'>
                    <Link 
                    icon="add" 
                    to="/add" 
                    className="btn waves-effect waves-light btn-large btn-floating green space">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
				<div className='flex align_center'>
					<h2>Users</h2>
				</div>

				{ this.putInfo() }
			</div>
		);
	}
}

const mapStateToProps = (allReducers) => {
	return allReducers.usersReducers;
}

export default connect(mapStateToProps, userActions)(index);