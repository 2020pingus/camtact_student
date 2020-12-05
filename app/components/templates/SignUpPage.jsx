import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import SignUp from '../organisms/SignUp';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 960,
    height: 640,
    padding: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function SignUpPage() {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ height: '100%', backgroundColor: '#F6F6F6' }}
    >
      <Card className={classes.card} elevation={1}>
        <SignUp />
      </Card>
    </Box>
  );
}
