import Header from "@/app/components/Header/Header";
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

  it("has navigation with proper accessibility", () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('has logo link with accessible name', () => {
    render(<Header />)
    const logoLink = screen.getByRole('link', { name: /home/i})
    expect(logoLink).toBeInTheDocument()
  })

  it('has elements that are keyboard accessible', () => {
    render(<Header />)
    const links = screen.getAllByRole('link')

    links.forEach((element) => {
      expect(element).not.toHaveAttribute('tabindex', '-1')
    })
  })

  it('has icons with proper labels', () => {
    render(<Header />)
    const icons = document.querySelectorAll('i')
    icons.forEach((icon) => {
      const hasAriaLabel = icon.hasAttribute('aria-hidden')
      expect(hasAriaLabel).toBe(true)
    })
  })

})