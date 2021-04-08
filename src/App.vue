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
@font-face {
  font-family: "Roboto-Light";
  src: local("Roboto"),
   url(./fonts/Roboto-Light.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto-Regular";
  src: local("Roboto"),
   url(./fonts/Roboto-Regular.ttf) format("truetype");
}

@font-face {
  font-family: 'ZillaSlab-Light';
  src: url(./fonts/ZillaSlab-Light.ttf) format("truetype");
}

@font-face {
  font-family: "ZillaSlab";
  src: local('ZillaSlab'),
    url(./fonts/ZillaSlab-Regular.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
