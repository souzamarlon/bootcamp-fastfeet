import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {
    MoreHoriz,
    Create,
    DeleteForever,
    Add,
    SearchOutlined,
} from '@material-ui/icons';

import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import { Container, Header, Title, Button, Content, Search } from './styles';
import api from '~/services/api';
import history from '~/services/history';

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
            // console.tron.log(response.data);

            const listRecipient = response.data.map(item => ({
                ...item,
                index: response.data.indexOf(item) + 1,
            }));
            // setRecipient(listRecipient.sort((a, b) => a.index < b.index));
            setRecipient(listRecipient);
        }

        listAllRecipient();
    }, []);

    async function handleDelete(id) {
        console.tron.log(id);
        try {
            // eslint-disable-next-line no-alert
            if (window.confirm('Você realmente quer deletar?')) {
                await api.delete(`recipients/${id}`);

                toast.success('Sucesso ao deletar a encomenda!');
                history.push('/');
            }
        } catch (err) {
            toast.error('Erro ao deletar a encomenda!');
        }
    }

    return (
        <Container>
            <Title>
                <span>Gerenciando destinatários</span>
            </Title>
            <Header>
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
                        <Link to="/newrecipient">
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
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th className="action">Ações</th>
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
                            <td className="action">
                                <Popup
                                    trigger={
                                        <button
                                            type="button"
                                            className="button"
                                        >
                                            <MoreHoriz color="disabled" />
                                        </button>
                                    }
                                    position="bottom center"
                                    // on="hover"
                                >
                                    <Link to={`/editrecipient/${item.id}`}>
                                        <Create
                                            fontSize="small"
                                            color="primary"
                                        />
                                        <span className="options">Editar</span>
                                    </Link>

                                    <hr className="break-line" />
                                    <button
                                        type="button"
                                        className="actions"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <DeleteForever
                                            fontSize="small"
                                            color="secondary"
                                        />
                                        <span className="options">Excluir</span>
                                    </button>
                                </Popup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Content>
        </Container>
    );
}
