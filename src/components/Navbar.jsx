import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          AS
        </NavLink>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium ${
                    isActive ? 'text-black' : 'text-gray-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}