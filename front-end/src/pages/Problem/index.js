import React, { useState, useEffect } from 'react';
import { MoreHoriz, DeleteForever } from '@material-ui/icons';

import Popup from 'reactjs-popup';

import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import { Container, Title, Content } from './styles';
import ViewProblemDetail from '~/components/ViewProblemDetail';

import api from '~/services/api';

export default function Problem() {
    const [problem, setProblem] = useState([]);

    useEffect(() => {
        async function listAllProblem() {
            const response = await api.get('delivery/problems');
            console.tron.log(response.data);

            const listProblem = response.data.map(item => ({
                ...item,
                index: response.data.indexOf(item) + 1,
            }));
            // setProblem(listProblem.sort((a, b) => a.index < b.index));
            setProblem(listProblem);
        }

        listAllProblem();
    }, []);
    return (
        <Container>
            <Title>
                <span>Problemas na entrega</span>
            </Title>

            <Content>
                <thead>
                    <tr>
                        <th className="delivery">Encomenda</th>
                        <th className="name">Problema</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {problem.map(item => (
                        <tr>
                            <td>
                                <span className="package">{`#${item.delivery_id}`}</span>
                            </td>
                            <td>
                                <LinesEllipsis
                                    text={item.description}
                                    maxLine="1"
                                    ellipsis="..."
                                    trimRight
                                    basedOn="letters"
                                    className="max-lines"
                                />
                            </td>
                            <td className="name">
                                <Popup
                                    trigger={
                                        <button
                                            type="button"
                                            className="button"
                                        >
                                            <MoreHoriz />
                                        </button>
                                    }
                                    position="bottom center"
                                    on="hover"
                                >
                                    <button onClick={() => {}} type="button">
                                        <ViewProblemDetail data={item} />
                                    </button>
                                    <button type="button" className="actions">
                                        <Link to={`/delete/${item.id}`}>
                                            <DeleteForever
                                                fontSize="small"
                                                color="secondary"
                                            />
                                            <span className="options">
                                                Cancelar encomenda
                                            </span>
                                        </Link>
                                    </button>
                                </Popup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Content>
        </Container>
    );
}
