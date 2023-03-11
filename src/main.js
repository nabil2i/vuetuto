import {createApp} from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routes';
import $pages from './data';

const app = createApp(App);

app.use(router)  // use() method to pass a plugin
// add config to access the $bus from anywhere
app.config.globalProperties.$bus = $bus;

// to have access to $pages in all components
app.config.globalProperties.$pages = $pages;

app.mount('#app');
