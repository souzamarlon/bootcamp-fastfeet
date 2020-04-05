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
import recipientIcon from '~/assets/recipient.svg';
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
    ButtonSwitchPages,
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

                // setRecipient(response.data.sort((a, b) => a.id - b.id));
                setRecipient(response.data);
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

            // setRecipient(response.data.sort((a, b) => a.id - b.id));
            setRecipient(response.data);
        }

        listAllRecipient();
    }, [page]);

    async function handleDelete(id) {
        try {
            // eslint-disable-next-line no-alert
            if (window.confirm('Você realmente quer deletar?')) {
                await api.delete(`recipients/${id}`);

                toast.success('Sucesso ao deletar o destinatário!');
                history.push('/recipients');
            }
        } catch (err) {
            toast.error('Erro ao deletar o destinatário!');
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
                    <Link to="/newrecipient">
                        <div>
                            <Add style={{ fontSize: 19 }} color="#FFF" />
                            <strong>CADASTRAR</strong>
                        </div>
                    </Link>
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
                {recipient.length ? (
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
                                            <span className="options">
                                                Editar
                                            </span>
                                        </Link>

                                        <hr className="break-line" />
                                        <button
                                            type="button"
                                            className="actions"
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                        >
                                            <DeleteForever
                                                fontSize="small"
                                                color="secondary"
                                            />
                                            <span className="options">
                                                Excluir
                                            </span>
                                        </button>
                                    </Popup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    <div className="recipient-icon">
                        <img
                            src={recipientIcon}
                            className="recipient-img"
                            alt=""
                        />

                        <h1 className="recipient-icon">
                            Não encontramos mais destinatários!
                        </h1>
                    </div>
                )}
                <PageActions>
                    <ButtonSwitchPages
                        disabled={page < 2}
                        onClick={() => handlePage('back')}
                    >
                        <div className="button-goback">
                            <KeyboardArrowLeft />
                            <strong className="text-goback">Anterior</strong>
                        </div>
                    </ButtonSwitchPages>
                    <span className="page-number">{`Página ${page}`}</span>
                    <ButtonSwitchPages
                        disabled={recipient.length <= 0}
                        onClick={() => handlePage('next')}
                    >
                        <div className="button-next">
                            <strong className="text-next">Próximo</strong>
                            <KeyboardArrowRight />
                        </div>
                    </ButtonSwitchPages>
                </PageActions>
            </Content>
        </Container>
    );
}
