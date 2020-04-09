import React from 'react';

import { FiberManualRecord } from '@material-ui/icons';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function DeliveryStatus({ data }) {
    return (
        <Container>
            <span className="status">
                {data.start_date && !data.end_date && !data.canceled_at ? (
                    <span
                        className="DeliveryStatus"
                        style={{ backgroundColor: '#BAD2FF', color: '#4D85EE' }}
                    >
                        <FiberManualRecord style={{ fontSize: '1.4rem' }} />
                        RETIRADA
                    </span>
                ) : (
                    null ||
                    (data.start_date &&
                    data.end_date &&
                    data.signature_id &&
                    !data.canceled_at ? (
                        <span
                            className="DeliveryStatus"
                            style={{
                                backgroundColor: '#DFF0DF',
                                color: '#2CA42B',
                            }}
                        >
                            <FiberManualRecord style={{ fontSize: '1.4rem' }} />
                            ENTREGUE
                        </span>
                    ) : null) ||
                    (!data.start_date && !data.end_date && !data.canceled_at ? (
                        <span
                            className="DeliveryStatus"
                            style={{
                                backgroundColor: '#F0F0DF',
                                color: '#C1BC35',
                            }}
                        >
                            <FiberManualRecord style={{ fontSize: '1.4rem' }} />
                            PENDENTE
                        </span>
                    ) : null) ||
                    (data.canceled_at ? (
                        <span
                            className="DeliveryStatus"
                            style={{
                                backgroundColor: '#FAB0B0',
                                color: '#DE3B3B',
                            }}
                        >
                            <FiberManualRecord style={{ fontSize: '1.4rem' }} />
                            CANCELADA
                        </span>
                    ) : null)
                )}
            </span>
        </Container>
    );
}

DeliveryStatus.propTypes = {
    data: PropTypes.shape({
        canceled_at: PropTypes.instanceOf(Date),
        start_date: PropTypes.instanceOf(Date),
        end_date: PropTypes.instanceOf(Date),
        signature_id: PropTypes.number,
    }).isRequired,
};
