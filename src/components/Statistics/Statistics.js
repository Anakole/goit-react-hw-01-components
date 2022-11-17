export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <StatisticsTitle title={title} />}
      <StatisticsItems stats={stats} />
    </section>
  );
}

function StatisticsTitle({ title }) {
  return <h2 className="title">{title}</h2>;
}

function StatisticsItems({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li key={stat.id} className="item">
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  );
}
