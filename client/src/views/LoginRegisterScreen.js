import React from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useForm } from '../hooks/useForm';

export const LoginRegisterScreen = () => {

    const initialState = {
        nombre : '',
        apellido : '',
        email : '',
        password : '',
        cpassword: ''
    }

    const [data, handleInputChange] = useForm(initialState);

    const {nombre, apellido, email, password, cpassword} = data;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <Container className="mt-5">

            <Row>
                <Col>
                    <h1>Register</h1>

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="nombre">
                                Nombre
                            </Label>
                            <Input
                                id="nombre"
                                name="nombre"
                                placeholder="Ingresar Nombre"
                                type="text"
                                required
                                minLength="5"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="apellido">
                                Apellido
                            </Label>
                            <Input
                                id="apellido"
                                name="apellido"
                                placeholder="Ingresar Apellido"
                                type="text"
                                required
                                minLength="5"
                                value={apellido}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Ingresar Email"
                                type="email"
                                required
                                value={email}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                Contraseña
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Ingresar contraseña"
                                type="password"
                                required
                                value={password}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="cpassword">
                                Confirmar Contraseña
                            </Label>
                            <Input
                                id="cpassword"
                                name="cpassword"
                                placeholder="Confirmar contraseña"
                                type="password"
                                required
                                value={cpassword}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <Button>
                            Crear Usuario
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <h1>Login</h1>
                </Col>
            </Row>

        </Container>
    )
}
