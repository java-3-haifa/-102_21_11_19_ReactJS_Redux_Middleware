import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addCounter, load} from "./store/actions/ActionCreator";

function App(props) {
  return (
    <div>
      <h2>{props.count}</h2>
      <button onClick={props.add}>Add</button><br/>
      <h2>{props.title}</h2>
        <button onClick={props.load}>Load data</button>
    </div>
  );
}

function mapStateToProps(state) {
  return{
    count: state.counter.counter,
    title: state.counter.title
  }
}

function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch(addCounter()),
        load: ()=> dispatch(load())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
