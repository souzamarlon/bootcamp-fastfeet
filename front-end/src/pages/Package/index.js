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

import { Link } from 'react-router-dom';

import DeliveryStatus from '~/components/DeliveryStatus';
import ViewPackageInfo from '~/components/ViewPackageInfo';

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

            const listPackages = response.data.map(item => ({
                ...item,
                index: response.data.indexOf(item),
            }));
            setPackages(
                listPackages.sort((a, b) => a.created_at < b.created_at)
            );
            // setPackages(listPackages);
        }
        listAllPackages();
    }, []);
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
                                <span className="id">{`#0${item.id}`}</span>
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
                                    <button type="button" className="actions">
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
