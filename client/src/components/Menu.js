import React, { useContext, useEffect } from 'react'
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { UsuarioContext } from '../context/UsuarioContext';
import { useNavigate } from 'react-router';

export const Menu = () => {

    const {usuario, setUsuario} = useContext(UsuarioContext);
    const navigate = useNavigate();

    useEffect(() => {
    
        if(!usuario){
            navigate('/login');
        }

    }, [navigate,usuario])


    const logOut = () => {
        localStorage.removeItem('usuario');
        setUsuario(null);
        navigate("/login");
    }

    return (

        <Navbar
            color="vino"
            expand="md"
            dark
            full
        >
            <LinkContainer to="/">
                <NavbarBrand>
                    PROYECTO BASE
                </NavbarBrand>
            </LinkContainer>
            <NavbarToggler onClick={function noRefCheck() { }} />
            <Collapse navbar>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                    <LinkContainer to="/">
                        <NavLink>
                            Inicio
                        </NavLink>
                    </LinkContainer>
                    </NavItem>
                    <NavItem>
                    <LinkContainer to="/usuarios">
                        <NavLink>
                            Usuarios
                        </NavLink>
                    </LinkContainer>
                    </NavItem>

                </Nav>
                <NavbarText>
                    Bienvenido/a {usuario?.nombre} - <Button onClick={logOut} color="light">SALIR</Button>
                </NavbarText>
            </Collapse>
        </Navbar>

    )
}
