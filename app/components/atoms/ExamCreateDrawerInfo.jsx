import { Avatar, Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import avatar from '../../../resources/avatar_example.jpg';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const useStyles = makeStyles((theme) => ({
  infoBar: {
    height: 259,
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
  host: {
      color: 'white',
      fontSize: 18,
      fontWeight: 300,
      marginBottom: 3,
  },
  time: {
      color: 'white',
      fontSize: 16,
      fontWeight : 300,
  },
  totalscore: {
      color: 'white',
      fontSize: 16,
      fontWeight: 300,
      marginTop: 3,
  },
  infoButton: {
    width: 201,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 17,
  },
  button: {
    height: 36,
    fontSize: 16,
    fontWeight: 400,
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

export default function ExamDrawerInfo() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.infoBar}>
        <Typography variant="h2" display="block" className={classes.title}>
          {EXAM_INFO.title}
        </Typography>
        <Typography display="block" className={classes.host}>
          {EXAM_INFO.host}
        </Typography>
        <Typography display="block" className={classes.time}>
          {EXAM_INFO.starttime}
        </Typography>
        <Typography display="block" className={classes.time}>
          {EXAM_INFO.endtime}
        </Typography>
        <Typography display="block" className={classes.totalscore}>
          {EXAM_INFO.totalscore}
        </Typography>
        <Box className={classes.infoButton}>
          {EXAM_INFO.monitorState === CONNECT_SUCCESS ? (
            <Button
              className={classes.button}
              style={{ width: 94, backgroundColor: '#F2C94C' , color: '#253053' , fontWeight: 700}}
            >
              정보 수정
            </Button>
          ) : (
            <Button
              className={classes.button}
              style={{ width: 94, backgroundColor: '#FF5E57' }}
            >
              정보 수정
              <CancelRoundedIcon
                className={classes.icon}
                viewBox="-1 -1 24 24"
              />
            </Button>
          )}
          {EXAM_INFO.cameraState === CONNECT_SUCCESS ? (
            <Button
              className={classes.button}
              style={{ width: 94, backgroundColor: '#47B881' }}
            >
              문제 생성
              <CheckRoundedIcon
                className={classes.icon}
                viewBox="-1 -1 24 24"
              />
            </Button>
          ) : (
            <Button
              className={classes.button}
              style={{ width: 94, backgroundColor: '#47B881', color: 'white', fontWeight: 700 }}
            >
              문제 생성
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}

const CONNECT_FAIL = 0;
const CONNECT_SUCCESS = 1;

const EXAM_INFO = {
  title: '컴퓨터 그래픽스',
  host: '홍길동 교수님',
  starttime: '2020. 12. 10. 19 : 30 부터',
  endtime: '2020. 12. 10. 20 : 30 까지',
  totalscore:'총점 : 450 점',
  monitorState: CONNECT_SUCCESS,
  cameraState: CONNECT_FAIL,
};
