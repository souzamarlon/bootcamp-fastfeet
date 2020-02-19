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
                    <Link to="/packages">
                        <img src={logo} alt="Fastfeet" />
                    </Link>
                    <Link to="/packages"> ENCOMENDAS </Link>
                    <Link to="/deliverer"> ENTREGADORES </Link>
                    <Link to="/recipients"> DESTINATÁRIOS </Link>
                    <Link to="/problems"> PROBLEMAS </Link>
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
