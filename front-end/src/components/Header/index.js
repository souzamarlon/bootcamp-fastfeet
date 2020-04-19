import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';
import history from '~/services/history';

import { Container, Content, Profile } from './styles';

export default function Header() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState({
        package: false,
        deliverer: false,
        recipient: false,
        problem: false,
    });

    const profile = useSelector(state => state.user.profile);

    function handleSignOut() {
        dispatch(signOut());
    }

    // Get the current location.
    const location = history.location.pathname;
    useEffect(() => {
        async function locationPath() {
            if (location.match('package')) {
                setOpen({ package: true });
            }
            if (location.match('deliverer')) {
                setOpen({ deliverer: true });
            }
            if (location.match('recipient')) {
                setOpen({ recipient: true });
            }
            if (location.match('problem')) {
                setOpen({ problem: true });
            }
        }

        locationPath();
    }, [location]);

    return (
        <Container>
            <Content open={open}>
                <nav>
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
