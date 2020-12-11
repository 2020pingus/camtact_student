import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyAppBar from '../molecules/AppBar';
import MyDrawer from '../molecules/Drawer';
import useWindowSize from '../../hooks/useWindowSize';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import ExamComplete from '../molecules/ExamComplete';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
}));

export default function ExamCompletion() {
  const classes = useStyles();
  const windowSize = useWindowSize();

  return (
    <div className={classes.root}>
      <MyAppBar
        appBarHeight={APP_BAR_HEIGHT}
        drawerWidth={DRAWER_WIDTH}
        windowSize={windowSize}
      />
      <MyDrawer appBarHeight={APP_BAR_HEIGHT} drawerWidth={DRAWER_WIDTH} />
      <ExamComplete
        appBarHeight={APP_BAR_HEIGHT}
        drawerWidth={DRAWER_WIDTH}
        windowSize={windowSize}
      />
    </div>
  );
}

const APP_BAR_HEIGHT = 62;
const DRAWER_WIDTH = 237;
