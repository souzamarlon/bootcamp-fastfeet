import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {
    MoreHoriz,
    Visibility,
    Create,
    DeleteForever,
} from '@material-ui/icons';

import Popup from 'reactjs-popup';

import { Link } from 'react-router-dom';
import { deepPurple } from '@material-ui/core/colors';
import DeliveryStatus from '~/components/DeliveryStatus';
import { Container, Title, Button, Content, Search } from './styles';
import api from '~/services/api';

export default function Package() {
    const [packages, setPackages] = useState([]);

    const searchProducts = useCallback(({ search }) => {
        async function searchTool() {
            const response = await api.get(`packages`, {
                params: { q: search },
            });

            console.tron.log(response.data);

            setPackages(response.data);
        }
        searchTool();
    }, []);

    useEffect(() => {
        async function listStudents() {
            const response = await api.get('packages');
            // console.tron.log(response.data);

            setPackages(response.data);
        }

        listStudents();
    }, []);
    return (
        <>
            <Title>
                <span>Gerenciando encomendas</span>
            </Title>
            <Container>
                <Search>
                    <Form onSubmit={searchProducts}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Buscar por encomendas"
                        />
                    </Form>
                </Search>
                <Button>
                    <div>
                        <Link to="/newstudent">
                            <button type="button" onClick={() => {}}>
                                <strong>CADASTRAR</strong>
                            </button>
                        </Link>
                    </div>
                </Button>
            </Container>

            <Content>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Destinatário</th>
                        <th>Entregador</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                {packages.map(item => (
                    <tbody>
                        <tr>
                            <td>
                                <span className="ID">{item.id}</span>
                            </td>
                            <td>
                                <span className="recipient">
                                    {item.recipient.name}
                                </span>
                            </td>
                            <td>
                                <span className="deliverer">
                                    {item.deliveryman.name}
                                </span>
                            </td>
                            <td>
                                <span className="city">
                                    {item.recipient.city}
                                </span>
                            </td>
                            <td>
                                <span className="state">
                                    {item.recipient.state}
                                </span>
                            </td>
                            <td>
                                <DeliveryStatus data={item} />
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
                    </tbody>
                ))}
            </Content>
        </>
    );
}
