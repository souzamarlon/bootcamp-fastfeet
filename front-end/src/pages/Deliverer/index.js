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
import history from '~/services/history';
import api from '~/services/api';
import supplierIcon from '~/assets/supplierIcon.png';

import {
    Container,
    Header,
    Title,
    Button,
    Content,
    Search,
    PageActions,
    ButtonSwitchPages,
    NoMoreDeliverers,
} from './styles';

export default function Deliverer() {
    const [deliverer, setDeliverer] = useState([]);
    const [page, setPage] = useState(1);

    const searchDeliverers = useCallback(
        ({ search }) => {
            async function searchTool() {
                const response = await api.get(`deliverers`, {
                    params: { q: search, page, per_page: 5 },
                });

                // setDeliverer(response.data.sort((a, b) => a.id - b.id));
                setDeliverer(response.data);
            }
            searchTool();
        },
        [page]
    );

    useEffect(() => {
        async function listAllDeliverer() {
            const response = await api.get('deliverers', {
                params: { page, per_page: 5 },
            });
            // console.tron.log(response.data);

            // setDeliverer(response.data.sort((a, b) => a.id - b.id));
            setDeliverer(response.data);
        }

        listAllDeliverer();
    }, [page]);

    async function handleDelete(id) {
        try {
            // eslint-disable-next-line no-alert
            if (window.confirm('Você realmente quer deletar?')) {
                await api.delete(`deliverers/${id}`);

                toast.success('Sucesso ao deletar o entregador!');
                history.push('/deliverers');
            }
        } catch (err) {
            toast.error('Erro ao deletar o entregador!');
        }
    }

    function handlePage(action) {
        // const count = action === 'back' ? page - 1 : page + 1;
        setPage(action === 'back' ? page - 1 : page + 1);
    }

    return (
        <Container>
            <Title>
                <span>Gerenciando entregadores</span>
            </Title>
            <Header>
                <Search>
                    <SearchOutlined
                        style={{ fontSize: '2rem', marginTop: 2 }}
                        color="disabled"
                    />
                    <Form onSubmit={searchDeliverers}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Buscar por entregadores"
                        />
                    </Form>
                </Search>
                <Button>
                    <Link to="/newdeliverer">
                        <div>
                            <Add style={{ fontSize: '1.9rem' }} color="#FFF" />
                            <strong>CADASTRAR</strong>
                        </div>
                    </Link>
                </Button>
            </Header>
            {deliverer.length ? (
                <Content>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th className="action">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {deliverer.map(item => (
                            <tr>
                                <td>
                                    <span className="id">{`#${item.id}`}</span>
                                </td>
                                <td>
                                    <img
                                        className="avatar-img"
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
                                        <Link to={`/editdeliverer/${item.id}`}>
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
                </Content>
            ) : (
                <NoMoreDeliverers>
                    <div className="supplier">
                        <img
                            src={supplierIcon}
                            className="supplier-img"
                            alt=""
                        />
                        <h1 className="supplier">
                            Não encontramos entregadores!
                        </h1>
                    </div>
                </NoMoreDeliverers>
            )}

            <PageActions>
                <ButtonSwitchPages
                    disabled={page < 2}
                    onClick={() => handlePage('back')}
                >
                    <div className="button-goback">
                        <KeyboardArrowLeft style={{ fontSize: '2.4rem' }} />
                        <strong className="text-goback">Anterior</strong>
                    </div>
                </ButtonSwitchPages>

                <span className="page-number">{`Página ${page}`}</span>
                <ButtonSwitchPages
                    disabled={deliverer.length < 1}
                    onClick={() => handlePage('next')}
                >
                    <div className="button-next">
                        <strong className="text-next">Próximo</strong>
                        <KeyboardArrowRight style={{ fontSize: '2.4rem' }} />
                    </div>
                </ButtonSwitchPages>
            </PageActions>
        </Container>
    );
}
