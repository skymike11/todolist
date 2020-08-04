import React from 'react';
import './App.css';
import TodoList from "./component/TodoList";
import MarkedTodoList from "./component/MarkedTodoList";
import {HashRouter, Route} from 'react-router-dom';

function App() {
    return (
        <HashRouter className="App">
            <Route exact path = "/" component={TodoList}/>
            <Route path = "/finish" component={MarkedTodoList}/>

        </HashRouter>

    );
}

export default App;
