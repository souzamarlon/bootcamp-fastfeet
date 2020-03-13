import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  width: 100%;
  max-width: 335px;

  border-radius: 4px;
  margin: 15px;
`;
export const Form = styled.ScrollView`
  height: 300px;
  margin-bottom: 20px;

  /* margin-top: 50px; */
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.2)',
  textAlignVertical: 'top',
})`
  background: #fff;
  padding: 10px 20px;
  height: 300px;
  font-size: 15px;
`;

export const SubmitButton = styled(Button)`
  max-width: 335px;
  margin-top: 2px;
  background: #7d40e7;
`;
