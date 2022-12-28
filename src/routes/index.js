import React, { useContext } from 'react'

import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';

import { AuthContext } from '../contexts/auth';

export default function Routes() {

    const { loading, logado } = useContext(AuthContext);
    return (
        logado ? <AppRoutes /> : <AuthRoutes />
    );
}