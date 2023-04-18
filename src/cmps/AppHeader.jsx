import { NavLink } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <section className="app-header main-container full">
      <section className="flex justify-between align-center">
        <h1>App Header</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </section>
    </section>
  )
}
