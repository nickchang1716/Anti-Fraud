<template>
  <nav class = "navbar navbar-expand-lg navbar-light bg-light">
    <div class = "container-fluid">
      <a class = "navbar-brand" href = "#">
        <img src="./assets/shield.png" width="30" height="30" alt="">
      </a>
      <div class = "collapse navbar-collapse" id = "navbarSupportedContent">
        <ul class = "navbar-nav me-auto mb-2 mb-lg-0">
          <li class = "nav-item">
            <router-link class = "nav-link" to = "/"> Home </router-link>
          </li>
          <li class = "nav-item">
            <router-link class = "nav-link" to = "/about"> About </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class = "container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding-left: 2em;
}
</style>
