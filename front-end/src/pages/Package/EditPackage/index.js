import React, { useEffect, useState } from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Done, KeyboardArrowLeft } from '@material-ui/icons';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import history from '~/services/history';
import api from '~/services/api';

import { Header, Container, Title, Button, FormInput } from './styles';
import AsyncSelect from '../../../components/AsyncSelect';

export default function EditPackage({ match }) {
    const schema = Yup.object().shape({
        recipient_id: Yup.number(),
        deliveryman_id: Yup.number(),
        product: Yup.string().required('O nome do produto é obrigatório!'),
    });

    const [packages, setPackages] = useState([]);
    const [recipient, setRecipient] = useState([]);
    const [deliverer, setDeliverer] = useState([]);

    const packageId = match.params.id;
    useEffect(() => {
        async function loadDetails() {
            const response = await api.get('packages');

            // eslint-disable-next-line
            const [dataDetails] = response.data.filter(item => item.id == packageId);

            setPackages(dataDetails);
        }

        loadDetails();
    }, [packageId]);

    // console.tron.log(packages);

    //
    // Loading the Recipients
    //
    const searchRecipient = inputValue => {
        async function listRecipients() {
            const response = await api.get(`recipients`, {
                params: { q: inputValue },
            });

            setRecipient(response.data);

            return response.data;
        }

        return listRecipients();
    };

    const loadRecipients = inputValue =>
        new Promise(callback => {
            setTimeout(() => {
                callback(searchRecipient(inputValue));
            }, 100);
        });

    //
    // Loading the Deliverer
    //
    const searchDeliverer = inputValue => {
        async function listDeliverers() {
            const response = await api.get(`deliverers`, {
                params: { q: inputValue },
            });
            setDeliverer(response.data);
            return response.data;
        }

        return listDeliverers();
    };

    const loadDeliverers = inputValue =>
        new Promise(callback => {
            setTimeout(() => {
                callback(searchDeliverer(inputValue));
            }, 100);
        });

    async function handleSubmit(data) {
        try {
            await api.put(`packages/${packageId}`, data);
            toast.success('Sucesso ao editar o cadastro!');

            history.push('/packages');
        } catch (err) {
            toast.error('Erro ao editar o cadastro!');
            // console.tron.log(err);
            // console.tron.log(data);
        }
    }

    function defineRecipient(data) {
        setPackages({ ...packages, recipient_id: data.id, recipient: data });
    }

    function defineDeliverer(data) {
        setPackages({
            ...packages,
            deliveryman_id: data.id,
            deliveryman: data,
        });
    }

    return (
        <Container>
            <Form
                schema={schema}
                initialData={packages}
                onSubmit={handleSubmit}
            >
                <Header>
                    <Title>
                        <h1>Edição de encomendas</h1>
                    </Title>
                    <Button>
                        <Link to="/packages">
                            <div className="go-back">
                                <KeyboardArrowLeft
                                    style={{ fontSize: '2.4rem' }}
                                />
                                <strong>VOLTAR</strong>
                            </div>
                        </Link>

                        <div className="submit">
                            <Done style={{ fontSize: '2.2rem' }} />
                            <strong>SALVAR</strong>
                        </div>
                    </Button>
                </Header>

                <FormInput>
                    <thead>
                        <tr>
                            <th>Destinatário</th>
                            <th>Entregador</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <AsyncSelect
                                    className="select"
                                    name="recipient_id"
                                    // cacheOptions
                                    value={recipient.find(
                                        ({ id }) => id === packages.recipient.id
                                    )}
                                    defaultOptions
                                    options={loadRecipients}
                                    onChange={defineRecipient}
                                />
                            </td>
                            <td>
                                <AsyncSelect
                                    className="select"
                                    name="deliveryman_id"
                                    // cacheOptions
                                    value={deliverer.find(
                                        ({ id }) =>
                                            id === packages.deliveryman.id
                                    )}
                                    defaultOptions
                                    options={loadDeliverers}
                                    onChange={defineDeliverer}
                                />
                            </td>
                        </tr>
                    </tbody>
                    <thead style={{ paddingTop: 10 }}>
                        <tr>
                            <th>Nome do produto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Input
                                    className="name"
                                    name="product"
                                    placeholder="Nome do produto..."
                                />
                            </td>
                        </tr>
                    </tbody>
                </FormInput>
            </Form>
        </Container>
    );
}

EditPackage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number,
        }),
    }).isRequired,
};
