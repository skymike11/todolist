import React, {Component} from "react";
import {Input, Button} from 'antd';

class InputItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    handleAddItem = () => {
        const {onAdd} = this.props;
        console.log(this.state.inputValue)
        onAdd(this.state.inputValue)
    };

    handleInputChange = (event) => {
        if (event && event.target && event.target.value) {
            let value = event.target.value;
            this.setState(() => ({inputValue: value}))
        }
    };

    render() {
        return (
            <div style={{width: "300px", alignContent: "center"}}>
                <label>
                    <Input placeholder="Please Input Your Note" onChange={event => this.handleInputChange(event)}/>
                </label>
                <Button type="primary" onClick={this.handleAddItem}>Add</Button>
            </div>)
    }
}

export default InputItem;