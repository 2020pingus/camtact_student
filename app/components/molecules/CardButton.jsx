import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Divider, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: '#E4E7EB',
    minWidth: 537,
  },
  button: {
    width: '100%',
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 700,
  },
}));

export default function ExamCardButton(props) {
  const state = props.state;
  const mode = props.mode;
  const classes = useStyles(props);
  return (
    <>
      {state === 'exam' && (
        <>
          <Button className={classes.button} style={{ width: '100%' }}>
            시험 상세 정보
          </Button>
          <Divider
            orientation="vertical"
            style={{ height: 54, alignSelf: 'center' }}
          />
          <Button className={classes.button} style={{ color: '#FF5E57' }}>
            시험 시작
          </Button>
        </>
      )}
      {state === 'supervise' && mode === 'start' && (
        <>
          <Button className={classes.button} style={{ color: '#FF5E57' }}>
            시험 감독
          </Button>
        </>
      )}
      {state === 'supervise' && mode === 'notStart' && (
        <>
          <Button className={classes.button} style={{ width: '100%' }}>
            응시자 관리
          </Button>
          <Divider
            orientation="vertical"
            style={{ height: 54, alignSelf: 'center' }}
          />
          <Button className={classes.button}>시험 수정</Button>
        </>
      )}
    </>
  );
}
