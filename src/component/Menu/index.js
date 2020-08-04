import React, {Component} from "react";
import {NavLink as Link} from 'react-router-dom'

class Menu extends Component {
    render() {
        return <menu>
            <Link to={{
                pathname: '/'
            }}>ToDoList</Link> |
            <Link to={{
                pathname: '/finish'
            }}>MarkedToDoList</Link>
        </menu>
    }
}

export default Menu;