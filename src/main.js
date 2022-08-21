import { TroisJSVuePlugin } from 'troisjs'
import App from './App.vue'
import { createApp } from 'vue'
import WebsocketClient from './components/WebsocketClient.vue'


const app = createApp(App)

app.use(TroisJSVuePlugin)

app.component(
	'WebsocketClient', WebsocketClient
)

app.mount('#app')
