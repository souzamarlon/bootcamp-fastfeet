import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Done, KeyboardArrowLeft } from '@material-ui/icons';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import history from '~/services/history';
import api from '~/services/api';

import { Container, Header, Title, Button, FormInput } from './styles';
import AsyncSelect from '../../../components/AsyncSelect';

export default function NewPackage() {
    const schema = Yup.object().shape({
        recipient_id: Yup.number().required('Campo obrigatório!'),
        deliveryman_id: Yup.number().required('Campo obrigatório!'),
        product: Yup.string().required('O nome do produto é obrigatório!'),
    });

    // Loading the Recipients
    const searchRecipient = inputValue => {
        async function listRecipients() {
            const response = await api.get(`recipients`, {
                params: { q: inputValue },
            });

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

    // Loading the Deliverer
    const searchDeliverer = inputValue => {
        async function listDeliverers() {
            const response = await api.get(`deliverers`, {
                params: { q: inputValue },
            });

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
            await api.post('packages', data);
            toast.success('Sucesso ao criar o cadastro!');

            history.push('/packages');
        } catch (err) {
            toast.error('Erro ao criar o cadastro!');
            // console.tron.log(err);
            // console.tron.log(data);
        }
    }

    return (
        <Container>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Header>
                    <Title>
                        <h1>Cadastro de encomendas</h1>
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
                                    name="recipient_id"
                                    // cacheOptions
                                    defaultOptions
                                    options={loadRecipients}
                                />
                            </td>
                            <td>
                                <AsyncSelect
                                    name="deliveryman_id"
                                    // cacheOptions
                                    defaultOptions
                                    options={loadDeliverers}
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
