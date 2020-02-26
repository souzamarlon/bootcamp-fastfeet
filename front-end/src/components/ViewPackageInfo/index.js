import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { format, parseISO, isValid } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Visibility } from '@material-ui/icons';
import { deepPurple } from '@material-ui/core/colors';

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

    console.tron.log(startDate);
    console.tron.log(endDate);

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
                    >
                        {/* {close => (
                    <div className="modal">
                        <a href hclassName="close" onClick={close}>
                            &times;
                        </a> */}
                        <Content>
                            <h1 className="header">Informações da encomenda</h1>
                            <span className="address">
                                {`${data.recipient.street},
                                        ${data.recipient.number},
                                        `}
                                <br />
                                {data.recipient.city}
                                <br />
                                {data.recipient.state}
                            </span>

                            <Dates>
                                <h1 className="header">Datas</h1>
                                <div>
                                    <span className="status">Retirada:</span>
                                    <span className="date">
                                        {startDate.start_date
                                            ? startDate.start_date
                                            : 'Sem data'}
                                    </span>
                                </div>
                                <div>
                                    <span className="status">Entrega:</span>
                                    <span className="date">
                                        {endDate.end_date
                                            ? endDate.end_date
                                            : 'Sem data'}
                                    </span>
                                </div>
                            </Dates>
                            <h1 className="header">
                                Assinatura do destinatário
                            </h1>
                            <Signatures>
                                <span>
                                    <img
                                        src={
                                            data.signature ? (
                                                data.signature.url
                                            ) : (
                                                <img
                                                    src="http://localhost:3333/files/0c09b96a5e11788e251684d74a956104.jpg"
                                                    className="imgName"
                                                    alt=""
                                                />
                                            )
                                        }
                                        alt=""
                                        className="imgName"
                                    />
                                </span>
                            </Signatures>
                        </Content>
                    </Popup>
                </div>
            </Container>
        </>
    );
}
