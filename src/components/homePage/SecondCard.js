/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import Card from '@material-ui/core/Card';
import { useSelector } from 'react-redux';
import Loading from '../utilityComponents/Loading';

const renderChart = (
  upcomingOpenAmount,
  upcomingPastDueBucketDocumentAmount
) => {
  const chart = Highcharts.chart('categories', {
    chart: {
      backgroundColor: 'transparent',
      type: 'column',
    },
    title: {
      text: null,
    },
    yAxis: {
      visible: false,
      labels: {
        enabled: false,
      },
      title: {
        text: null,
      },
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        groupPadding: 0.26,
        dataLabels: {
          style: {
            color: '#FFFFFF80',
            textOutline: 0,
          },
          enabled: true,
          crop: false,
          overflow: 'none',
          formatter() {
            return `${this.point.y}%`;
          },
        },
      },
    },
    xAxis: {
      lineColor: '#FFFFFF40',
      labels: {
        y: 12.5,
        autoRotationLimit: 20,
        style: {
          color: '#FFFFFF80',
          fontSize: 10,
          fontWeight: 300,
          textAligm: 'center',
        },
      },
      categories: [
        'Current Due',
        '1-30',
        '31-60',
        '61-90',
        '91-180',
        '181-360',
        '>361',
      ],
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        showInLegend: false,
        data: [upcomingOpenAmount].concat(upcomingPastDueBucketDocumentAmount),
      },
    ],
  });
  chart.setSize(435, 255);
  return chart;
};

export default function SecondCard() {
  const { getUpcomingSummary } = useSelector(
    (state) => state.getUpcomingSummary
  );
  useEffect(() => {
    getUpcomingSummary != null
      ? renderChart(
          getUpcomingSummary.upcomingOpenAmount,
          getUpcomingSummary.upcomingPastDueBucketDocumentAmount
        )
      : '';
  }, []);
  return (
    <Card
      style={{ height: 'inherit', background: '#2b3f4d', color: '#FFFFFF80' }}
    >
      {getUpcomingSummary != null ? (
        <div>
          <h3 style={{ marginLeft: '0.5vw', marginTop: '1vh' }}>
            Remaining Account Balance
          </h3>
          <div id="categories" style={{ marginLeft: '1vw' }} />
        </div>
      ) : (
        <Loading />
      )}
    </Card>
  );
}
