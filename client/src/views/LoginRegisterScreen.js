import React, { useContext, useEffect } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2'
import { axiosSinToken } from '../helpers/axios';
import { UsuarioContext } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';


export const LoginRegisterScreen = () => {

    const {usuario, setUsuario} = useContext(UsuarioContext);

    const navigate = useNavigate();

    useEffect(() => {
    
        if(usuario){
            navigate('/');
        }

    }, [navigate,usuario])

    const initialState = {
        nombre : '',
        apellido : '',
        correo : '',
        password : '',
        cpassword: ''
    }

    const [data, handleInputChange] = useForm(initialState);
    const [login, handleInputChangeLogin] = useForm({correo: '', password:''});

    const {nombre, apellido, correo, password, cpassword} = data;

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        axiosSinToken("auth/login", login, "POST").then(res => {
            console.log(res);
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido al Sistema',
                text: 'Logeado correctamente'
            });
            
            setUsuario(res.data);
            localStorage.setItem("usuario", JSON.stringify(res.data));
            // ya que el usuario se creo y está en el contexto, lo enviamos al inicio
            navigate("/");


        }).catch(err => {
            console.log(err.response);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.response.data.message
            })
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(password !== cpassword){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden'
            })
        }else{
            // LLAMAR A AXIOS PARA CREAR EL USUARIO
            axiosSinToken("auth/register", data, "POST").then(res => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Registro exitoso',
                    text: 'Ahora puedes iniciar sesión'
                });
                
                setUsuario(res.data);
                localStorage.setItem("usuario", JSON.stringify(res.data));
                // ya que el usuario se creo y está en el contexto, lo enviamos al inicio
                navigate("/");


            }).catch(err => {
                console.log(err.response);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: err.response.data.message
                })
            });

        }

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
                                name="correo"
                                placeholder="Ingresar Email"
                                type="email"
                                required
                                value={correo}
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

                    <Form onSubmit={handleSubmitLogin}>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="correo"
                                placeholder="Ingresar Email"
                                type="email"
                                required
                                value={login.correo}
                                onChange={handleInputChangeLogin}
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
                                value={login.password}
                                onChange={handleInputChangeLogin}
                            />
                        </FormGroup>
                        <Button>
                            Ingresar
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}
