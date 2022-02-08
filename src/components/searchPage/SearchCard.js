/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import Card from '@material-ui/core/Card';
import { ReactComponent as Handshake } from '../../logos/handShake.svg';
import { ReactComponent as Brokenhandshake } from '../../logos/brhandShake.svg';
import Loading from '../utilityComponents/Loading';

const renderChart = (category, amount) => {
  const chart = Highcharts.chart(category, {
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
        dataLabels: {
          style: {
            color: '#FFFFFF80',
            textOutline: 0,
          },
          enabled: true,
          crop: false,
          overflow: 'none',
          formatter() {
            return `${this.point.y}`;
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
      categories: ['Current Due', '1-30', '31-60', '61-90', '>91'],
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        showInLegend: false,
        data: amount,
      },
    ],
  });
  chart.setSize(350, 255);
  return chart;
};

export default function FirstCard(props) {
  const arr = [
    props.data ? props.data.pastdue_bucket1_amount : 0,
    props.data ? props.data.pastdue_bucket2_amount : 0,
    props.data ? props.data.pastdue_bucket3_amount : 0,
    props.data ? props.data.pastdue_bucket4_amount : 0,
    props.data ? props.data.pastdue_bucket5_amount : 0,
  ];

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    props.data ? renderChart(props.data.accountCustomerNumber, arr) : '';
  }, []);
  return (
    <Card
      style={{ height: 'inherit', background: '#2b3f4d', color: '#FFFFFF80' }}
    >
      {props.data ? (
        <div>
          <h3 style={{ marginLeft: '0.5vw', marginTop: '1vh' }}>
            {props.data.customerName}
          </h3>
          <p style={{ marginLeft: '24vw', marginTop: '-6vh' }}>
            {props.data.accountCustomerNumber}
          </p>
          <div style={{ display: 'flex' }}>
            <div id={props.data.accountCustomerNumber} />
            <div
              style={{
                textAlign: 'center',
                borderLeft: '0.01vw solid #5DAAE01A',
                height: '24.5vh',
                width: '6.5vw',
                marginLeft: '1vw',
                marginTop: '3vh',
              }}
            >
              <div style={{ marginTop: '5vh' }}>
                {props.data.broken_p2P_count !== 0 ? (
                  <div>
                    <h1
                      style={{
                        color: 'white',
                        fontWeight: 'normal',
                        marginTop: '-2vh',
                      }}
                    >
                      {props.data.broken_p2P_count}
                    </h1>
                    <Brokenhandshake
                      style={{ width: '3.5vw', marginTop: '-5vh' }}
                    />
                    <br />
                    Broken Promises
                  </div>
                ) : (
                  <div>
                    <Handshake style={{ width: '4vw' }} />
                    <br /> No <br /> Broken Promises
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Card>
  );
}
