import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => {
          const bgColor = getRandomHexColor();

          return (
            <li
              className={css.item}
              key={stat.id}
              style={{ backgroundColor: bgColor }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
