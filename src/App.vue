<template>
  <div id="app">
    <h1>App.vue:{{count}}</h1>
    <!-- <p>App.vue:{{todos}}</p> -->
    <!-- <Count /> -->
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(3)}}</p>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    Count
  },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ])
  // 3
  // computed: mapState(["count", "todos"])

  // computed: {
  //   count() {
  //     return this.$store.getters.getCount;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  // }

  // 2
  // components: mapState({
  //   // count:function(state){
  //   //   return state.count
  //   // },
  //   count:state => state.count,
  //   todos:state => state.todos

  // }),
  // 写法1
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }
};
</script>

<style>
</style>
