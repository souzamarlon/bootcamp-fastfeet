import styled from 'styled-components/native';

export const Container = styled.View`
  /* margin-top: 2px; */
  height: 500px;
  padding-top: 10px;
  border-radius: 4px;
  background: #ffff;
  border: 1px solid #eee;
  margin: 20px;
  margin-top: 30px;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 20,
})`
  font-size: 16px;
  color: #999999;
  padding: 20px;
  /* width: 220px; */
  line-height: 20px;
  overflow: hidden;
`;
