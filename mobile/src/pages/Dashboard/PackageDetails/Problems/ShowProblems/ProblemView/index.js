import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';
import PagesBackground from '~/components/PagesBackground';

export default function ProblemView({ navigation, route }) {
  const { data } = route.params;

  return (
    <PagesBackground>
      <Container>
        <Text>{data}</Text>
      </Container>
    </PagesBackground>
  );
}
ProblemView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
