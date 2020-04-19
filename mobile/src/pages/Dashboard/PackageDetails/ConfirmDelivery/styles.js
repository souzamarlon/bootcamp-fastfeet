import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View.attrs({
  borderTopColor: '#7D40E7',
  borderTopWidth: 155,
})`
  padding-top: 10px;
  background: transparent;
`;

export const Content = styled.View`
  height: 550px;
  bottom: 320px;
`;

export const SubmitButton = styled(Button)`
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  bottom: 130px;
  background: #7d40e7;
`;
