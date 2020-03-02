import React, { useState, useEffect } from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Done, KeyboardArrowLeft } from '@material-ui/icons';
import { toast } from 'react-toastify';
import { Container, Content, Title, Button, FormInput } from './styles';

import history from '~/services/history';
import api from '~/services/api';

export default function EditRecipient({ match }) {
    const [recipient, setRecipient] = useState([]);

    const { id } = match.params;

    useEffect(() => {
        async function loadDetails() {
            const response = await api.get('recipients');

            // eslint-disable-next-line
            const [dataDetails] = response.data.filter(item => item.id == id);

            setRecipient(dataDetails);
        }

        loadDetails();
    }, [id]);

    async function handleSubmit(data) {
        try {
            await api.put(`recipients/${id}`, data);
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
            <Form initialData={recipient} onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Edição de destinatário</h1>
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
