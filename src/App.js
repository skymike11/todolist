import React from 'react';
import './App.css';
import TodoList from "./component/TodoList";
import MarkedTodoList from "./component/MarkedTodoList";
import {HashRouter, Route} from 'react-router-dom';
import TopMenu from "./component/TopMenu";
import 'antd/dist/antd.css';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <TopMenu/>
                <Route exact path="/" component={TodoList}/>
                <Route path="/finish" component={MarkedTodoList}/>
            </HashRouter>
        </div>
    );
}

export default App;
