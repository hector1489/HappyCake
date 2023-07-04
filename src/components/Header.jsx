import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header= () => {
  return (
    <>
      <Navbar className='navbar'>
        <Container className='justify-content-start'>
          <Link to="/" className="text-white ms-3 text-decoration-none">
          🏠 Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          📔 Contacto
          </Link>
        </Container>
         <Navbar.Brand className='nav-title'>Happy Cake 🍰</Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Header
