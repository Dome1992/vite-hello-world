import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Title from './components/Title.vue';

createApp(App).component('Title', Title).mount('#app');
