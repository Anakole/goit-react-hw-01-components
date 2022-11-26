import styled from '@emotion/styled';

export const StatisticsStyle = styled.div`
  margin: auto;
  background-color: #fff;
  width: 350px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const StatisticsTitleStyle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #4e5b64;
  padding: 24px;
  margin: 0;
`;

export const StatiscicsList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5);
  height: 100%;
  padding: 12px;
  color: #fff;
  -webkit-text-stroke: 0.2px #adb9c1;
  border-top: 1px solid rgba(180, 180, 180, 0.541);
  background-color: ${props => props.backgroundColor};
`;

export const StatiscicsLabel = styled.span`
  font-size: 12px;
`;
export const StatiscicsPercentage = styled.span`
  margin-top: 8px;
  font-size: 16px;
`;
