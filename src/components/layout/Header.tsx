import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/plataforma', label: 'Plataforma' },
  { to: '/simulador', label: 'Simulador' },
  { to: '/faq', label: 'FAQ' },
  { to: '/integrantes', label: 'Equipe' },
  { to: '/contato', label: 'Contato' },
]

function Header() {
  // useState real: controla a abertura/fechamento do menu mobile,
  // substituindo o classList.toggle("active") do js/script.js original.
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header>
      <nav className="relative flex items-center justify-between bg-primary px-[8%] py-5">
        <div className="text-2xl font-bold text-white">BraTech</div>

        <ul
          className={`${menuAberto ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-5 bg-primary p-5 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0`}
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuAberto(false)}
                className={({ isActive }) =>
                  `font-medium text-white ${isActive ? 'underline underline-offset-4' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          className="text-2xl leading-none text-white md:hidden"
        >
          {menuAberto ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  )
}

export default Header
