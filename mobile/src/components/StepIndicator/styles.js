import styled from 'styled-components/native';

export const Container = styled.View`
  /* position: relative; */
  overflow: hidden;
  margin: 5px auto;
  width: 85%;
`;
export const Line = styled.View`
  position: absolute;
  width: 84%;
  margin-left: 20px;
  top: 5px;
  height: 1px;
  background-color: #7d40e7;
  /* margin-top: 5px; */
`;

export const StepCount = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: ${props => (props.backgroundColor ? '#7D40E7' : '#FFF')};
  border: 2px solid #7d40e7;
`;

export const StepLabels = styled.View`
  /* width: 100%; */
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

export const StepStatus = styled.View`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const LabelText = styled.Text`
  font-size: 9px;
  padding-top: 5px;
  color: #999999;
  display: flex;
  text-align: center;
  width: 50px;
`;
