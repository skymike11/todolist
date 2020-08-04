import React, {Component} from "react";

class Item extends Component {

    handleDeleteItem = () => {
        const {onDelete, index} = this.props;
        onDelete(index);
    };
    handleFinishItem = () => {
        const {onFinish, item} = this.props;
        onFinish(item.id, item.status);
    };

    render() {
        return <div>
            <label style={{textDecorationLine: this.props.item.status ? 'line-through' : 'none'}}
                   onClick={this.handleFinishItem}>{this.props.item.content}</label>
            <button onClick={this.handleDeleteItem}>X</button>
        </div>

    }
}

export default Item;