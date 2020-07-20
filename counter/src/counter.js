import React from 'react'
import {connect} from 'react-redux'
import {INCREMENT,DECREMENT} from './action'

function Counter({dispatch,count}) {
    const incr = () =>{
      dispatch({type : INCREMENT})
    }
    const decrement = () =>{
      if(count>0){
      dispatch({type : DECREMENT})
      }
    }
    
    return (
        <div className='App'>

            
      <button className='btn btn-primary' onClick={incr}>+</button>
      <h1>{count}</h1>
      <button className='btn btn-primary' onClick={decrement}>-</button>
        </div>
    )
}
const mapStateToProps = state =>{
  return {
    count : state.count
  }
}
  


export default connect(mapStateToProps)(Counter)
