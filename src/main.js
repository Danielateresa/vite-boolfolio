import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import * as bootstrap from 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedinIn, faGithub, faChevronLeft, faChevronRight)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
