import React from 'react';
import './App.css';
import TodoList from "./component/TodoList";
import MarkedTodoList from "./component/MarkedTodoList";
import {HashRouter, Route} from 'react-router-dom';
import Menu from "./component/Menu";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Menu/>
                <Route exact path="/" component={TodoList}/>
                <Route path="/finish" component={MarkedTodoList}/>
            </HashRouter>
        </div>
    );
}

export default App;
