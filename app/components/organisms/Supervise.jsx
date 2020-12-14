import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyAppBar from '../molecules/AppBar';
import useWindowSize from '../../hooks/useWindowSize';
import SuperviseDrawer from '../molecules/SuperviseDrawer';
import SuperviseContent from '../molecules/SuperviseContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
}));

export default function Supervise() {
  const classes = useStyles();
  const windowSize = useWindowSize();

  return (
    <div className={classes.root}>
      <MyAppBar
        appBarHeight={APP_BAR_HEIGHT}
        drawerWidth={DRAWER_WIDTH}
        windowSize={windowSize}
      />
      <SuperviseDrawer
        appBarHeight={APP_BAR_HEIGHT}
        drawerWidth={DRAWER_WIDTH}
      />
      <SuperviseContent
        appBarHeight={APP_BAR_HEIGHT}
        drawerWidth={DRAWER_WIDTH}
        windowSize={windowSize}
        data={data}
      />
    </div>
  );
}

const APP_BAR_HEIGHT = 62;
const DRAWER_WIDTH = 237;

function createData(
  id,
  name,
  ip,
  speed,
  time,
  numSolvedProblem,
  isDetected,
  isConnected
) {
  return {
    id,
    name,
    ip,
    time,
    speed,
    numSolvedProblem,
    isDetected,
    isConnected,
  };
}

const data = [
  createData(
    '0',
    '심예은',
    '0.0.0.0',
    '2020년 12월 7일 12시',
    '23',
    '2',
    'x',
    'o'
  ),
  createData(
    '1',
    '허예은',
    '0.0.0.0',
    '2020년 12월 7일 12시',
    '35',
    '14',
    'x',
    'o'
  ),
  createData('2', '이예은', '0.0.0.0', '2020년 12월 7일 12시', '11', 'o', 'x'),
  createData('3', '박예은', '0.0.0.0', '2020년 12월 7일 12시', '11', 'o', 'x'),
  createData(
    '4',
    '정예은',
    '0.0.0.0',
    '2020년 12월 7일 12시',
    '52',
    '4',
    'o',
    'o'
  ),
  createData(
    '5',
    '조예은',
    '0.0.0.0',
    '2020년 12월 7일 12시',
    '77',
    '8',
    'x',
    'o'
  ),
  createData(
    '6',
    '신예은',
    '0.0.0.0',
    '2020년 12월 7일 12시',
    '23',
    '2',
    'x',
    'o'
  ),
];
