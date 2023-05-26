import { NavLink } from "react-router-dom"
import Container from "../ui/Container"
import Logo from "../ui/Logo"

const Header = () => {
  return (
    <header className="bg-white w-full py-4">
      <Container>
        <div className="flex items-center gap-4">
          <div className="mr-4">
            <Logo />
          </div>
          <NavLink
              to="/cv"
              className={({isActive}) => `${isActive ? 'text-blue-500': ''}`}
          >
              CV
          </NavLink>
          <NavLink
              to="/offers"
              className={({isActive}) => `${isActive ? 'text-blue-500': ''}`}
          >
              Mis ofertas
          </NavLink>
        </div>
      </Container>
    </header>
  )
}

export default Header