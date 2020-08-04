import React, {Component} from "react";
import {ADD_ITEM, DELETE_ITEM, FETCH_ITEM, FINISH_ITEM} from "../../store/actionTypes";
import {connect} from "react-redux";
import ItemList from "../ItemList";
import Api from "../../api/Api";

class MarkedItemGroup extends Component {
    constructor(props) {
        super(props);
        this.initTodoList();
        this.state = {
            size: 0,
            inputValue: ""
        }
    }

    handleAddItem = () => {
        let inputValue = this.input.value;
        let that = this;
        if (inputValue !== "") {
            Api.addTodo({content: inputValue, status: false}).then(res => {
                this.input.value = "";
                that.initTodoList();
            });
        } else {
            alert("No Allow Empty");
        }
    };

    handleDeleteItem = (id) => {
        let that = this;
        Api.deleteTodo(id).then(res => {
            that.initTodoList();
        })
    };

    handleFinishItem = (id, status) => {
        let that = this;
        Api.updateTodo(id, status).then(res => {
            that.initTodoList();
        })
    };

    initTodoList = () => {
        Api.getTodos().then(res => {
            this.props.fetchItems(res.data)
        });
    };

    render() {
        return <div>
            <h3>Marked To Do List</h3>
            <label>
                <input type='text' ref={value => this.input = value}/>
            </label>
            <button onClick={this.handleAddItem}>Add</button>
            <ItemList items={this.props.itemList.filter(item => item.status === true)} onDelete={this.handleDeleteItem}
                      onFinish={this.handleFinishItem}/>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        itemList: state.itemList
    }
};

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch({type: ADD_ITEM, item: item}),
    deleteItem: (index) => dispatch({type: DELETE_ITEM, index: index}),
    finishItem: (index) => dispatch({type: FINISH_ITEM, index: index}),
    fetchItems: (itemList) => dispatch({type: FETCH_ITEM, itemList: itemList})
});

export default connect(mapStateToProps, mapDispatchToProps)(MarkedItemGroup);
