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
import LinesEllipsis from 'react-lines-ellipsis';

import { Link } from 'react-router-dom';
import emptyBox from '~/assets/emptyBox.png';

import DeliveryStatus from '~/components/DeliveryStatus';
import ViewPackageInfo from '~/components/ViewPackageInfo';
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

export default function Package() {
    const [packages, setPackages] = useState([]);
    const [page, setPage] = useState(1);

    const searchProducts = useCallback(
        ({ search }) => {
            async function searchTool() {
                const response = await api.get(`packages`, {
                    params: { q: search, page, per_page: 5 },
                });

                // setPackages(response.data.sort((a, b) => a.id - b.id));
                setPackages(response.data);
            }
            searchTool();
        },
        [page]
    );

    useEffect(() => {
        async function listAllPackages() {
            const response = await api.get('packages', {
                params: { page, per_page: 5 },
            });

            // setPackages(response.data.sort((a, b) => a.id - b.id));
            setPackages(response.data);
        }
        listAllPackages();
    }, [page]);

    async function handleDelete(id) {
        // console.tron.log(id);
        try {
            // eslint-disable-next-line no-alert
            if (window.confirm('Você realmente quer deletar?')) {
                await api.delete(`packages/${id}`);

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
    // console.tron.log(packages);
    return (
        <Container>
            <Title>
                <span>Gerenciando encomendas</span>
            </Title>
            <Header>
                <Search>
                    <SearchOutlined size={19} color="disabled" />
                    <Form onSubmit={searchProducts}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Buscar por encomendas"
                        />
                    </Form>
                </Search>
                <Button>
                    <Link to="/newpackages">
                        <div className="button-enroll">
                            <Add style={{ fontSize: 19 }} color="#FFF" />
                            <strong className="enroll">CADASTRAR</strong>
                        </div>
                    </Link>
                </Button>
            </Header>

            <Content>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Produto</th>
                        <th>Destinatário</th>
                        <th>Entregador</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Status</th>
                        <th className="action">Ações</th>
                    </tr>
                </thead>
                {packages.length ? (
                    <tbody>
                        {packages.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <span className="id">{`#${item.id}`}</span>
                                </td>
                                <td>
                                    <LinesEllipsis
                                        text={item.product}
                                        maxLine="1"
                                        ellipsis="..."
                                        trimRight
                                        basedOn="letters"
                                        className="max-lines"
                                    />
                                    {/* <span className="id">{item.product}</span> */}
                                </td>
                                <td>
                                    <span className="recipient">
                                        {item.recipient.name}
                                    </span>
                                </td>
                                <td>
                                    <span className="deliverer">
                                        <img
                                            src={
                                                item.deliveryman.avatar
                                                    ? item.deliveryman.avatar
                                                          .url
                                                    : 'https://api.adorable.io/avatars/40/abott@adorable.png'
                                            }
                                            alt=""
                                            className="avatar"
                                        />
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
                                <td className="action">
                                    <Popup
                                        trigger={
                                            <button
                                                type="button"
                                                className="more-button"
                                            >
                                                <div className="iconMoreHoriz">
                                                    <MoreHoriz color="disabled" />
                                                </div>
                                            </button>
                                        }
                                        // position="bottom center"
                                        // on="hover"
                                        contentStyle={{
                                            width: '150px',
                                            borderRadius: '5%',
                                        }}
                                    >
                                        <button
                                            onClick={() => {}}
                                            type="button"
                                            className="more-button"
                                        >
                                            <ViewPackageInfo data={item} />
                                        </button>

                                        <button type="button" className="edit">
                                            <Link
                                                to={`/editpackage/${item.id}`}
                                            >
                                                <Create
                                                    fontSize="small"
                                                    color="primary"
                                                />
                                                <span className="options">
                                                    Editar
                                                </span>
                                            </Link>
                                        </button>
                                        <button
                                            type="button"
                                            className="delete"
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                        >
                                            <DeleteForever
                                                fontSize="small"
                                                color="secondary"
                                                style={{
                                                    marginTop: 4,
                                                }}
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
                    <div className="empty-box">
                        <img src={emptyBox} className="empty-box-img" alt="" />
                        <h1 className="empty-box">
                            Não encontramos mais encomendas!
                        </h1>
                    </div>
                )}
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
                        disabled={packages.length < 1}
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
