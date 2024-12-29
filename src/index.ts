import type { App } from 'vue'
import EasyButton from './components/EasyButton.vue'

import './style/index.scss'

const components = [
  EasyButton,
]

export function install(app: App): void {
  components.forEach((component) => {
    if (component.name) {
      app.component(component.name, component)
    }
  })
}

export default {
  install,
}

export {
  EasyButton,
}
