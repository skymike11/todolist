import React, {Component} from "react";
import ItemList from "../ItemList";
import Api from '../../api/Api'
import HeaderTitle from "../HeaderTitle";
import InputItem from "../InputItem";
import MapIndex from "../MapIndex";
import './index.css'
import {Button, Drawer, Input, InputNumber, Modal, Select} from "antd";
import * as _ from "lodash";
import CargoDistributionList from "../CargoDistributionList";

const {Option} = Select;

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            inputValue: "",
            itemList: [],
            visible: false,
            placement: "bottom",
            drawerVisible: false,
            portData: [
                {
                    portCode: "YAT01",
                    lat: 29.9645,
                    lng: 121.7416,
                    cargos: [
                        {
                            type: "20GP",
                            surplus: 120
                        },
                        {
                            type: "40GP",
                            surplus: 30
                        }
                    ]
                },
                {
                    portCode: "YAT02",
                    lat: 31.222,
                    lng: 121.498,
                    cargos: [
                        {
                            type: "40GP",
                            surplus: 20
                        }
                    ]
                }
            ],
            currentSelectedPort: {},
            currentSelectedCargos: [],
            selectedCargoType: undefined
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
        console.log(this.state.itemList)
    };

    showModal = (portCode) => {
        let currentSelectedPort = _.find(this.state.portData, (item) => {
            return item.portCode === portCode
        });
        this.setState({
            visible: true,
            drawerVisible: true,
            currentSelectedPort: currentSelectedPort,
            currentSelectedCargos: currentSelectedPort.cargos
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
            drawerVisible: false
        });
    };
    handleChange = value => {
        if (value !== "") {
            this.setState({
                selectedCargoType: value
            })
        }
    };

    render() {
        return <div>
            <div className="container">
                <MapIndex onSelect={this.showModal} portData={this.state.portData}/>
            </div>
            <Modal
                style={{textAlign: "center"}}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={false}
                mask={false}
                width={"300px"}
            >
                <Input.Group compact>
                    <Select placeholder="Select a type" onChange={this.handleChange}
                            value={this.state.selectedCargoType}>
                        {
                            this.state.currentSelectedCargos.map((item, index) => {
                                return <Option value={item.type} key={index}>{item.type}</Option>
                            })
                        }
                    </Select>
                    <InputNumber/>
                </Input.Group>
                <div style={{paddingTop: "10px"}}>
                    <Button type="primary" style={{width: "70%"}}>确认</Button>
                </div>
            </Modal>
            <Drawer
                title="分配情况汇总"
                placement={this.state.placement}
                onClose={this.onClose}
                visible={this.state.drawerVisible}
                key={this.state.placement}
                mask={false}
            >
                <CargoDistributionList/>
            </Drawer>
            {/*<HeaderTitle title={"To Do List"}/>*/}
            {/*<InputItem onAdd={this.handleAddItem}/>*/}
            {/*<ItemList items={this.state.itemList} onDelete={this.handleDeleteItem} onFinish={this.handleFinishItem}/>*/}
        </div>
    }
}

export default TodoList;
