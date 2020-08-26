import React, {Component} from "react";
import ItemList from "../ItemList";
import Api from '../../api/Api'
import HeaderTitle from "../HeaderTitle";
import InputItem from "../InputItem";
import MapIndex from "../MapIndex";
import './index.css'
import {Drawer, Input, InputNumber, Modal, Option, Select} from "antd";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            inputValue: "",
            itemList: [],
            visible: false,
            placement: "bottom",
            drawerVisible: false
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

    showModal = () => {
        this.setState({
            visible: true,
            drawerVisible: true
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
            drawerVisible: false
        });
    };

    render() {
        return <div>
            <div className="container">
                <MapIndex onSelect={this.showModal}/>
            </div>
            <Modal
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={false}
                mask={false}
            >
                <Input.Group compact>
                    <Select defaultValue="Option1">

                    </Select>
                    <InputNumber/>
                </Input.Group>
            </Modal>
            <Drawer
                title="Basic Drawer"
                placement={this.state.placement}
                onClose={this.onClose}
                visible={this.state.drawerVisible}
                key={this.state.placement}
                mask={false}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            {/*<HeaderTitle title={"To Do List"}/>*/}
            {/*<InputItem onAdd={this.handleAddItem}/>*/}
            {/*<ItemList items={this.state.itemList} onDelete={this.handleDeleteItem} onFinish={this.handleFinishItem}/>*/}
        </div>
    }
}

export default TodoList;
