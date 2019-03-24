import React from 'react';
import { Table } from 'react-materialize';

const Tabla = (props) => (
	<Table hoverable>
	  <thead>
	    <tr>
	      <th>Paterno</th>
	      <th>Materno</th>
	      <th>Nombre</th>
				<th>Edad</th>
				<th>Dependientes</th>
				<th>Editar</th>
				<th>Eliminar</th>
	    </tr>
	  </thead>

	  <tbody>
	    { props.desplegar() }
	  </tbody>
	</Table>
);

export default Tabla;