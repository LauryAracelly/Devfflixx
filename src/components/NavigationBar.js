import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { useTheme } from '../contexts/themeContext';

function NavigationBar() {
  const { currentUser } = useAuth();

  const { toggle, handleToggle } = useTheme();

  return (
    <Navbar bg={toggle ? 'dark' : 'primary'} variant="dark" expand="sm">
      <Container>
        {
          currentUser
          ? <Navbar.Brand as={ Link } to="/">Bienvenidx, Que quieres ver? { currentUser.email }</Navbar.Brand>
          : <Navbar.Brand as={ Link } to="/">Bienvenidx a mi app!</Navbar.Brand>
        }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link onClick={handleToggle}>{toggle ? '🌙' : '🌞'}</Nav.Link>
            {
              currentUser
              ? <Nav.Link as={ Link } to="/profile">Mi perfil</Nav.Link>
              : <Nav.Link as={ Link } to="/signup">Regístrate aquí</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar