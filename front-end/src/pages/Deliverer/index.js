import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {
    MoreHoriz,
    Visibility,
    Create,
    DeleteForever,
    Add,
    SearchOutlined,
} from '@material-ui/icons';

import Popup from 'reactjs-popup';

import { Link } from 'react-router-dom';
import { deepPurple } from '@material-ui/core/colors';
import { Container, Header, Title, Button, Content, Search } from './styles';
import api from '~/services/api';

export default function Deliverer() {
    const [deliverer, setDeliverer] = useState([]);

    const searchDeliverers = useCallback(({ search }) => {
        async function searchTool() {
            const response = await api.get(`deliverers`, {
                params: { q: search },
            });

            const listDeliverer = response.data.map(item => ({
                ...item,
                index: response.data.indexOf(item) + 0 + 1,
            }));

            // console.tron.log(response.data);

            // setDeliverer(listDeliverer.sort((a, b) => a.index < b.index));
            setDeliverer(listDeliverer);
        }
        searchTool();
    }, []);

    useEffect(() => {
        async function listAllDeliverer() {
            const response = await api.get('deliverers');
            console.tron.log(response.data);

            const listDeliverer = response.data.map(item => ({
                ...item,
                index: response.data.indexOf(item) + 1,
            }));
            // setDeliverer(listDeliverer.sort((a, b) => a.index < b.index));
            setDeliverer(listDeliverer);
        }

        listAllDeliverer();
    }, []);
    return (
        <Container>
            <Title>
                <span>Gerenciando entregadores</span>
            </Title>
            <Header>
                <Search>
                    <SearchOutlined size={19} color="disabled" />
                    <Form onSubmit={searchDeliverers}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Buscar por entregadores"
                        />
                    </Form>
                </Search>
                <Button>
                    <div>
                        <Link to="/newdeliverer">
                            <button type="button" onClick={() => {}}>
                                <Add size={19} color="#FFF" />
                                <strong>CADASTRAR</strong>
                            </button>
                        </Link>
                    </div>
                </Button>
            </Header>

            <Content>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {deliverer.map(item => (
                        <tr>
                            <td>
                                <span className="id">{`#${item.index}`}</span>
                            </td>
                            <td>
                                <img
                                    src={
                                        item.avatar
                                            ? item.avatar.url
                                            : 'https://api.adorable.io/avatars/40/abott@adorable.png'
                                    }
                                    alt=""
                                />
                            </td>
                            <td>
                                <span className="name">{item.name}</span>
                            </td>
                            <td>
                                <span className="email">{item.email}</span>
                            </td>
                            <td>
                                <Popup
                                    trigger={
                                        <button
                                            type="button"
                                            className="button"
                                        >
                                            <MoreHoriz />
                                        </button>
                                    }
                                    position="bottom center"
                                    on="hover"
                                >
                                    <Link to={`/view/${item.id}`}>
                                        <Visibility
                                            fontSize="small"
                                            style={{ color: deepPurple[400] }}
                                        />
                                        <span className="Option">
                                            Visualizar
                                        </span>
                                    </Link>

                                    <Link to={`/edit/${item.id}`}>
                                        <Create
                                            fontSize="small"
                                            color="primary"
                                        />
                                        <span className="Option">Editar</span>
                                    </Link>
                                    <Link to={`/delete/${item.id}`}>
                                        <DeleteForever
                                            fontSize="small"
                                            color="secondary"
                                        />
                                        <span className="Option">Excluir</span>
                                    </Link>
                                </Popup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Content>
        </Container>
    );
}
