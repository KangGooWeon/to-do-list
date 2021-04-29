<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput @addTodoItem="addOneItem"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList
      :propsdata="todoItems"
      @removeItem="removeOneItem"
      @toggleItem="toggleOneItem"
    >
    </TodoList> -->
    <TodoList></TodoList>
    <!-- <TodoFooter @clearAll="clearAllItems"></TodoFooter> -->
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },

  methods: {
    // addOneItem(todoItem) {
    //   const obj = { completed: false, item: todoItem };
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem);
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index) {
    //   console.log("토글이유");
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems(){
    //   this.todoItems = [];
    //   localStorage.clear();
    // }
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>