import React, { useState, useEffect } from 'react';
import {
    MoreHoriz,
    DeleteForever,
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@material-ui/icons';

import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import LinesEllipsis from 'react-lines-ellipsis';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Title, Content, PageActions } from './styles';
import ViewProblemDetail from '~/components/ViewProblemDetail';

export default function Problem() {
    const [problem, setProblem] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function listAllProblem() {
            const response = await api.get('delivery/problems', {
                params: { page, per_page: 5 },
            });
            console.tron.log(response.data);

            const listProblem = response.data.map(item => ({
                ...item,
                index: response.data.indexOf(item) + 1,
            }));
            // setProblem(listProblem.sort((a, b) => a.index < b.index));
            setProblem(listProblem);
        }

        listAllProblem();
    }, [page]);

    async function handleCancel(id) {
        console.tron.log(id);
        try {
            // eslint-disable-next-line no-alert
            if (window.confirm('Você realmente quer deletar?')) {
                await api.delete(`problem/${id}/cancel-delivery`);

                toast.success('Sucesso ao cancelar a encomenda!');
                history.push('/problems');
            }
        } catch (err) {
            toast.error('Erro ao cancelar a encomenda!');
        }
    }

    function handlePage(action) {
        setPage(action === 'back' ? page - 1 : page + 1);
    }

    return (
        <Container>
            <Title>
                <span>Problemas na entrega</span>
            </Title>

            <Content>
                <thead>
                    <tr>
                        <th className="delivery">Encomenda</th>
                        <th>Problema</th>
                        <th className="action">Ações</th>
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
                            <td className="action">
                                <Popup
                                    trigger={
                                        <button
                                            type="button"
                                            className="button"
                                        >
                                            <MoreHoriz color="disabled" />
                                        </button>
                                    }
                                    position="bottom center"
                                    // on="hover"
                                    contentStyle={{
                                        width: '200px',
                                        borderRadius: '5%',
                                    }}
                                >
                                    <button onClick={() => {}} type="button">
                                        <ViewProblemDetail data={item} />
                                    </button>
                                    <button
                                        type="button"
                                        className="actions"
                                        onClick={() =>
                                            handleCancel(item.delivery_id)
                                        }
                                    >
                                        <DeleteForever
                                            fontSize="small"
                                            color="secondary"
                                        />
                                        <span className="options">
                                            Cancelar encomenda
                                        </span>
                                    </button>
                                </Popup>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <PageActions>
                    <button
                        className="pages-button"
                        type="button"
                        disabled={page < 2}
                        onClick={() => handlePage('back')}
                    >
                        <KeyboardArrowLeft />
                        <strong className="page-before">Anterior</strong>
                    </button>

                    <span className="page-number">{`Página ${page}`}</span>

                    <button
                        className="pages-button"
                        type="button"
                        disabled={problem.length <= 0}
                        onClick={() => handlePage('next')}
                    >
                        <strong className="page-next">Próximo</strong>
                        <KeyboardArrowRight />
                    </button>
                </PageActions>
            </Content>
        </Container>
    );
}
