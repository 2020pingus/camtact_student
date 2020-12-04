import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 645,
    height: 622,
    border: '1px solid rgba(63, 63, 68, 0.005)',
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  },
  header: {
    height: 52,
    paddingLeft: 22,
    display: 'flex',
    alignItems: 'center',
  },
  typoHeader: {
    fontSize: 20,
    fontWeight: 700,
  },
}));

export default function Settings() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <Typography color="primary" className={classes.typoHeader}>
          Settings
        </Typography>
      </div>
    </Card>
  );
}
