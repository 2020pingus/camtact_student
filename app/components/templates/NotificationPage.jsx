import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import Notification from '../organisms/Notification';


const useStyles = makeStyles(() => ({
    card: {
      width: 1144,
      height: 753,
      padding: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }));

export default function NoticePage() {
  const classes = useStyles();
  return (

    <Notification />
    
  );
}
