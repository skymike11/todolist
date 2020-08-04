import React from 'react';
import './App.css';
import TodoList from "./component/TodoList";
import {HashRouter, Route} from 'react-router-dom';

function App() {
    return (
        <HashRouter className="App">
            <Route exact path = "/" component={TodoList}/>
            <Route path = "/finish" component={TodoList}/>

        </HashRouter>

    );
}

export default App;
