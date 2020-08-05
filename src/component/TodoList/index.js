import React, {Component} from "react";
import {ADD_ITEM, DELETE_ITEM, FETCH_ITEM, FINISH_ITEM} from "../../store/actionTypes";
import {connect} from "react-redux";
import ItemList from "../ItemList";
import Api from '../../api/Api'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            inputValue: "",
            itemList :[]
        }
    }
    componentWillMount () {
        this.initTodoList();
    }

    handleAddItem = async () => {
        let inputValue = this.input.value;
        if (inputValue !== "") {
            await Api.addTodo({content: inputValue, status: false})
            this.input.value = "";
            this.initTodoList();
        } else {
            alert("No Allow Empty");
        }
    };

    handleDeleteItem = async (id) => {
        await Api.deleteTodo(id)
        this.initTodoList();
    };

    handleFinishItem = async (id, status) => {
        await Api.updateTodo(id, status);
        this.initTodoList();
    };

    initTodoList = async () => {
        let res = await Api.getTodos();
        this.setState({
            itemList: res.data
        });
        console.log(this.state.itemList)
    };

    render() {
        return <div>
            <h3>To Do List</h3>
            <label>
                <input type='text' ref={value => this.input = value}/>
            </label>
            <button onClick={this.handleAddItem}>Add</button>
            <ItemList items={this.state.itemList} onDelete={this.handleDeleteItem} onFinish={this.handleFinishItem}/>
        </div>
    }
}

export default TodoList;
