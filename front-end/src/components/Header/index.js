import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSignOut() {
        dispatch(signOut());
    }
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/student">
                        <img src={logo} alt="Fastfeet" />
                    </Link>
                    <Link to="/student"> ALUNOS </Link>
                    <Link to="/plans"> PLANOS </Link>
                    <Link to="/membership"> MATRÍCULAS </Link>
                    <Link to="/help-order"> PEDIDOS DE AUXÍLIO </Link>
                </nav>

                <Profile>
                    <div>
                        <strong>{profile.name}</strong>
                        <button type="button" onClick={handleSignOut}>
                            Sair do sistema
                        </button>
                    </div>
                </Profile>
            </Content>
        </Container>
    );
}
