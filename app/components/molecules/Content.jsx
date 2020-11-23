import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  content: (props) => ({
    width: props.windowSize.width,
    height: props.windowSize.height,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#E5E5E5',
    padding: theme.spacing(3),
  }),
}));

export default function Content(props) {
  const classes = useStyles(props);
  return <div className={classes.content}>이곳에 내용을 넣어주세요.</div>;
}