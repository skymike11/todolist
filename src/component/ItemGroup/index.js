import React, {Component} from "react";
import Item from "../Item"
import {ADD_ITEM, DELETE_ITEM} from "../../store/actionTypes";
import {connect} from "react-redux";

class ItemGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 3,
            inputValue: ""
        }
    }

    addNewItem = () => {
        let inputValue = this.input.value;
        this.props.addItem(inputValue);
        this.input.value = ""
    };

    handleDeleteItem = (index) =>{
        this.props.deleteItem(index);
    };

    render() {
        const itemList = this.props.itemList;
        return <div>
            <label>
                <input type='text' ref={value => this.input = value}/>
            </label>
            <button onClick={this.addNewItem}>Add</button>
            {
                itemList.map((item, index) =>
                    <Item value={item} key={index} index={index} deleteItem={this.handleDeleteItem}/>)
            }
        </div>
    }
}

const mapStateToProps = state => {
    return {
        itemList: state.itemList
    }
};

const mapDispatchToProps = dispatch => ({
    addItem: (inputValue) => dispatch({type: ADD_ITEM, inputValue: inputValue}),
    deleteItem : (index) => dispatch({type: DELETE_ITEM, index: index})
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemGroup);
