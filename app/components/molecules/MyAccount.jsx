import { makeStyles } from '@material-ui/core';
import React from 'react';
import Profile from '../atoms/Profile';
import Settings from '../atoms/Settings';
import SimpleNotice from '../atoms/SimpleNotice';

const useStyles = makeStyles((theme) => ({
  content: (props) => ({
    width: props.windowSize.width,
    height: props.windowSize.height,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
    padding: theme.spacing(3),
  }),
}));

export default function Content(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.content}>
      <div>
        <Profile />
        <SimpleNotice />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
}
