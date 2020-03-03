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
import LinesEllipsis from 'react-lines-ellipsis';

import { Link } from 'react-router-dom';

import DeliveryStatus from '~/components/DeliveryStatus';
import ViewPackageInfo from '~/components/ViewPackageInfo';

import { Container, Header, Title, Button, Content, Search } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Package() {
    const [packages, setPackages] = useState([]);

    const searchProducts = useCallback(({ search }) => {
        async function searchTool() {
            const response = await api.get(`packages`, {
                params: { q: search },
            });

            setPackages(response.data.sort((a, b) => a.id - b.id));
        }
        searchTool();
    }, []);

    useEffect(() => {
        async function listAllPackages() {
            const response = await api.get('packages');

            setPackages(response.data.sort((a, b) => a.id - b.id));
            // setPackages(listPackages);
        }
        listAllPackages();
    }, []);

    async function handleDelete(id) {
        console.tron.log(id);
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
                    <div>
                        <Link to="/newpackages">
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
                        <th>Nome do Produto</th>
                        <th>Destinatário</th>
                        <th>Entregador</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map(item => (
                        <tr>
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
                                                ? item.deliveryman.avatar.url
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
                            <td>
                                <Popup
                                    trigger={
                                        <button
                                            type="button"
                                            className="button"
                                        >
                                            <div className="iconMoreHoriz">
                                                <MoreHoriz />
                                            </div>
                                        </button>
                                    }
                                    position="bottom center"
                                    // on="hover"
                                >
                                    <button onClick={() => {}} type="button">
                                        <ViewPackageInfo data={item} />
                                    </button>

                                    <button type="button" className="actions">
                                        <Link to={`/editpackage/${item.id}`}>
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
