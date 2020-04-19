import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  width: 90%;
  margin: auto;
  position: absolute;
  align-self: center;
  top: 75px;
`;

export const Form = styled.ScrollView`
  height: 300px;
  margin-bottom: 20px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.2)',
  textAlignVertical: 'top',
})`
  background: #fff;
  padding: 20px 20px;
  height: 300px;
  font-size: 16px;
  border-radius: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 2px;
  background: #7d40e7;
`;
