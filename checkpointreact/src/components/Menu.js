import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const Menu = (props) => (
	<div>
        <Navbar left className='light-green'>
            <li>
                <Link to='/'>
                    <Icon>
                        face
                    </Icon>
                </Link>
            </li>
            <li>
                <Link to='/add'>
                    <Icon>
                        person_add
                    </Icon>
                </Link>
            </li>
        </Navbar>
    </div>
);

export default Menu;
