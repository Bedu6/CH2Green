import axios from 'axios';
import { 
    ADD_USER,ADD_USER_FAILURE,ADD_USER_STARTED,SHOW_USERS,ERROR_SHOW
} from '../types/userTypes'

export const showUsers=() => async(dispatch)=>{
    try{
        const res =await axios.get(`https://jsonplaceholder.typicode.com/users`)
        dispatch({
            type:SHOW_USERS,
            payload:res.data
        })
    }
    catch(error){
        dispatch({
            type:ERROR_SHOW,
            payload:error.message
        })
    }
}

export const addUser=({id,name,username,email})=>{//dispatch in Add component
    return dispatch=>{
        dispatch(addUserStarted());
        axios
            .post(`https://jsonplaceholder.typicode.com/users`,{
                id,
                name,
                username,
                email,
                completed:false
            })
            .then(res=>{
                setTimeout(() => {
                    dispatch(addUserSuccess(res.data));  
                }, 2500);
            })
            .catch(err=>{
                dispatch(addUserFailure(err.message));
            })
    }
}


/* 
export const addTodo = ({ title, userId }) => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
      .post(ENDPOINT, {
        title,
        userId,
        completed: false
      })
      .then(res => {
        setTimeout(() => {
          dispatch(addTodoSuccess(res.data));
        }, 2500);
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};


*/

const addUserSuccess = user => ({
    type: ADD_USER,
    payload: {
      ...user
    }
});

const addUserStarted = () => ({
    type: ADD_USER_STARTED
});

const addUserFailure = error => ({
    type: ADD_USER_FAILURE,
    payload: {
      error
    }
});