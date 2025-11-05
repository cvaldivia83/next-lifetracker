import Header from "@/app/components/Header";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<Header />', () => {
  it('renders Header correctly', () => {
    render(<Header />);
    const header = screen.getByRole('navigation');
    expect(header).toBeInTheDocument();
  })

  it('uses semantic HTML with header tag', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    expect(header.tagName).toBe('HEADER')
  })

  it("has navigation with proper aria-label", () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAccessibleName()
  })

  it('has logo link with accessible name', () => {
    render(<Header />)
    const logoLink = screen.getByRole('link', { name: /home|inicio/i})
    expect(logoLink).toBeInTheDocument()
  })

  it('has elements that are keyboard accessible', () => {
    render(<Header />)
    const buttons = screen.getAllByRole('button')
    const links = screen.getAllByRole('link')

    const arr = [...buttons, ...links];
    arr.forEach((element) => {
      expect(element).not.toHaveAttribute('tabindex', '-1')
    })
  })

  it('has icons with proper labels', () => {
    render(<Header />)
    const icons = document.querySelectorAll('i')
    icons.forEach((icon) => {
      const hasAriaLabel = icon.hasAttribute('aria-label')
      expect(hasAriaLabel).toBe(true)
    })
  })

})