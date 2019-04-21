import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button } from 'react-materialize';
import * as userActions from '../../Actions/userActions';
import { NEW_LASTNAME, NEW_S_LASTNAME, NEW_NAME, NEW_AGE } from '../../Types/userTypes';
import Loading from '../General/loading';

class Save extends Component  {

	componentDidMount (){
		if(this.props.match.params.id)
		this.props.bringComment(this.props.match.params.id);
		else {
			this.props.changeImput(NEW_LASTNAME,'');
			this.props.changeImput(NEW_S_LASTNAME,'');
			this.props.changeImput(NEW_NAME,'');
			this.props.changeImput(NEW_AGE,'');
			
		}
	}

	localChangeImput = (event, opt) => {
		this.props.changeImput(opt, event.target.value);
	};

	save = (event) => {
		const user = {
			f_lastname: this.props.lastName,
			s_lastname: this.props.s_lastName,
			name: this.props.name,
			age: this.props.age
		}

		const id = this.props.match.params.id;
		if(id)
			this.props.edit(user, id);
		else
		this.props.add(user);
	};

	render(){
		return (
			<div>
				<br />
				<Icon large>person_add</Icon>
				<div className='row'>
					<Input
						s={12}
						m={6}
						label="Lastname"
						value={ this.props.lastName }
						onChange={
							(event) => this.localChangeImput(event, NEW_LASTNAME)
						}
					></Input>
					<Input
						s={12}
						m={6}
						label="Second Lastname"
						value={ this.props.s_lastName }
						onChange={
							(event) => this.localChangeImput(event, NEW_S_LASTNAME)
						}
					></Input>
					<Input
						s={12}
						m={6}
						label="Name"
						value={ this.props.name }
						onChange={
							(event) => this.localChangeImput(event, NEW_NAME)
						}
					></Input>
					<Input
						s={12}
						m={6}
						label="Age"
						value={ this.props.age }
						onChange={
							(event) => this.localChangeImput(event, NEW_AGE)
						}
					></Input>	
				</div>
				
				{ this.props.message }
				<div className='center-align'>
					<Button
						className={
							(this.props.loading) ? 'disabled' : ''
						}
						waves='light'
						onClick={ this.save }
					>
						Save
						<Icon left>save</Icon>
					</Button>
				</div>
	
				{ (this.props.loading) ? <Loading /> : '' }
			</div>
		)
	}
};

const mapStateToProps = (allReducers) => {
	return allReducers.usersReducers;
}
export default connect(mapStateToProps, userActions)(Save);