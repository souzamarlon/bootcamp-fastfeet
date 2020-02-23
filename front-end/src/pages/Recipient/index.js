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
import { Container, Title, Button, Content, Search } from './styles';
import api from '~/services/api';

export default function Recipient() {
    const [recipient, setRecipient] = useState([]);

    const searchRecipient = useCallback(({ search }) => {
        async function searchTool() {
            const response = await api.get(`recipients`, {
                params: { q: search },
            });

            const listRecipient = response.data.map(item => ({
                ...item,
                index: response.data.indexOf(item) + 0 + 1,
            }));

            // console.tron.log(response.data);

            // setRecipient(listRecipient.sort((a, b) => a.index < b.index));
            setRecipient(listRecipient);
        }
        searchTool();
    }, []);

    useEffect(() => {
        async function listAllRecipient() {
            const response = await api.get('recipients');
            console.tron.log(response.data);

            const listRecipient = response.data.map(item => ({
                ...item,
                index: response.data.indexOf(item) + 1,
            }));
            // setRecipient(listRecipient.sort((a, b) => a.index < b.index));
            setRecipient(listRecipient);
        }

        listAllRecipient();
    }, []);
    return (
        <>
            <Title>
                <span>Gerenciando destinatários</span>
            </Title>
            <Container>
                <Search>
                    <SearchOutlined size={19} color="disabled" />
                    <Form onSubmit={searchRecipient}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Buscar por destinatários"
                        />
                    </Form>
                </Search>
                <Button>
                    <div>
                        <Link to="/newstudent">
                            <button type="button" onClick={() => {}}>
                                <Add size={19} color="#FFF" />
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
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th className="actions">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {recipient.map(item => (
                        <tr>
                            <td>
                                <span className="id">{`#${item.index}`}</span>
                            </td>
                            <td>
                                <span className="name">{item.name}</span>
                            </td>
                            <td>
                                <span className="Endereço">
                                    {`${item.street},
                                        ${item.number},
                                        ${item.city},
                                        ${item.state}`}
                                </span>
                            </td>
                            <td className="actions">
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
        </>
    );
}
