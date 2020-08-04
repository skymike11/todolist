import React, {Component} from "react";
import Item from "../Item"

class ItemGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 3
        }
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];
        return <div>
            <label>
                <input/>
            </label>
            <button>Add</button>
            {
                initArray.map((item, index) =>
                    <Item groupSize={this.state.size} key={index}/>)
            }
        </div>

    }
}

export default ItemGroup;