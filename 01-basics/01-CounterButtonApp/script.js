import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
    data() {
        return {
            counter: 0 
        }
    }
});

app.mount('#app');