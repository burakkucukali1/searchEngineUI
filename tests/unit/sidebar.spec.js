import { shallowMount } from '@vue/test-utils'
import sidebar from '@/components/sidebar.vue'

describe('sidebar', () => {
  it('renders a div', () => {
    const wrapper = shallowMount(sidebar)
    expect(wrapper.contains('div')).toBe(true)
  })
})

describe('sidebar', () => {
  it('renders a div', () => {
    const wrapper = shallowMount(sidebar)
    expect(wrapper.contains('h3')).toBe(true)
  })
})

describe('sidebar', () => {
  it('renders a div', () => {
    const $route = { path: 'localhost:8080/profile' }
    const wrapper = shallowMount(sidebar, {
      mocks: {
        $route
      }
    })
    expect(wrapper.vm.$route.path).toBe($route.path)
  })
})
