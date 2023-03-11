import {createApp} from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routes';
import $pages from './data';

const app = createApp(App);

app.use(router)  // use() method to pass a plugin
// add config to access the $bus from anywhere
// app.config.globalProperties.$bus = $bus;  // if we use options API we can 
// use the global properties but if we don't we have to do this and how w einject 
// depends on the API choice in the component
app.provide('$bus', $bus);

// to have access to $pages in all components
// app.config.globalProperties.$pages = $pages;

// provide a globally accessible object then inject it in 
// the component that needs it
app.provide('$pages', $pages); // (key, value)

app.mount('#app');
