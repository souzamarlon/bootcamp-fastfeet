import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {
    MoreHoriz,
    Create,
    DeleteForever,
    Add,
    SearchOutlined,
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@material-ui/icons';

import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import history from '~/services/history';

import {
    Container,
    Header,
    Title,
    Button,
    Content,
    Search,
    PageActions,
} from './styles';

export default function Recipient() {
    const [recipient, setRecipient] = useState([]);
    const [page, setPage] = useState(1);

    const searchRecipient = useCallback(
        ({ search }) => {
            async function searchTool() {
                const response = await api.get(`recipients`, {
                    params: { q: search, page, per_page: 5 },
                });

                setRecipient(response.data.sort((a, b) => a.id - b.id));
                // setRecipient(listRecipient);
            }
            searchTool();
        },
        [page]
    );

    useEffect(() => {
        async function listAllRecipient() {
            const response = await api.get('recipients', {
                params: { page, per_page: 5 },
            });

            setRecipient(response.data.sort((a, b) => a.id - b.id));
            // setRecipient(listRecipient);
        }

        listAllRecipient();
    }, [page]);

    async function handleDelete(id) {
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

    function handlePage(action) {
        // const count = action === 'back' ? page - 1 : page + 1;
        setPage(action === 'back' ? page - 1 : page + 1);
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
                                <span className="id">{`#${item.id}`}</span>
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
                                    contentStyle={{
                                        width: '150px',
                                        borderRadius: '5%',
                                    }}
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
                <PageActions>
                    <button
                        className="pages-button"
                        type="button"
                        disabled={page < 2}
                        onClick={() => handlePage('back')}
                    >
                        <KeyboardArrowLeft />
                        <strong className="page-before">Anterior</strong>
                    </button>

                    <span className="page-number">{`Página ${page}`}</span>

                    <button
                        className="pages-button"
                        type="button"
                        disabled={recipient.length <= 0}
                        onClick={() => handlePage('next')}
                    >
                        <strong className="page-next">Próximo</strong>
                        <KeyboardArrowRight />
                    </button>
                </PageActions>
            </Content>
        </Container>
    );
}
