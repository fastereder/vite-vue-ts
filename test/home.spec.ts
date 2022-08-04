import { mount } from '@vue/test-utils'
import HomePage from '../src/pages/HomePage.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

const head = createHead()
const pinia = createPinia()

describe('HelloWorld.vue', () => {
  it('should renders is page content is correct', () => {
    const testMessage = 'Hello Pinia'
    const wrapper = mount(HomePage, {
      global: {
        plugins: [head, pinia]
      }
    })

    expect(wrapper.text()).toBe(testMessage)
  })

  // it('should render if props value is correct', () => {
  //   const testMessage = 'Happy People'
  //   const wrapper = mount(HomePage, {
  //     global: {
  //       plugins: [head, pinia]
  //     }
  //   })

  //   console.log('wrapper', wrapper.vm.message)

  //   expect(wrapper.vm.message).toBe(testMessage)
  // })
})
