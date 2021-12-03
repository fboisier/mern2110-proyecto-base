import React, { useEffect, useState } from 'react'
import { Container, Table } from 'reactstrap';
import Swal from 'sweetalert2';
import { Menu } from '../components/Menu'
import { axiosConToken } from '../helpers/axios';

export const UsuariosPropioScreen = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        
        axiosConToken("usuarios/propio").then(res => {
            setUsuarios(res.data);
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.response.data.message
            })
        });

    }, [])



    return (
        <>
            <Menu />

            <Container className="mt-5">

            

            <h1>Usuarios PROPIOS</h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario._id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.correo}</td>
                        </tr> 
                        ))}
                </tbody>
            </Table>

            </Container>
        </>
    )
}
