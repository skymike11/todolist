import React, {Component} from "react";
import Item from "../Item";

class ItemList extends Component {
    render() {
        return <div>
            {this.props.items.map((item, index) =>
                <Item item={item} key={index} index={index} onDelete={this.props.onDelete}
                      onFinish={this.props.onFinish}/>)}
        </div>

    }
}

export default ItemList;