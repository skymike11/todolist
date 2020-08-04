import React, {Component} from "react";

class Item extends Component {

    handleDeleteItem = () => {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    };

    render() {
        return <div>
            <label>{this.props.value}</label>
            <button onClick={this.handleDeleteItem}>X</button>
        </div>

    }
}

export default Item;