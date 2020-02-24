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
import DeliveryStatus from '~/components/DeliveryStatus';
import { Container, Header, Title, Button, Content, Search } from './styles';
import api from '~/services/api';

export default function Package() {
    const [packages, setPackages] = useState([]);

    const searchProducts = useCallback(({ search }) => {
        async function searchTool() {
            const response = await api.get(`packages`, {
                params: { q: search },
            });

            const listPackages = response.data.map(item => ({
                ...item,
                index: response.data.indexOf(item) + 0 + 1,
            }));

            // console.tron.log(response.data);

            // setPackages(listPackages.sort((a, b) => a.index < b.index));
            setPackages(listPackages);
        }
        searchTool();
    }, []);

    useEffect(() => {
        async function listAllPackages() {
            const response = await api.get('packages');
            console.tron.log(response.data);

            const listPackages = response.data.map(item => ({
                ...item,
                index: response.data.indexOf(item) + 1,
            }));
            // setPackages(listPackages.sort((a, b) => a.index < b.index));
            setPackages(listPackages);
        }

        listAllPackages();
    }, []);
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
                        <Link to="/newstudent">
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
                                <span className="id">{`#0${item.index}`}</span>
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
                                            <MoreHoriz />
                                        </button>
                                    }
                                    position="bottom center"
                                    on="hover"
                                >
                                    <Link to={`/view/${item.id}`}>
                                        <Visibility
                                            fontSize="small"
                                            style={{
                                                color: deepPurple[400],
                                            }}
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
        </Container>
    );
}
