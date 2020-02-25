import React, { useState, useEffect } from 'react';
import {
    MoreHoriz,
    Visibility,
    Create,
    DeleteForever,
} from '@material-ui/icons';

import Popup from 'reactjs-popup';

import { Link } from 'react-router-dom';
import { deepPurple } from '@material-ui/core/colors';
import { Container, Title, Content } from './styles';
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
                                <span className="description">
                                    {item.description}
                                </span>
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
                                    <Link to={`/view/${item.id}`}>
                                        <Visibility
                                            fontSize="small"
                                            style={{ color: deepPurple[400] }}
                                        />
                                        <span className="Option">
                                            Visualizar
                                        </span>
                                    </Link>

                                    <Link to={`/edit/${item.id}`}>
                                        <Create
                                            fontSize="small"
                                            color="primary"
                                        />
                                        <span className="Option">Editar</span>
                                    </Link>
                                    <Link to={`/delete/${item.id}`}>
                                        <DeleteForever
                                            fontSize="small"
                                            color="secondary"
                                        />
                                        <span className="Option">Excluir</span>
                                    </Link>
                                </Popup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Content>
        </Container>
    );
}
