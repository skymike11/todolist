import axios from "axios";

const host = "https://5e9ec500fb467500166c4658.mockapi.io";
export default {

    getTodos: function () {
        return axios.get(host + "/todos");
    },
    updateTodo: function (id, status) {
        return axios.put(host + `/todos/${id}`, {"status": !status})
    },
    addTodo: function (item) {
        return axios.post(host + "/todos", item)
    },
    deleteTodo: function (id) {
        return axios.delete(host + `/todos/${id}`)
    }

}