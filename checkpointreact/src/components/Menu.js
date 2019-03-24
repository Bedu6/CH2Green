import React from 'react';
import { Navbar,Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const Menu = (props) => (
	<div>
        <Navbar 
            className='#039be5 light-blue darken-1'           
            left
        >
		  <li>
		  	<Link to='/'>
                <Icon>
                    face
                </Icon>
		  	</Link>
		  </li>
		  <li>
		  	<Link to='/dependencys'>
                <Icon>
                    remove_red_eye
                </Icon>
		  	</Link>
		  </li>
		</Navbar>
	</div>
);

export default Menu;