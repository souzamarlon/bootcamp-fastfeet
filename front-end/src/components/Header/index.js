import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';
import history from '~/services/history';

import { Container, Content, Profile } from './styles';

export default function Header() {
    const [open, setOpen] = useState({
        package: false,
        deliverer: false,
        recipient: false,
        problem: false,
    });
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSignOut() {
        dispatch(signOut());
    }
    useEffect(() => {
        async function locationPath() {
            if (history.location.pathname === '/packages') {
                setOpen({ package: true });
            }
            if (history.location.pathname === '/deliverers') {
                setOpen({ deliverer: true });
            }
            if (history.location.pathname === '/recipients') {
                setOpen({ recipient: true });
            }
            if (history.location.pathname === '/problems') {
                setOpen({ problem: true });
            }
        }

        locationPath();
    }, []);

    console.tron.log(open);

    return (
        <Container>
            <Content open={open}>
                <nav>
                    <Link to="/packages">
                        <img src={logo} alt="Fastfeet" />
                    </Link>
                    <Link
                        to="/packages"
                        STYLE={open.package ? 'color: #000000 ' : null}
                    >
                        ENCOMENDAS
                    </Link>
                    <Link
                        to="/deliverers"
                        STYLE={open.deliverer ? 'color: #000000 ' : null}
                    >
                        ENTREGADORES
                    </Link>
                    <Link
                        to="/recipients"
                        STYLE={open.recipient ? 'color: #000000 ' : null}
                    >
                        DESTINATÁRIOS
                    </Link>
                    <Link
                        to="/problems"
                        STYLE={open.problem ? 'color: #000000 ' : null}
                    >
                        PROBLEMAS
                    </Link>
                </nav>
            </Content>
            <Profile>
                <div>
                    <strong>{profile.name}</strong>
                    <button type="button" onClick={handleSignOut}>
                        Sair do sistema
                    </button>
                </div>
            </Profile>
        </Container>
    );
}
