import React from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const Menu = () => {
    return (

        <Navbar
            color="vino"
            expand="md"
            dark
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
                    <LinkContainer to="/login">
                        <NavLink>
                            Login
                        </NavLink>
                    </LinkContainer>
                    </NavItem>

                </Nav>
                <NavbarText>
                    SALIR
                </NavbarText>
            </Collapse>
        </Navbar>

    )
}
