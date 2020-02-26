import React from 'react';
import Popup from 'reactjs-popup';
import { Visibility } from '@material-ui/icons';
import { deepPurple } from '@material-ui/core/colors';
import { Container, Dates, Content, Signatures } from './styles';

export default function ViewPackageInfo({ data }) {
    console.tron.log(data);
    return (
        <>
            <Container>
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
                                <span className="date">{data.start_date}</span>
                            </div>
                            <div>
                                <span className="status">Entrega:</span>
                                <span className="date">{data.end_date}</span>
                            </div>
                        </Dates>
                        <h1 className="header">Assinatura do destinatário</h1>
                        <Signatures>
                            <label htmlFor="signatures">
                                <span>
                                    <img
                                        src={
                                            data.signature ? (
                                                data.signature.url
                                            ) : (
                                                <span>Sem assinatura!</span>
                                            )
                                        }
                                        alt=""
                                        className="imgName"
                                    />
                                </span>
                            </label>
                        </Signatures>
                    </Content>
                </Popup>
            </Container>
        </>
    );
}
