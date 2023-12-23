import { createRouter, createWebHistory } from 'vue-router';
import CalendarView from '../views/CalendarView.vue';
import ListView from '@/views/ListView.vue';


const routes = [
  { path: '/', redirect: '/calendar' },
  { path: '/calendar', component: CalendarView },
  { path: '/list', component: ListView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;