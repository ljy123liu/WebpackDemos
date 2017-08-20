import FastClick from 'fastclick';
import Vue from 'vue'; // get vue
import VueProgressBar from 'vue-progressbar'; // get vue-progressbar
import InfiniteScroll from 'vue-infinite-scroll'; // get vue-infinite-scroll

import App from './app.vue'; // get root module
import router from './router';
import store from './store'; // get vuex -> store

FastClick.attach(document.body); // init fastclick
const options = {
    color: '#fff',
    failedColor: '#874b4b',
    thickness: '3px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s'
    },
    autoRevert: true,
    location: 'top',
    inverse: false
};
Vue.use(VueProgressBar, options);
Vue.use(InfiniteScroll);

// init
//// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');