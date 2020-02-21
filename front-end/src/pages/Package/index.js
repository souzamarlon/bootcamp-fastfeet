import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Link } from 'react-router-dom';
import { Container, Title, Button, Content, Search } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Package() {
    const [packages, setPackages] = useState([]);

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
                    <Form onSubmit={() => {}}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Buscar aluno"
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
                                <span className="status">Criar</span>
                            </td>
                            <td>
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
