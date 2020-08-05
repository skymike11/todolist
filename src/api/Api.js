import axios from "axios";

const todoApi = axios.create({
    baseURL: "https://5e9ec500fb467500166c4658.mockapi.io"
});
export default {

    getTodos: function () {
        return todoApi.get("/todos");
    },
    updateTodo: function (id, status) {
        return todoApi.put(`/todos/${id}`, {"status": !status})
    },
    addTodo: function (item) {
        return todoApi.post("/todos", item)
    },
    deleteTodo: function (id) {
        return todoApi.delete(`/todos/${id}`)
    }

}
