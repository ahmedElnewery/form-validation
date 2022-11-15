<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TestForm />
    <!-- <TestRender :tags="['h1', 'h2','h3']"></TestRender> -->
  </div>
</template>

<script>
import TestForm from "./components/TestForm.vue";
// import TestRender from "./components/TestRender.vue";
export default {
  name: "App",
  components: {
    TestForm,
    // TestRender,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
