import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Done, KeyboardArrowLeft } from '@material-ui/icons';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Header, Title, Button, FormInput } from './styles';

export default function NewRecipient() {
    const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        street: Yup.string().required('Campo obrigatório'),
        number: Yup.number()
            .required('Campo obrigatório')
            .positive()
            .integer(),
        complement: Yup.string().required('Campo obrigatório'),
        state: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        zipcode: Yup.number('Campo obrigatório')
            .required('Campo obrigatório')
            .required()
            .positive()
            .integer(),
    });

    async function handleSubmit(data) {
        try {
            await api.post('recipients', data);
            toast.success('Sucesso ao criar o cadastro!');

            history.push('/recipients');
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
                        <h1>Cadastro de destinatário</h1>
                    </Title>
                    <Button>
                        <Link to="/recipients">
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
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Input
                                    name="name"
                                    placeholder="Nome completo"
                                />
                            </td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th>Rua</th>
                            <th>Número</th>
                            <th>Complemento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Input
                                    className="street"
                                    name="street"
                                    placeholder="Nome da Rua..."
                                />
                            </td>
                            <td>
                                <Input
                                    className="address"
                                    name="number"
                                    placeholder="Número da Rua..."
                                />
                            </td>
                            <td>
                                <Input className="address" name="complement" />
                            </td>
                        </tr>
                    </tbody>
                    <thead className="cityState">
                        <tr>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>CEP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            <Input
                                className="cityState"
                                name="state"
                                placeholder="Cidade..."
                            />
                        </td>
                        <td>
                            <Input
                                className="cityState"
                                name="city"
                                placeholder="Estado..."
                            />
                        </td>
                        <td>
                            <Input
                                className="cityState"
                                name="zipcode"
                                type="zipcode"
                                placeholder="CEP..."
                            />
                        </td>
                    </tbody>
                </FormInput>
            </Form>
        </Container>
    );
}
