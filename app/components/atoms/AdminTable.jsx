import React from 'react';
import { Grid, Button, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2.9, 2, 2.8),
  },
}));
export default function AdminTable() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>안녕</Card>
    </>
  );
}
