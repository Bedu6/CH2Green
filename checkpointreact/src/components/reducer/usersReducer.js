import { 
    ADD_USER
} from '../types/userTypes'

const initState= {
    users: [ 
        {id: '1', name: 'help me find peach', last_namep: 'blah blah blah', last_namem: 'blah blah blah',age:13},
        {id: '2', name: 'collect all the stars', last_namep: 'blah blah blah', last_namem: 'blah blah blah',age:13},
        {id: '3', name: 'egg hunt with yoshi', last_namep: 'blah blah blah', last_namem: 'blah blah blah',age:13}
    ]
}

const usersReducer = (state = initState,action)=>{
    switch (action.type){
        case ADD_USER:
            console.log(ADD_USER,action.user)
    }
    return state;
}

export default usersReducer;