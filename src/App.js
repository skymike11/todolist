import React from 'react';
import './App.css';
import TodoList from "./component/TodoList";
import MarkedTodoList from "./component/MarkedTodoList";
import {HashRouter, Route} from 'react-router-dom';
import TopMenu from "./component/TopMenu";
import 'antd/dist/antd.css';
import {Spin} from 'antd'
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        return (
            <Spin spinning={this.props.loading} wrapperClassName="page-loading">
                <div className="App">
                    <HashRouter>
                        <TopMenu/>
                        <Route exact path="/" component={TodoList}/>
                        <Route path="/finish" component={MarkedTodoList}/>
                    </HashRouter>
                </div>
            </Spin>

        );
    }
}

const mapStateToProps = state => {
    return {loading: state.loadingReducer.loading}
};


export default connect(mapStateToProps, null)(App);
