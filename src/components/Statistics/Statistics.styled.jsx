import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  padding-top: 10px;

  box-shadow: 0px 6px 8px 0px #666666;

  h2 {
    text-align: center;
    margin-bottom: 10px;
    color: #666666;
  }
`;

export const UploadStatsList = styled.ul`
  width: 100%;
  display: flex;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const UploadStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  gap: 3px;
  align-items: center;
  padding: 5px;
  background-color: ${getRandomHexColor};
`;

export const UploadStatsItemLabel = styled.span`
  font-size: 12px;
  color: white;
`;

export const UploadStatsItemAmount = styled.span`
  font-size: 14px;
  color: white;
`;
