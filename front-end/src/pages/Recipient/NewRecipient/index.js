import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Done, KeyboardArrowLeft } from '@material-ui/icons';
import { toast } from 'react-toastify';
import { Container, Content, Title, Button, FormInput } from './styles';

import history from '~/services/history';
import api from '~/services/api';

export default function NewRecipient() {
    async function handleSubmit(data) {
        try {
            await api.post('recipients', data);
            toast.success('Sucesso ao criar o cadastro!');

            history.push('/recipients');
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
                        <h1>Cadastro de destinatário</h1>
                    </Title>
                    <Button>
                        <div>
                            <Link to="/recipients">
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
                        <p>Nome</p>
                        <Input name="name" placeholder="Nome completo" />

                        <thead>
                            <tr>
                                <th className="street">Rua</th>
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
                                    <Input
                                        className="address"
                                        name="complement"
                                        placeholder="Complemento..."
                                    />
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
                                    placeholder="CEP..."
                                />
                            </td>
                        </tbody>
                    </FormInput>
                </Content>
            </Form>
        </>
    );
}
