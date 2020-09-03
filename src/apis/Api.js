import axios from "axios";
import store from "../store";
import { LOADING } from "../store/actionTypes";

const todoApi = axios.create({
  baseURL: "https://5e9ec500fb467500166c4658.mockapi.io",
});

todoApi.interceptors.request.use(
  (req) => {
    store.dispatch({ type: LOADING, payload: { loading: true } });
    return req;
  },
  (error) => error
);

todoApi.interceptors.response.use(
  (req) => {
    store.dispatch({ type: LOADING, payload: { loading: false } });
    return req;
  },
  (error) => error
);

export default {
  getTodos: function () {
    return todoApi.get("/todos");
  },
  updateTodo: function (id, status) {
    return todoApi.put(`/todos/${id}`, { status: !status });
  },
  addTodo: function (item) {
    return todoApi.post("/todos", item);
  },
  deleteTodo: function (id) {
    return todoApi.delete(`/todos/${id}`);
  },
};
