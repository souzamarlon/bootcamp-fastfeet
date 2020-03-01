import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { format, parseISO, isValid } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Visibility } from '@material-ui/icons';
import { deepPurple } from '@material-ui/core/colors';

import { Container, Dates, Content, Signatures } from './styles';

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
                    >
                        {/* {close => (
                    <div className="modal">
                        <a href hclassName="close" onClick={close}>
                            &times;
                        </a> */}
                        <Content>
                            <h1 className="header">VISUALIZAR PROBLEMA</h1>
                            <span className="detail">{data.description}</span>
                        </Content>
                    </Popup>
                </div>
            </Container>
        </>
    );
}
