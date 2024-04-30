import './style.css'
import '@mdi/font/css/materialdesignicons.css'
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "ag-grid-community/styles/ag-theme-balham.css"; // Optional Theme applied to the grid
import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as labsComponents from "vuetify/labs/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import store from './store/'
import router from './router'

const vuetify = createVuetify({
    directives,
    components: {
        ...components,
        ...labsComponents
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    }
} as createVuetify)



createApp(App)
    .use(store)
    .use(vuetify)
    .use(router)
    .mount('#app')
