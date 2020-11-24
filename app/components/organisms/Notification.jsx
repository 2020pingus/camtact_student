import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyAppBar from '../molecules/AppBar';
import MyDrawer from '../molecules/Drawer';
import useWindowSize from '../../hooks/useWindowSize';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Notice from '../molecules/Notice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  card: {
    width: '100%',
    height: '100%',
    padding: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function Notification() {
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
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ height: '100%' }}
    >
      <Card className={classes.card} elevation={1}>
        <Notice 
        appBarHeight={APP_BAR_HEIGHT}
        drawerWidth={DRAWER_WIDTH}
        windowSize={windowSize}/>
      </Card>
    </Box>
    </div>
  );
}

const APP_BAR_HEIGHT = 62;
const DRAWER_WIDTH = 237;
