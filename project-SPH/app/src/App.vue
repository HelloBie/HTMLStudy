<template>
  <div id="app">
    <Header></Header>
	<router-view></router-view>
	<Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header/headerC.vue'
import Footer from './components/Footer/FooterC.vue'
import router from '@/router'


export default {
  name: 'App',
  router,
  components: {
    Header,
	Footer,
  },
  mounted() {
  	let res = this.$store.dispatch('categoryList');
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
