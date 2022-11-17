import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronDown);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
