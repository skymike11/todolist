import React, {Component} from "react";
import ItemList from "../ItemList";
import Api from '../../api/Api'
import HeaderTitle from "../HeaderTitle";
import InputItem from "../InputItem";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            inputValue: "",
            itemList: []
        }
    }

    componentWillMount() {
        this.initTodoList();
    }

    handleAddItem = async (inputValue) => {
        if (inputValue !== "") {
            await Api.addTodo({content: inputValue, status: false})
            this.initTodoList();
        } else {
            alert("No Allow Empty"); //todo const no allow empty
        }
    };

    handleDeleteItem = async (id) => {
        await Api.deleteTodo(id);
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

    render() { //todo const to to list
        return <div>
            <HeaderTitle title={"To Do List"}/>
            <InputItem onAdd={this.handleAddItem}/>
            <ItemList items={this.state.itemList} onDelete={this.handleDeleteItem} onFinish={this.handleFinishItem}/>
        </div>
    }
}

export default TodoList;
