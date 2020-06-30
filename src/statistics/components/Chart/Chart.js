import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const backgroundColor = ['#567DF4', '#784AC1', '#DB7CF5', '#4CE364'];
const labels = ['Количество пройденных карточек', '% верных ответов', 'Количество новых слов', 'Самая длинная серия верных ответов'];
const options = { responsive: true };

const Chart = ({ data }) => {
  const dataDoughnut = useMemo(() => ({
    labels,
    datasets: [
      {
        data,
        backgroundColor,
      },
    ],
  }), [data]);

  return <Doughnut data={dataDoughnut} options={options} />;
};

Chart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Chart;
