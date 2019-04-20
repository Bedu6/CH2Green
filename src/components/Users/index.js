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
					  to={`/remove/${info._id}`}
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

	render() {
		return (
			<div>
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