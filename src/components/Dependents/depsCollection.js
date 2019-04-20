import React from 'react';
import { Collection, Row, Col } from 'react-materialize';

const Deps = (props) => (

    <Collection>
        { props.showDeps() }
    </Collection>

);

export default Deps;