import { getRandomHexColor } from './RandomColor';
import {
  StatisticsStyle,
  StatisticsTitleStyle,
  StatiscicsList,
  StatisticsItem,
  StatiscicsLabel,
  StatiscicsPercentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsStyle>
      <div>
        {title && <StatisticsTitle title={title} />}
        <StatisticsItems stats={stats} />
      </div>
    </StatisticsStyle>
  );
}

function StatisticsTitle({ title }) {
  return <StatisticsTitleStyle>{title}</StatisticsTitleStyle>;
}

function StatisticsItems({ stats }) {
  return (
    <StatiscicsList>
      {stats.map(stat => (
        <StatisticsItem key={stat.id} backgroundColor={getRandomHexColor()}>
          <StatiscicsLabel>{stat.label}</StatiscicsLabel>
          <StatiscicsPercentage>{stat.percentage}%</StatiscicsPercentage>
        </StatisticsItem>
      ))}
    </StatiscicsList>
  );
}
