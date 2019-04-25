import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button } from 'react-materialize';
import * as dependentActions from '../../Actions/dependentActions';
import { NEW_DEPENDENCY, NEW_DEP_NAME, NEW_DEP_AGE } from '../../Types/dependentsTypes';

import Loading from '../General/loading';

class saveDep extends Component  {

	componentDidMount (){
		if(this.props.match.params.id)
		this.props.bringDep(this.props.match.params.id);
		else {
			this.props.changeImput(NEW_DEPENDENCY,'');
			this.props.changeImput(NEW_DEP_AGE,'');
			this.props.changeImput(NEW_DEP_NAME,'');			
		}
	}

	localChangeImput = (event, opt) => {
		this.props.changeImput(opt, event.target.value);
	};

	saveDep = (event) => {
		const dependent = {
			full_name: this.props.d_name,
			dependency: this.props.dependency,
			age: this.props.d_age
		}

		const id = this.props.match.params.id;
		if(id)
			this.props.edit(dependent, id);
		else
		this.props.add(dependent);
	};

	render(){
		return (
			<div>
				<br />
				<Icon large>group_add</Icon>
				<div className='row'>
					<Input
						s={12}
						m={6}
						label="Full name"
						value={ this.props.d_name }
						onChange={
							(event) => this.localChangeImput(event, NEW_DEP_NAME)
						}
					></Input>
					<Input
						s={12}
						m={6}
						label="Dependency"
						value={ this.props.dependency }
						onChange={
							(event) => this.localChangeImput(event, NEW_DEPENDENCY)
						}
					></Input>
					<Input
						s={12}
						m={6}
						label="Age"
						value={ this.props.name }
						onChange={
							(event) => this.localChangeImput(event, NEW_DEP_AGE)
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
	return allReducers.dependentsReducer;
}
export default connect(mapStateToProps, dependentActions)(saveDep);