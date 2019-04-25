import React from 'react';
import { Collection } from 'react-materialize';

const Deps = (props) => (

    <Collection>
        { props.showDeps() }
    </Collection>

);

export default Deps;