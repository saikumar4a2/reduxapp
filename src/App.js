import {connect} from 'react-redux';
import {IncAction} from './actions';
import {DecAction} from './actions';
import './App.css';

function App({local_variable,IncAction,DecAction}) {
  return (
    <div className="App">
      <h1>{local_variable}</h1>
      <button onClick={()=>IncAction(5)}>Increment</button>
      <button onClick={()=>DecAction(2)}>Decrement</button>
    </div>
  );
}

const mapStateToProps=state=>({
  local_variable:state
})

export default connect(mapStateToProps,{IncAction,DecAction})(App);
