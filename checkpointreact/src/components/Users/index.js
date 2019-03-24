import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as usuariosActions from '../../actions/usuariosActions';
import { Icon } from 'react-materialize';
import Cargando from '../General/Cargando';
import Fatal from '../General/Fatal';
import Tabla from './Tabla';

class index extends Component {
	componentDidMount() {
		if (!this.props.comentarios.length)
			this.props.traerComentarios();
	}

	desplegar = () => (
		this.props.comentarios.map((comentario, key) => (
			<tr key={ key }>
			  <td>{ comentario.apellidos.paterno }</td>
			  <td>{ comentario.apellidos.materno }</td>
              <td>{ comentario.nombre }</td>
			  <td>{ comentario.edad }</td>
			  <td>
			  		<Link
			  			to={`/comentarios/editar/${comentario.id}`}
			  			className='manita'
			  		>
			  			<Icon>edit</Icon>
			  		</Link>
			  </td>
			</tr>
		))
	);

	ponerContenido = () => {
		if (this.props.cargando)
			return <Cargando />

		if (this.props.error)
			return <Fatal mensaje={ this.props.error } />

		return <Tabla desplegar={ this.desplegar } />
	};

	render() {
		return (
			<div>
				<div className='flex align_center'>
					<h2>Comentarios</h2>
				</div>

				{ this.ponerContenido() }
			</div>
		);
	}
}

const mapStateToProps = (todosLosReducers) => {
	return todosLosReducers.usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(index);