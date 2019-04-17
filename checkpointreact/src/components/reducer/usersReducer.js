import { 
    ADD_USER,ADD_USER_FAILURE,ADD_USER_STARTED, SHOW_USERS
} from '../types/userTypes'

const initState= {
    users: [],
    error:''
}

const usersReducer = (state = initState,action)=>{
    switch (action.type){
        case ADD_USER:
            console.log(ADD_USER,action.user)
        case SHOW_USERS:
            return Object.assign({},state,{users:action.payload})
    }
    return state;
}

export default usersReducer;

/* export default(state = INITIAL_STATE,action) => {
    switch(action.type){
        case TRAER_COMENTARIOS:
            return {...state,comentarios:action.payload,cargando:false};
        case ERROR:
            return {...state,error:action.payload,cargando:false};
        case CARGANDO:
            return{...state,cargando:true};
        case CAMBIO_TITULO:
            return{...state,titulo:action.payload,cargando:false}//el titulo cambia
        case CAMBIO_CONTENIDO:
            return{...state,contenido:action.payload,cargando:false}
        case AGREGADO:
            return{...state,titulo:'',contenido:'',cargando:false,comentarios:[]}
        case EDITADO:
            return{...state,cargando:false,comentarios:[]}
        default:return state;
    }
}; */