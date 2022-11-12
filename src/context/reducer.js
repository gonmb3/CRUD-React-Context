import {CREATE, UPDATE, DELETE} from "./actions"

const reducer = (state,action) => {
   switch (action.type) {
    case CREATE:{
        return {
            ...state,
            students: [...state.students, action.payload]
        }
    }
    case UPDATE:{
        return {
            ...state,
            students: state.students.map((student) => {
                return (student.id === action.payload.id) ? action.payload : student
            })
        }
    }
    case DELETE:{
        return{
            ...state,
            students: state.students.filter(student => {
                return student.id !== action.payload
            })
        }
    }

   
    default:
        return state;
   }
}

export default reducer