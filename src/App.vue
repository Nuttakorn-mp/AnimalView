<template>
  <div id="app">
    <!-- <p>aaaaaaaaaaaa</p> -->
    <!-- <p class="header-name">
      <img src="./assets/original.png" style="width: 269px" />
    </p> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> C:\Users\Admin\Desktop\view\client-side\src\assets\original.png-->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.header-name {
  position: absolute;
  left: 670px;
  top: 80px;
  font-size: xx-large;
  font: bold;
  left: 80px;
  top: -5px;
}
</style>
