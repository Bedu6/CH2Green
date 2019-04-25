import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as dependentActions from '../../Actions/dependentActions';
import { Icon, CollectionItem } from 'react-materialize';
import Loading from '../General/loading';
import Fatal from '../General/fatal';
import Deps from './depsCollection';

class index extends Component {
	componentDidMount() {
		if (!this.props.d_info.length)
			this.props.bringDeps();
	}

	showDeps = () => (
		this.props.d_info.map((info, key) => (
			<CollectionItem 
                className="avatar"
                key={ key }
            >
                <Link
				    to={`/edit_dep/${info._id}`}
				>
                    <Icon 
                        className="circle"
                    > 
                        edit 
                    </Icon>
                </Link>
                <span className="title">
                    { info.nombre_completo }
                </span>
                <p>
                    { info.dependencia }  
                    <br/>
                    { info.edad }
                </p>
                <Link
				    to={`/remove/${info._id}`}
				>
                    <Icon 
                        className="secondary-content"
                    > 
                        delete 
                    </Icon>
                </Link>  
            </CollectionItem>
		))
	);

	putDep = () => {
		if (this.props.loading)
			return <Loading />

		if (this.props.error)
			return <Fatal message={ this.props.error } />

		return <Deps showDeps={ this.showDeps } />
	};

	render() {
		return (
			<div>
				<div className='flex align_center'>
					<h2>Dependents</h2>
				</div>
				{ this.putDep() }
			</div>
		);
	}
}

const mapStateToProps = (allReducers) => {
	return allReducers.dependentsReducer;
}

export default connect(mapStateToProps, dependentActions)(index);