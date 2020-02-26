import React, { useMemo } from 'react';
import Popup from 'reactjs-popup';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Visibility } from '@material-ui/icons';
import { deepPurple } from '@material-ui/core/colors';

import { Container, Dates, Content, Signatures } from './styles';

export default function ViewPackageInfo({ data }) {
    const start_date = useMemo(() => {
        return format(parseISO(data.start_date), "d 'de' MMMM 'de' yyyy", {
            // locale: pt,
        });
    }, [data.start_date]);

    const end_date = useMemo(() => {
        return format(parseISO(data.end_date), "d 'de' MMMM 'de' yyyy", {
            // locale: pt,
        });
    }, [data.end_date]);

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
                                        {start_date || 'Sem data'}
                                    </span>
                                </div>
                                <div>
                                    <span className="status">Entrega:</span>
                                    <span className="date">
                                        {end_date || 'Sem data'}
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
