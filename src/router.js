import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

// Import the new components
import NotificationPage from './views/Notifications.vue';
import SettingsPage from './views/Settings.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Add new routes for the new icons
  {
    path: '/notifications',
    name: 'Notifications',
    component: NotificationPage,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;