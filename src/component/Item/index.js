import React, {Component} from "react";

class Item extends Component {

    handleDeleteItem = () => {
        const {onDelete, item} = this.props;
        onDelete(item.id);
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