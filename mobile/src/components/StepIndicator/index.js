import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  StepLabels,
  Line,
  StepCount,
  StepStatus,
  LabelText,
} from './styles';

export default function StepIndicator({ currentPosition }) {
  return (
    <Container>
      <StepLabels>
        <Line />
        <StepStatus>
          <StepCount backgroundColor={currentPosition >= 0} />
          <LabelText>Aguardando Retirada</LabelText>
        </StepStatus>

        <StepStatus>
          <StepCount backgroundColor={currentPosition >= 1} />
          <LabelText>Retirada</LabelText>
        </StepStatus>

        <StepStatus>
          <StepCount backgroundColor={currentPosition === 2} />
          <LabelText>Entregue</LabelText>
        </StepStatus>
      </StepLabels>
    </Container>
  );
}

StepIndicator.propTypes = {
  currentPosition: PropTypes.number.isRequired,
};
