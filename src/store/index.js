import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export default new Vuex.Store({
  state: {
    todoItem: storage.fetch(),
  },
  mutations: {
    addOneItem(state, todoItem) {
      if(localStorage.getItem(todoItem)) return;
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItem.push(obj);
    },
    removeOneItem(state, payload) {
      console.log(payload.todoItem);
      localStorage.removeItem(payload.todoItem.item);
      state.todoItem.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItem[payload.index].completed = !state.todoItem[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      state.todoItem = [];
      localStorage.clear();
    },
  },
});
