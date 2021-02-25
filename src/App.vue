<template>
  <div id="app">
    <header><h1>Meetup</h1>
    </header> 
    <div id="nav"> 
      <router-link to="/">UPCOMING EVENTS</router-link> |
      <router-link to="/previousevents">PREVIOUS EVENTS</router-link>
    </div>
      <router-view />
    <footer><p>2021 Meetup</p>
   </footer> 
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'App',

}
</script>

<style lang="scss">
header {
  background-color:#FFAE42;
  height: 30vh;
  color: white;
  text-align: center;
}
header > h1 {
  font-size: 50px;
}
body {
  background-color:#F5F5F5;
  margin-left: 0;
  margin-right: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  text-align: center;
  padding: 1%;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #FFAE42;
    }
  }
}
footer {
  background-color:#212121;
  height: 20vh;
  color: white;
  text-align: center;
}
footer > p {
  padding: 50px;
}
</style>
