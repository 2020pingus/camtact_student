import { Avatar, Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import avatar from '../../../resources/avatar_example.jpg';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const useStyles = makeStyles((theme) => ({
  infoBar: {
    height: 154,
    padding: '0px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 500,
    marginBottom: 10,
  },
  timer: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
  },
  infoButton: {
    width: 176,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 17,
  },
  button: {
    height: 30,
    color: 'white',
    fontSize: 12,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 70,
    padding: 0,
    alignText: 'center',
    paddingBottom: 3,
  },
  icon: {
    color: 'white',
    fontSize: 16,
    marginLeft: 4,
  },
}));

export default function SuperviseDrawerInfo() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.infoBar}>
        <Typography variant="h2" display="block" className={classes.title}>
          {EXAM_INFO.title}
        </Typography>
        <Typography display="block" className={classes.timer}>
          {EXAM_INFO.timer}
        </Typography>
        <Box className={classes.infoButton}>
          <Button
            className={classes.button}
            style={{ width: 78, backgroundColor: '#47B881' }}
          >
            전체보기
          </Button>
        </Box>
      </Box>
    </>
  );
}

const CONNECT_FAIL = 0;
const CONNECT_SUCCESS = 1;

const EXAM_INFO = {
  title: '컴퓨터 그래픽스',
  timer: '1 시간 43 분 8 초',
  monitorState: CONNECT_SUCCESS,
  cameraState: CONNECT_FAIL,
};
