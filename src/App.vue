<template>
  <div id="app">
    <p>App.vue:{{count}}</p>
    <p>App.vue:{{todos}}</p>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState } from "vuex";
export default {
  name: "app",
  // 3
  computed: mapState(["count", "todos"])
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
