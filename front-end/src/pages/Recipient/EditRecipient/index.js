import React, { useState, useEffect } from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Done, KeyboardArrowLeft } from '@material-ui/icons';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import history from '~/services/history';
import api from '~/services/api';

import { Container, Content, Title, Button, FormInput } from './styles';

export default function EditRecipient({ match }) {
    const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        street: Yup.string().required('Campo obrigatório'),
        number: Yup.number().required('Campoobrigatório'),
        complement: Yup.string().required('Campo obrigatório'),
        state: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campoobrigatório'),
        zipcode: Yup.number().required('Campo obrigatório'),
    });
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
            toast.success('Sucesso ao editar o cadastro!');

            history.push('/recipients');
        } catch (err) {
            toast.error('Erro ao editar o cadastro!');
            // console.tron.log(err);
            // console.tron.log(data);
        }
    }

    return (
        <>
            <Form
                schema={schema}
                initialData={recipient}
                onSubmit={handleSubmit}
            >
                <Container>
                    <Title>
                        <h1>Edição de destinatário</h1>
                    </Title>
                    <Button>
                        <Link to="/recipients">
                            <div className="go-back">
                                <KeyboardArrowLeft style={{ fontSize: 24 }} />
                                <strong>VOLTAR</strong>
                            </div>
                        </Link>

                        <div className="submit">
                            <Done style={{ fontSize: 22 }} />
                            <strong>SALVAR</strong>
                        </div>
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

EditRecipient.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number,
        }),
    }).isRequired,
};
