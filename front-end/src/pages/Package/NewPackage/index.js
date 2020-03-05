import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Done, KeyboardArrowLeft } from '@material-ui/icons';
import { toast } from 'react-toastify';
import { Container, Content, Title, Button, FormInput } from './styles';
import AsyncSelect from '../../../components/AsyncSelect';

import history from '~/services/history';
import api from '~/services/api';

export default function NewPackage() {
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
            console.tron.log(err);
            console.tron.log(data);
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
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
                                    <AsyncSelect
                                        className="select"
                                        name="recipient_id"
                                        // cacheOptions
                                        defaultOptions
                                        options={loadRecipients}
                                    />
                                </td>
                                <td>
                                    <AsyncSelect
                                        className="select"
                                        name="recipient_id"
                                        // cacheOptions
                                        defaultOptions
                                        options={loadDeliverers}
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
