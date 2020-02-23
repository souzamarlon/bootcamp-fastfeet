import React from 'react';

import { FiberManualRecord } from '@material-ui/icons';

import { Container } from './styles';

export default function DeliveryStatus({ data }) {
    console.tron.log(data);
    return (
        <Container>
            <span className="status">
                {data.start_date && !data.end_date && !data.canceled_at ? (
                    <span
                        className="DeliveryStatus"
                        STYLE="background-color: #BAD2FF; color: #4D85EE "
                    >
                        <FiberManualRecord style={{ fontSize: 14 }} />
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
                            STYLE="background-color: #DFF0DF; color: #2CA42B;  "
                        >
                            <FiberManualRecord style={{ fontSize: 14 }} />
                            ENTREGUE
                        </span>
                    ) : null) ||
                    (!data.start_date && !data.end_date && !data.canceled_at ? (
                        <span
                            className="DeliveryStatus"
                            STYLE="background-color: #F0F0DF; color: #C1BC35;  "
                        >
                            <FiberManualRecord style={{ fontSize: 14 }} />
                            PENDENTE
                        </span>
                    ) : null) ||
                    (data.canceled_at ? (
                        <span
                            className="DeliveryStatus"
                            STYLE="background-color: #FAB0B0; color: #DE3B3B;  "
                        >
                            <FiberManualRecord style={{ fontSize: 14 }} />
                            CANCELADA
                        </span>
                    ) : null)
                )}
            </span>
        </Container>
    );
}
