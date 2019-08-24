import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储属性
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: false },
      { id: 3, title: "todo item 3", completed: false }
    ]
  },
  getters: {
    count: state => ++state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    // completedTodos: function (state) {
    //   return state.todos.filter(function (todo) {
    //     return todo.completed
    //   })
    // }
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    // completedTodosCount: function (state, getters) {
    //   return getters.completedTodos.length;
    // }
    getTodosById: state => id => state.todos.find(todo => todo.id == id),
    getTodosById: function (state) {
      // 处理东西
      // (function(id) {
      //   return statte.todos.find(function (todo) {
      //     return todo.id == id;
      //   })
      // })(id)
    }
  },
  mutations: {

  },
  actions: {

  }
})
