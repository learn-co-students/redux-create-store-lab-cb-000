import candyReducer from './reducers/candyReducer';
import countReducer from './reducers/countReducer';

export default function createStore(reducer) {

  let state;
  // add your code here

  function getState(){
    return state
  }

  function dispatch(action){
    state = reducer(state, action)
  }

  dispatch({type: '@@INIT'})

  return {getState, dispatch}
}






function render() {
  const container = document.getElementById('container');
}
