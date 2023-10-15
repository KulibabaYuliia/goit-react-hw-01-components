import {
  StatisticsWrapper,
  UploadStatsList,
  UploadStatsItem,
  UploadStatsItemLabel,
  UploadStatsItemAmount,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <h2>{title}</h2>}

      <UploadStatsList>
        {stats.map(stat => {
          // const bgColor = getRandomHexColor();

          return (
            <UploadStatsItem key={stat.id}>
              <UploadStatsItemLabel>{stat.label}</UploadStatsItemLabel>
              <UploadStatsItemAmount className="fff">
                {stat.percentage}
              </UploadStatsItemAmount>
            </UploadStatsItem>
          );
        })}
      </UploadStatsList>
    </StatisticsWrapper>
  );
};
