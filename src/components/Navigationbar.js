import { Navbar, Nav, NavLink, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink eventKey="2" as={Link} to="/login">Login</NavLink>
                    <NavLink eventKey="3" as={Link} to="/signup">Signup</NavLink>
                    <NavDropdown title="Produtos" id="produtos-dropdown">
                        <NavDropdown.Item href="#action/3.1">Cadastrar</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Editar</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Deletar</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;