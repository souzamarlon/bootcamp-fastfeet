import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input } from '@rocketseat/unform';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import Popup from 'reactjs-popup';

import { Link } from 'react-router-dom';
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
            console.tron.log(response.data);

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
                                <span className="status">
                                    {item.start_date || item.end_date
                                        ? 'Entregue'
                                        : 'Pendente'}
                                </span>
                            </td>
                            <td>
                                <Popup
                                    trigger={
                                        <button
                                            type="button"
                                            className="button"
                                        >
                                            <MoreHorizIcon />
                                        </button>
                                    }
                                    position="bottom center"
                                    on="hover"
                                >
                                    <Link to={`/view/${item.id}`}>
                                        <VisibilityIcon
                                            size={10}
                                            color="#FFF"
                                        />
                                        <span className="Option">
                                            Visualizar
                                        </span>
                                    </Link>

                                    <Link to={`/editstudent/${item.id}`}>
                                        <CreateIcon size={10} color="#FFF" />
                                        <span className="Option">Editar</span>
                                    </Link>

                                    <Link to={`/delete/${item.id}`}>
                                        <DeleteForeverIcon
                                            size={10}
                                            color="#DE3B3B"
                                        />
                                        <span className="Option">Excluir</span>
                                    </Link>

                                    {/* <Card title="Bottom Center" /> */}
                                </Popup>

                                <span className="actions">{item.email}</span>
                            </td>

                            {/* <td>
                                <button type="button" onClick={() => {}}>
                                    <Link to={`/editstudent/${item.id}`}>
                                        editar
                                    </Link>
                                </button>
                                <button
                                    type="button"
                                    className="delete"
                                    onClick={() => {}}
                                >
                                    apagar
                                </button>
                            </td> */}
                        </tr>
                    </tbody>
                ))}
            </Content>
        </>
    );
}
