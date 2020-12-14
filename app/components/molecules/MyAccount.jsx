import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Profile from '../atoms/Profile';
import Settings from '../atoms/Settings';
import SimpleNotice from '../atoms/SimpleNotice';

const useStyles = makeStyles((theme) => ({
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
    display: 'flex',
    justifyContent: 'space-evenly',
  }),
  leftContent: {
    width: 468,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-evenly',
    float: 'left',
  },
  rightContent: (props) => ({
    width: 645,
    marginTop: 31,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    float: 'right',
  }),
}));

export default function Content(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.content}>
      <div className={classes.leftContent}>
        <Profile />
        <SimpleNotice />
      </div>
      <div className={classes.rightContent}>
        <Settings />
      </div>
    </div>
  );
}
