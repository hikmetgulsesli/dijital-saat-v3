import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

test('App renders time display', () => {
  render(<App />)
  const app = document.querySelector('.app')
  expect(app).not.toBeNull()
})
