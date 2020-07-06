import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const backgroundColor = ['#567DF4', '#784AC1', '#DB7CF5', '#4CE364'];
const options = { responsive: true };

const DoughnutChart = ({ data }) => {
  const dataDoughnut = useMemo(() => ({
    datasets: [
      {
        data,
        backgroundColor,
      },
    ],
  }), [data]);

  return <Doughnut data={dataDoughnut} options={options} />;
};

DoughnutChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DoughnutChart;
