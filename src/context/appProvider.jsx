import { createContext, useContext, useReducer } from "react" // react context / reducer
import reducer from "./reducer";

import { CREATE, UPDATE, DELETE } from './actions';

const AppContext = createContext();

const initialState = {
    students: [
        {id:1, name: "Juan Perez", age:25},
        {id:2, name: "Juan Rada", age:31},
    ]
}

const AppProvider = ({children}) => {

  //reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const createStudent = (student) => dispatch({type: CREATE, payload: student})
  const updateStudent = (student) => dispatch({type: UPDATE, payload: student})
  const deleteStudent = (id) => dispatch({type: DELETE, payload: id})

    return(
        <AppContext.Provider
        value={{
         students: state.students,
         createStudent,
         updateStudent,
         deleteStudent,
         dispatch
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}

export default AppContext


export const useAppContext = () => {
    return useContext(AppContext)
}


