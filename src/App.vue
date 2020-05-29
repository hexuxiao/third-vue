<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo='addTodo'></Header> -->
      <Header @addTodo="addTodo"></Header>
      <Main :todos="todos" :deleteTodo="deleteTodo" :updataOne="updataOne"></Main>
      <Footer :todos="todos" :updetaAll="updetaAll" :deleteAll="deleteAll"></Footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos_key")) || []
    };
  },
  methods: {
    addTodo(obj) {
      this.todos.unshift(obj);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    updataOne(index, val) {
      this.todos[index].isOver = val;
    },
    updetaAll(val) {
      this.todos.forEach(item => (item.isOver = val));
    },
    deleteAll() {
      this.todos = this.todos.filter(item => !item.isOver);
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(newVal, oldVal) {
        localStorage.setItem("todos_key", JSON.stringify(newVal));
      }
    }
  }
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
