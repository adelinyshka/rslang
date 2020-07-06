import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const options = { responsive: true };

const BarChart = ({ data }) => {
  console.log(data);
  const dataBar = useMemo(() => ({
    datasets: [
      {
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
