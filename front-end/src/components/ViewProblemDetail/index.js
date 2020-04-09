import React from 'react';
import Popup from 'reactjs-popup';

import { Visibility } from '@material-ui/icons';
import { deepPurple } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function ViewProblemDetail({ data }) {
    return (
        <>
            <Container>
                <div className="actions">
                    <Popup
                        trigger={
                            <div>
                                <button type="button">
                                    <Visibility
                                        fontSize="small"
                                        style={{
                                            color: deepPurple[400],
                                        }}
                                    />
                                    <span>Visualizar</span>
                                </button>
                            </div>
                        }
                        modal
                        closeOnDocumentClick
                        contentStyle={{
                            width: '23.95vw',
                            borderRadius: '5%',
                            height: '45vh',
                        }}
                    >
                        <Content>
                            <h1 className="header">
                                {`ENCOMENDA N.º #${data.delivery_id}`}
                            </h1>
                            <h1 className="header">
                                INFORMAÇÕES SOBRE O PROBLEMA:
                            </h1>
                            <span className="detail">{data.description}</span>
                        </Content>
                    </Popup>
                </div>
            </Container>
        </>
    );
}

ViewProblemDetail.propTypes = {
    data: PropTypes.shape({
        delivery_id: PropTypes.number,
        description: PropTypes.string,
    }).isRequired,
};
