<template>
  <!-- <nav class="flex flex-row gap-[10px] justify-center items-center h-[56px] bg-purple-600">
    <router-link to="/">Home</router-link> |
    <router-link to="/chatdocs">ChatDocs</router-link>
  </nav> -->
  <router-view />
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background-image: url(./assets/bg.jpg);
  background-size: cover;
  background-attachment: fixed;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>