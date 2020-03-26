import React from 'react';

import PropTypes from 'prop-types';

import { Content, Text, Date } from './styles';

export default function ProblemList({ data, onPress }) {
  return (
    <Content onPress={onPress}>
      <Text>{data.description}</Text>
      <Date>{data.createdAt}</Date>
    </Content>
  );
}

ProblemList.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};
