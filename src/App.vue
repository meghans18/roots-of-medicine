<template>
  <div id="app container">
    <div>
      <!--  style="border-bottom: 8px solid black;" -->
    <iowa-header/>
    </div>
    <br>
    <b-col class="col-12 text-center">
      <NavBar />
    </b-col>

    <b-col class="col-12 text-center">
    <router-view/>
    </b-col>

    <div class="footerDiv">
      <iowa-footer/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import IowaHeader from './components/IowaHeader.vue'
import IowaFooter from './components/IowaFooter.vue'
export default {
  components: {
    NavBar,
    IowaHeader,
    IowaFooter,
  },
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(221, 188, 2);
}
</style>
