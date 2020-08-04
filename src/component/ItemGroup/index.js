import React, {Component} from "react";
import Item from "../Item"
import {ADD_ITEM} from "../../store/actionTypes";
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
    };

    render() {
        const initArray = [...Array(this.state.size).keys()];
        return <div>
            <label>
                <input type='text' ref={value => this.input = value}/>
            </label>
            <button onClick={this.addNewItem}>Add</button>
            {
                initArray.map((item, index) =>
                    <Item groupSize={this.state.size} key={index}/>)
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
    addItem: (inputValue) => dispatch({type: ADD_ITEM, inputValue: inputValue})
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemGroup);
