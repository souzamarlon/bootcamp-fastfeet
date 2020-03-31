import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Done, KeyboardArrowLeft } from '@material-ui/icons';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import history from '~/services/history';
import api from '~/services/api';

import { Container, Content, Title, Button, FormInput } from './styles';
import AvatarInput from '~/components/AvatarInput';

export default function NewDeliverer() {
    const schema = Yup.object().shape({
        avatar_id: Yup.number(),
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-mail é obrigatório'),
    });

    async function handleSubmit(data) {
        const response = await api.get('deliverers');

        const listEmails = response.data.map(item => ({
            id: item.id,
            email: item.email,
        }));

        const [validEmail] = listEmails.filter(
            item => item.email === data.email
        );

        if (validEmail) {
            // console.tron.log(validEmail);
            toast.error('Email já cadastrado!');
        }

        try {
            await api.post('deliverers', data);
            toast.success('Sucesso ao criar o cadastro!');

            history.push('/deliverers');
        } catch (err) {
            toast.error('Erro ao criar o cadastro!');
            // console.tron.log(err);
            // console.tron.log(data);
        }
    }

    return (
        <>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Cadastro de entregadores</h1>
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
                        <AvatarInput name="avatar_id" />
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
