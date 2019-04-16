import axios from 'axios';
import { 
    ADD_USER,GET_USERS,ERROR
} from '../types/userTypes'

export const addUser=({user})=>{//dispatch in Add component
    return dispatch=>{
        //async call
        dispatch({type:ADD_USER,user})
    }
}

/* 
export const addTodo = ({ title, userId }) => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        title,
        userId,
        completed: false
      })
      .then(res => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

*/