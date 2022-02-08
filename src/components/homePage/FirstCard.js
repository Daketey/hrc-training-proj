/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Handshake } from '../../logos/handShake.svg';
import { ReactComponent as Brokenhandshake } from '../../logos/brhandShake.svg';
import Loading from '../utilityComponents/Loading';

const renderChart = (
  category,
  bucketNames,
  totalCurrentOpenAmount,
  pastDueBucketDocumentAmount
) => {
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
      categories: ['Current Due'].concat(bucketNames),
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        showInLegend: false,
        data: [totalCurrentOpenAmount].concat(pastDueBucketDocumentAmount),
      },
    ],
  });
  chart.setSize(350, 255);
  return chart;
};

export default function FirstCard(props) {
  const { idCheck } = useSelector((state) => state.idCheck);
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState();
  useEffect(() => {
    props.data
      ? renderChart(
          props.data.id.toString(),
          props.data.bucketNames,
          props.data.totalCurrentOpenAmount,
          props.data.pastDueBucketDocumentAmount
        )
      : '';
  }, []);
  return (
    <Card
      style={{ height: 'inherit', background: '#2b3f4d', color: '#FFFFFF80' }}
    >
      {props.data ? (
        <div style={{ marginTop: '-5vh' }}>
          <Checkbox
            checked={checked && idCheck === props.data.id}
            onChange={(event) => {
              event.target.checked
                ? dispatch({ type: 'SEND_ID', payload: props.data.id })
                : '';
              event.target.checked ? dispatch({ type: 'GET_DETAILS' }) : '';
              setChecked(!checked);
            }}
            style={{
              position: 'relative',
              left: '25vw',
              top: '6vh',
              width: '3vw',
              height: '3vh',
              color: '#7cb5ec',
            }}
          />
          <div>
            <h3 style={{ marginLeft: '0.5vw', marginTop: '1vh' }}>
              {props.data.customerName}
            </h3>
            <p style={{ marginLeft: '0.5vw', marginTop: '-2.5vh' }}>
              {props.data.id}
            </p>
          </div>
          <div style={{ display: 'flex', marginTop: '-3.5vh' }}>
            <div id={props.data.id.toString()} />
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
                {props.data.totalBrokenPromises !== 0 ? (
                  <div>
                    <h1
                      style={{
                        color: 'white',
                        fontWeight: 'normal',
                        marginTop: '-2vh',
                      }}
                    >
                      {props.data.totalBrokenPromises}
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
