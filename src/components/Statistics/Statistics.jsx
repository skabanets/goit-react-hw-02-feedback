export const Statistics = ({ statistics }) => {
  return (
    <ul>
      {Object.entries(statistics).map(([key, value]) => (
        <li key={key}>
          {key === 'positiveFeadback' ? 'positive feadback' : key}: {value}
        </li>
      ))}
    </ul>
  );
};
