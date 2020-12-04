import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Divider } from '@material-ui/core';
import CardButton from '../molecules/CardButton';

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 68,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  divider: {
    backgroundColor: '#E4E7EB',
    border: '1px',
  },
}));

export default function ExamCardFooter() {
  const classes = useStyles();
  return (
    <>
      <Divider className={classes.divider} />
      <div className={classes.footer}>
        <CardButton state="exam" />
        {/* <CardButton state="supervise" mode="start" /> */}
        {/* <CardButton state="supervise" mode="notStart" /> */}

        {/* <ExamDialog
      open={open}
      onClose={handleClose}
      subject="운영체제"
      date="2020년 12월 20일 12시 30분 ~ 13시 30분"
      remainingTime="시험 종료 0시간 50분 20초 남음"
    /> */}
      </div>
    </>
  );
}
