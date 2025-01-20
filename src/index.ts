import type { App } from 'vue'
import BackToTop from './components/BackToTop.vue'

import EasyButton from './components/EasyButton.vue'
import GitHubCorner from './components/GitHubCorner.vue'

import './style/index.scss'

const components = [
  EasyButton,
  BackToTop,
  GitHubCorner,
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
  BackToTop,
  EasyButton,
}
