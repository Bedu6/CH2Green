import React from 'react';
import {Navbar} from 'react-materialize';
import {Link} from 'react-router-dom'; 

const Menu = (props) => ( 

        <div className="menu">
            <Navbar >
                <li>
                    <Link to="/">
                        Usuarios
                    </Link>
                </li>
                <li>
                    <Link >
                        Agregar
                    </Link>
                </li>
            </Navbar>
        </div>
)

export default Menu;