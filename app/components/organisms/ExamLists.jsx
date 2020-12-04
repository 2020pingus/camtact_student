import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyAppBar from '../molecules/AppBar';
import MyDrawer from '../molecules/Drawer';
import useWindowSize from '../../hooks/useWindowSize';
import Content from '../molecules/Content';
import MenuBar from '../molecules/MenuBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
}));

const APP_BAR_HEIGHT = 62;
const DRAWER_WIDTH = 237;

export default function ExamLists() {
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
      <MenuBar
        appBarHeight={APP_BAR_HEIGHT}
        drawerWidth={DRAWER_WIDTH}
        windowSize={windowSize}
      />
    </div>
  );
}
