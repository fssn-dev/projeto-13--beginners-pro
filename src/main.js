import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// import { initializeApp } from "firebase/app";
// const firebaseConfig = process.env.VUE_APP_FIREBASE_CREDENTIALS
// const app = initializeApp(firebaseConfig);