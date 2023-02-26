import React from 'react'
import { render, screen, it, expect } from '@testing-library/react'
import App from './App'

it('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
