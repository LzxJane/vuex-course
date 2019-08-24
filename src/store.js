import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储属性
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: true },
      { id: 3, title: "todo item 3", completed: false }
    ]
  },
  // 获取原有状态，添加修饰，并不会改变原有状态
  getters: {
    count: state => state.count,
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
    // getTodosById: function (state) {
    //   处理东西
    //   (function(id) {
    //     return statte.todos.find(function (todo) {
    //       return todo.id == id;
    //     })
    //   })(id)
    // }
  },
  // 改变状态
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount,
    setTodos: (state, todos) => state.todos = todos
  },
  // 调用mutations的东西,异步(耗时)
  actions: {
    incrementCountAsync: ({ commit }) => {
      setTimeout(() => {
        // 解构
        // const object = {
        //   name: "李照璇",
        //   age:21
        // }
        // const name = object.name
        // context/* = this.$store */
        commit("incrementCount")
      }, 2000)
    },
    decrementCountAsync: (context, payload) => {
      setTimeout(() => {
        context.commit("decrementCount", payload)
      }, 1000)
    },
    async fetchDataAsync(context) {
      // 解决异步出现混乱的情况
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
      // console.log(response);
      context.commit("setTodos", response.data)
    }
  }
})
