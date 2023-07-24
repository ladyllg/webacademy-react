import { Navbar, Container, Nav, NavLink, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "./Cart/cart";

const Navigationbar = (props) => {

    return (
        // expand é para recolher a navbar num determinado ponto e collapseOnSelect é o comportamento que a navbar vai ter
        // Navbar.Toggle e Navbar.Collapse ajudam com a responsividade em dispositivos móveis.
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container className="p-1">
                <Navbar.Brand href="#home">Lojinha</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                        <NavLink eventKey="2" as={Link} to="/login">Login</NavLink>
                        <NavLink eventKey="3" as={Link} to="/signup">Signup</NavLink>
                        <NavDropdown title="Produtos" id="produtos-dropdown">
                            <NavDropdown.Item as={Link} to="/products/add">Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Editar</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Deletar</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Cart cartData={props.cartData} removeProduct={props.removeProduct} cartIsActive={props.cartIsActive}/>       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;