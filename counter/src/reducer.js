import {INCREMENT,DECREMENT} from './action'
const initialstate = {
    count : 0
}
const rootReducer = (state=initialstate,action) =>{
    switch(action.type){
     case INCREMENT:
         return {
            ...state
            ,count: state.count +  1 }
    case DECREMENT:
        return {...state 
            ,count: state.count  - 1}
     default :
     return state
    }

}
export default rootReducer