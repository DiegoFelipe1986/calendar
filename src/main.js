import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import CalendarView from './components/CalendarView.vue';

createApp(App).use(store).use(router).component('CalendarView', CalendarView).mount('#app');
