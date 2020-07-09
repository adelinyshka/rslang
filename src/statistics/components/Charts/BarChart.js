import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const options = { responsive: true, maintainAspectRatio: false };

const BarChart = ({ data }) => {
  const dataBar = useMemo(() => ({
    labels: data.map(({ t }) => (
      t.toLocaleDateString({}, {
        day: '2-digit', month: '2-digit', year: '2-digit',
      }))),
    datasets: [
      {
        label: 'Количество изученных карточек',
        backgroundColor: '#567DF4',
        borderColor: '#6979F8',
        borderWidth: 1,
        data,
      },
    ],
  }), [data]);

  return <Bar data={dataBar} options={options} />;
};

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BarChart;
