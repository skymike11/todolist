import React, {Component} from "react";
import {Input, Button} from 'antd';

class InputItem extends Component {
    handleAddItem =()=>{
        const {onAdd} = this.props;
        onAdd(this.input.value)
        this.input.value = "";
    };
    render() {
        return (
            <div style={{width: "300px", alignContent: "center"}}>
                <label>
                    <Input placeholder="Please Input Your Note" ref={value => this.input = value}/>
                </label>
                <Button type="primary" onClick={this.handleAddItem}>Add</Button>
            </div>)
    }
}

export default InputItem;