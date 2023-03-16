import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue } from 'bootstrap-vue-next';

const app = createApp(App);
app.use(BootstrapVue);
app.use(router);
app.mount('#app');