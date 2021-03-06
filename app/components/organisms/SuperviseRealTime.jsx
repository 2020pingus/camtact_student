import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyAppBar from '../molecules/AppBar';
import useWindowSize from '../../hooks/useWindowSize';
import SuperviseDrawer from '../molecules/SuperviseDrawer';
import SuperviseRealTimeContent from '../molecules/SuperviseRealTimeContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
}));

export default function SuperviseRealTime() {
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
      <SuperviseRealTimeContent
        appBarHeight={APP_BAR_HEIGHT}
        drawerWidth={DRAWER_WIDTH}
        windowSize={windowSize}
      />
    </div>
  );
}

const APP_BAR_HEIGHT = 62;
const DRAWER_WIDTH = 237;
