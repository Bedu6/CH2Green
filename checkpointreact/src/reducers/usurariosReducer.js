import {TRAER_USUARIOS, ERROR, CARGANDO, AGREGADO, EDITADO} from '../types/usuariosTypes';

const INITIAL_STATE = {
    cometantarios: [],
    cargando: false,
    error: '',
    titulo: '',
    contenido: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){

        case TRAER_USUARIOS:
        return {...state, comentarios: action.payload, cargando: false};

        case ERROR:
        return {...state, error: action.payload, cargando: false};

        case CARGANDO:
        return {...state, cargando: true};

        default: return state;
    }
};