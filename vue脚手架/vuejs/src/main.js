import Vue from 'vue';
import App from './App';
import vuex from 'vuex';
Vue.config.productionTip = false;

Vue.use(vuex);

new Vue({
    el:'#app',
    render:h=>h(App),
})