import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 5px;
  height: 46px;
  border: 2px solid #eee;
  /* background: rgba(255, 255, 255, 0.9); */
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.2)',
})`
  flex: 1;
  font-size: 15px;
  color: #000;
`;
