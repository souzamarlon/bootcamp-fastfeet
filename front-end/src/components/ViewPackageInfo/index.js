import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { format, parseISO, isValid } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Visibility } from '@material-ui/icons';
import { deepPurple } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

import { Container, Dates, Content, Signatures } from './styles';

export default function ViewPackageInfo({ data }) {
    const [startDate, setStartDate] = useState({ start_date: data.start_date });
    const [endDate, setEndDate] = useState({ end_date: data.end_date });

    useEffect(() => {
        async function validStartDate() {
            if (isValid(parseISO(data.start_date))) {
                setStartDate({
                    ...startDate,
                    start_date: format(
                        parseISO(data.start_date),
                        "d 'de' MMMM",
                        {
                            locale: pt,
                        }
                    ),
                });
            }
            if (isValid(parseISO(data.end_date))) {
                setEndDate({
                    ...endDate,
                    end_date: format(parseISO(data.end_date), "d 'de' MMMM", {
                        locale: pt,
                    }),
                });
            }
        }
        validStartDate();
        // eslint-disable-next-line
    }, [data]);

    return (
        <>
            <Container>
                <div className="actions">
                    <Popup
                        trigger={
                            <div>
                                <button type="button" className="button-view">
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
                            width: '24vw',
                            borderRadius: '5%',
                        }}
                    >
                        {/* {close => (
                            <div className="modal">
                                <a href className="close" onClick={close}>
                                    &times;
                                </a> */}
                        <Content>
                            <h1 className="title">
                                {`Informações da encomenda N.º #${data.id}.`}
                            </h1>
                            <h1 className="header">Nome do produto:</h1>
                            <span className="address">{data.product}</span>
                            <h1 className="header">Endereço completo:</h1>
                            <span className="address">
                                {`${data.recipient.street},
                                        ${data.recipient.number}
                                        `}
                                <br />
                                {data.recipient.city} - {data.recipient.state}
                                <br />
                                {data.recipient.zipcode}.
                            </span>

                            <Dates>
                                <h1 className="header">Datas:</h1>
                                <div>
                                    <span className="status">Retirada:</span>
                                    <span className="date">
                                        {startDate.start_date
                                            ? startDate.start_date
                                            : '- - / - - / - -'}
                                    </span>
                                </div>
                                <div>
                                    <span className="status">Entrega:</span>
                                    <span className="date">
                                        {endDate.end_date
                                            ? endDate.end_date
                                            : '- - / - - / - -'}
                                    </span>
                                </div>
                            </Dates>
                            <h1 className="header">
                                Assinatura do destinatário:
                            </h1>
                            <Signatures>
                                <span>
                                    <img
                                        src={
                                            data.signature
                                                ? data.signature.url
                                                : null
                                        }
                                        alt=""
                                        className="imgName"
                                    />
                                </span>
                            </Signatures>
                        </Content>
                        {/* </div>
                        )} */}
                    </Popup>
                </div>
            </Container>
        </>
    );
}

ViewPackageInfo.propTypes = {
    data: PropTypes.shape({
        start_date: PropTypes.instanceOf(Date),
        end_date: PropTypes.instanceOf(Date),
        id: PropTypes.number,
        product: PropTypes.string,
        signature: PropTypes.shape(),
        recipient: PropTypes.shape({
            street: PropTypes.string,
            number: PropTypes.number,
            city: PropTypes.string,
            state: PropTypes.string,
            zipcode: PropTypes.number,
        }),
    }).isRequired,
};
