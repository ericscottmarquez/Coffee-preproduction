import Vue from 'vue'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'))
const app = new Vue({
    el: domElement,
    render: h => h(RootComponent)
  })

  console.log(app)
})

