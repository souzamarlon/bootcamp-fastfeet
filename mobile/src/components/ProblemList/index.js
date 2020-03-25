import React from 'react';
import { View } from 'react-native';

import { Container, Content, Text, Date } from './styles';

export default function ProblemList({ data, onPress }) {
  return (
    <Content onPress={onPress}>
      <Text>{data.description}</Text>
      <Date>{data.createdAt}</Date>
    </Content>
  );
}
