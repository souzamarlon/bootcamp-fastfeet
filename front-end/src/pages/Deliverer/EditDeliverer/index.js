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
import AvatarInput from '~/components/AvatarInput';

export default function EditDeliverer({ match }) {
    const schema = Yup.object().shape({
        avatar_id: Yup.number(),
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-mail é obrigatório'),
    });

    const [deliverer, setDeliverer] = useState([]);

    const { id } = match.params;

    useEffect(() => {
        async function loadDetails() {
            const response = await api.get('deliverers');

            // eslint-disable-next-line
            const [dataDetails] = response.data.filter(item => item.id == id);

            setDeliverer(dataDetails);
        }

        loadDetails();
    }, [id]);

    async function handleSubmit(data) {
        // console.tron.log(data);
        try {
            await api.put(`deliverers/${id}`, data);
            toast.success('Sucesso ao editar o cadastro!');

            history.push('/deliverers');
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
                initialData={deliverer}
                onSubmit={handleSubmit}
            >
                <Container>
                    <Title>
                        <h1>Edição de entregadores</h1>
                    </Title>
                    <Button>
                        <div>
                            <Link to="/deliverers">
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
                        <AvatarInput
                            name="avatar_id"
                            avatarData={deliverer.avatar}
                        />
                        <p>Nome</p>
                        <Input name="name" placeholder="Nome completo" />
                        <p>Email</p>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Seu endereço de e-mail"
                        />
                    </FormInput>
                </Content>
            </Form>
        </>
    );
}

EditDeliverer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number,
        }),
    }).isRequired,
};
