import { getRandomHexColor } from './RandomColor';
import {
  StatisticsStyle,
  StatisticsTitleStyle,
  StatiscicsList,
  StatisticsItem,
  StatiscicsLabel,
  StatiscicsPercentage,
} from './Statistics.styled';

import { Section } from 'components/App/App.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      <StatisticsStyle>
        {title && <StatisticsTitle title={title} />}
        <StatisticsItems stats={stats} />
      </StatisticsStyle>
    </Section>
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
