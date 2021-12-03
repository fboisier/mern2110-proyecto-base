import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { LoginRegisterScreen } from '../views/LoginRegisterScreen';
import { MainScreen } from '../views/MainScreen';
import { UsuariosPropioScreen } from '../views/UsuariosPropioScreen';
import { UsuariosScreen } from '../views/UsuariosScreen';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/login" element={<LoginRegisterScreen />} />
                <Route path="/usuarios" element={<UsuariosScreen />} />
                <Route path="/usuarios/propio" element={<UsuariosPropioScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
