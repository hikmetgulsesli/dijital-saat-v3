import { describe, it, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

test('App renders time display', () => {
  render(<App />)
  const container = document.querySelector('.container')
  expect(container).not.toBeNull()
})
