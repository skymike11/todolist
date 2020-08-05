import React, {Component} from "react";
import {NavLink as Link} from 'react-router-dom'
import {Menu} from 'antd';

class TopMenu extends Component {

    state = {
        current: 'todolist',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;
        return <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="todolist">
                To do List
                <Link to='/'/>
            </Menu.Item>
            <Menu.Item key="markedtodolist">
                Marked to do List
                <Link to='/finish'/>
            </Menu.Item>
        </Menu>
    }
}

export default TopMenu;