import React from 'react';
import { Table } from 'react-materialize';

const Tables = (props) => (
	<Table hoverable>
	  <thead>
	    <tr>
	      <th>Lastname</th>
	      <th>2nd Lastname</th>
	      <th>Name</th>
		  	<th>Age</th>
	      <th>Deps</th>
	      <th>Edit</th>
		  <th>Remove</th>
	    </tr>
	  </thead>

	  <tbody>
	    { props.show() }
	  </tbody>
	</Table>
);

export default Tables;