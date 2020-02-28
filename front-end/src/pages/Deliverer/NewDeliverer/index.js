import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import AvatarInput from './AvatarInput';

export default function New() {
    function handleSubmit(data) {
        // dispatch(updateProfileRequest(data));
        // // console.tron.log(data);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />
                <p>Nome</p>
                <Input name="name" placeholder="Nome completo" />
                <p>Email</p>
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />
                <hr />
            </Form>
        </Container>
    );
}
