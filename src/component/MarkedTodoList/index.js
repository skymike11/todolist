import React, {Component} from "react";
import ItemList from "../ItemList";
import Api from "../../api/Api";
import HeaderTitle from "../HeaderTitle";
import InputItem from "../InputItem";

class MarkedTodoList extends Component {
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
            alert("No Allow Empty");
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
    };


    render() {
        return <div>
            <HeaderTitle title={"Markd To Do List"}/>
            <InputItem onAdd={this.handleAddItem}/>
            <ItemList items={this.state.itemList.filter(item => item.status === true)} onDelete={this.handleDeleteItem}
                      onFinish={this.handleFinishItem}/>
        </div>
    }
}

export default MarkedTodoList;
