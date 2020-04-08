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
            // Get the current location.
            const location = history.location.pathname;

            if (
                location === '/packages' ||
                location === '/newpackages' ||
                location.match('/editpackage.*/')
            ) {
                setOpen({ package: true });
            }
            if (
                location === '/deliverers' ||
                location === '/newdeliverer' ||
                location.match('/editdeliverer.*/')
            ) {
                setOpen({ deliverer: true });
            }
            if (
                location === '/recipients' ||
                location === '/newrecipient' ||
                location.match('/editrecipient.*/')
            ) {
                setOpen({ recipient: true });
            }
            if (location === '/problems') {
                setOpen({ problem: true });
            }
        }

        locationPath();
    }, []);

    return (
        <Container>
            <Content open={open}>
                <nav media="(min-width: 768px)">
                    <Link to="/packages">
                        <img src={logo} alt="Fastfeet" />
                    </Link>
                    <Link
                        to="/packages"
                        className={open.package ? 'active' : null}
                    >
                        ENCOMENDAS
                    </Link>
                    <Link
                        to="/deliverers"
                        className={open.deliverer ? 'active' : null}
                    >
                        ENTREGADORES
                    </Link>
                    <Link
                        to="/recipients"
                        className={open.recipient ? 'active' : null}
                    >
                        DESTINATÁRIOS
                    </Link>
                    <Link
                        to="/problems"
                        className={open.problem ? 'active' : null}
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
