import React, { useEffect, useState } from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Done, KeyboardArrowLeft } from '@material-ui/icons';
import { toast } from 'react-toastify';
import { Container, Content, Title, Button, FormInput } from './styles';
import SelectRecipient from '../../../components/SelectRecipient';
import SelectDeliverer from '../../../components/SelectDeliverer';

import history from '~/services/history';
import api from '~/services/api';

export default function EditPackage({ match }) {
    const [packages, setPackages] = useState([]);
    const [recipient, setRecipient] = useState([]);
    const [deliverer, setDeliverer] = useState([]);

    const { id } = match.params;
    useEffect(() => {
        async function loadDetails() {
            const response = await api.get('packages');

            // eslint-disable-next-line
            const [dataDetails] = response.data.filter(item => item.id == id);

            setPackages(dataDetails);
        }

        loadDetails();
    }, [id]);

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
        console.tron.log(data);

        try {
            await api.put(`packages/${id}`, data);
            toast.success('Sucesso ao criar o cadastro!');

            history.push('/packages');
        } catch (err) {
            toast.error('Erro ao criar o cadastro!');
            console.tron.log(err);
            console.tron.log(data);
        }
    }

    function defineRecipient(id) {
        setPackages({ ...packages, recipient: id });
    }

    function defineDeliverer(id) {
        setPackages({ ...packages, deliveryman: id });
    }

    return (
        <>
            <Form initialData={packages} onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Cadastro de encomendas</h1>
                    </Title>
                    <Button>
                        <div>
                            <Link to="/packages">
                                <button type="button" onClick={() => {}}>
                                    <KeyboardArrowLeft />
                                    <strong>VOLTAR</strong>
                                </button>
                            </Link>
                        </div>

                        <button type="submit" className="submit">
                            <Done />
                            <strong>SALVAR</strong>
                        </button>
                    </Button>
                </Container>
                <Content>
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
                                    <SelectRecipient
                                        className="select"
                                        name="recipient_id"
                                        // cacheOptions
                                        value={recipient.find(
                                            ({ id }) =>
                                                id === packages.recipient.id
                                        )}
                                        defaultOptions
                                        options={loadRecipients}
                                        onChange={defineRecipient}
                                    />
                                </td>
                                <td>
                                    <SelectDeliverer
                                        className="select"
                                        name="recipient_id"
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

                        <p>Nome do produto</p>
                        <Input
                            className="name"
                            name="product"
                            placeholder="Nome do produto..."
                        />
                    </FormInput>
                </Content>
            </Form>
        </>
    );
}
