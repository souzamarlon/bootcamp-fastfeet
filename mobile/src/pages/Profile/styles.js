import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  align-content: center;
  margin: 0 36px;
`;

export const Avatar = styled.Image`
  margin-bottom: 10px;
  align-self: center;
  margin-top: 50px;
  width: 150px;
  height: 150px;
  border-radius: 70px;
  /* flex: 1; */
`;

export const Name = styled.Text`
  padding-top: 20px;
  color: #666666;
  font-size: 12px;
  width: 158px;
  /* height: 54px; */
  display: flex;
`;

export const Text = styled.Text`
  line-height: 23px;

  color: #444444;
  font-size: 22px;
  font-weight: bold;
  /* width: 158px; */
  /* height: 54px; */
  display: flex;
`;

export const LogoutButton = styled(Button)`
  margin-top: 30px;
  width: 100%;
  height: 40px;
  background: #e74040;
  color: #ffffff;
`;
