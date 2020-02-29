import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Done, KeyboardArrowLeft } from '@material-ui/icons';
import { Container, Content, Title, Button, FormInput } from './styles';
import AvatarInput from './AvatarInput';
import history from '~/services/history';
import api from '~/services/api';

export default function New() {
    async function handleSubmit(data) {
        await api.post('deliverers', data);

        history.push('/deliverers');
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
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
