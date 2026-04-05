import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the app', () => {
    render(<App />)
    expect(document.querySelector('.app')).toBeInTheDocument()
  })

  it('displays the logo', () => {
    render(<App />)
    expect(screen.getByText('MIDNIGHT')).toBeInTheDocument()
  })

  it('displays date and weekday', () => {
    render(<App />)
    expect(document.querySelector('.date-text')).toBeInTheDocument()
    expect(document.querySelector('.weekday-text')).toBeInTheDocument()
  })

  it('displays digital time by default', () => {
    render(<App />)
    expect(document.querySelector('.digital-time')).toBeInTheDocument()
  })

  it('displays world time cards', () => {
    render(<App />)
    expect(screen.getByText('Londra')).toBeInTheDocument()
    expect(screen.getByText('New York')).toBeInTheDocument()
  })

  it('displays bottom navigation', () => {
    render(<App />)
    expect(screen.getByText('Dijital')).toBeInTheDocument()
    expect(screen.getByText('Analog')).toBeInTheDocument()
  })

  it('has active state on Dijital nav item by default', () => {
    render(<App />)
    const digitalNav = screen.getByText('Dijital').closest('.nav-item')
    expect(digitalNav).toHaveClass('active')
  })

  it('switches to analog clock when Analog nav item clicked', () => {
    render(<App />)
    const analogNav = screen.getByText('Analog')
    fireEvent.click(analogNav)
    expect(document.querySelector('[data-testid="analog-clock"]')).toBeInTheDocument()
  })

  it('opens settings when settings button clicked', () => {
    render(<App />)
    const settingsButton = screen.getByLabelText('Ayarlar')
    fireEvent.click(settingsButton)
    expect(screen.getByTestId('settings-page')).toBeInTheDocument()
  })
})
