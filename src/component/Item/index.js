import React, {Component} from "react";

class Item extends Component {
    render() {
        return <div>
            <label>{this.props.value}</label>
            <button>X</button>
        </div>

    }
}

export default Item;