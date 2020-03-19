import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const SubmitButton = styled(Button)`
  margin-right: 20px;
  margin-left: 20px;

  display: flex;
  margin-bottom: 120px;
  background: #7d40e7;
`;
