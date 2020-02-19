import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Container } from './styles';

export default function AuthLayout({ children }) {
    return (
        <Wrapper>
            <Container>
                <Content>{children}</Content>
            </Container>
        </Wrapper>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
