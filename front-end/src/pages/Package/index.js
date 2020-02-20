import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Link } from 'react-router-dom';
import { Container, Title, Button, Content, List } from './styles';
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
            <Container>
                <Title>
                    <h1>Gerenciando alunos</h1>
                </Title>
                <Button>
                    <div>
                        <Link to="/newstudent">
                            <button type="button" onClick={() => {}}>
                                <strong>CADASTRAR</strong>
                            </button>
                        </Link>
                    </div>
                    <Form onSubmit={() => {}}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Buscar aluno"
                        />
                    </Form>
                </Button>
            </Container>
            <Content>
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>E-MAIL</th>
                        <th>IDADE</th>
                    </tr>
                </thead>

                <tbody>
                    {packages.map(item => (
                        <tr>
                            <td>
                                <span className="name">{item.name}</span>
                            </td>
                            <td>
                                <span className="email">{item.email}</span>
                            </td>
                            <td>
                                <span className="idade">{item.idade}</span>
                            </td>
                            <td>
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
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Content>
        </>
    );
}
