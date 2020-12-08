import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, CardContent, Typography } from '@material-ui/core';
import { Translate } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    color: '#7C7C7C',
    height: 106,
    marginLeft: 22,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: -12,
  },
  cardEndedContent: {
    color: '#7C7C7C',
    height: 106,
    marginLeft: 22,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: -12,
  },
  examInfo: {
    marginTop: 7,
    fontSize: 15,
    fontWeight: 400,
  },
  icon: {
    marginRight: theme.spacing(0.6),
    width: 15,
    height: 15,
  },
}));
export default function ExamCardContents(props) {
  const classes = useStyles();
  return (
    <>
      {props.state === 0 && (
        <CardContent className={classes.cardContent}>
          <Typography className={classes.examInfo}>
            <PersonIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            {props.professor}
          </Typography>
          <Typography className={classes.examInfo}>
            <EventNoteIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            {props.time}
          </Typography>
          <Typography className={classes.examInfo} color="error">
            <AccessAlarmIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            시험 종료 0시간 50분 20초 남음
          </Typography>
        </CardContent>
      )}
      {props.state === 1 && (
        <CardContent className={classes.cardContent}>
          <Typography className={classes.examInfo}>
            <PersonIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            {props.professor}
          </Typography>
          <Typography className={classes.examInfo}>
            <EventNoteIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            {props.time}
          </Typography>
          <Typography className={classes.examInfo} style={{ color: '#47B881' }}>
            <AccessAlarmIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            10일 23시간 50분 20초 남음
          </Typography>
        </CardContent>
      )}
      {props.state === 2 && (
        <CardContent className={classes.cardContent}>
          <Typography className={classes.examInfo}>
            <PersonIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            {props.professor}
          </Typography>
          <Typography className={classes.examInfo}>
            <EventNoteIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            {props.time}
          </Typography>
          <Typography className={classes.examInfo} style={{ color: '#42ABFF' }}>
            <AccessAlarmIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            5시간 50분 20초 남음
          </Typography>
        </CardContent>
      )}
      {props.state === 3 && (
        <CardContent
          className={classes.cardEndedContent}
          style={{ marginBottom: -30 }}
        >
          <Typography className={classes.examInfo}>
            <PersonIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            {props.professor}
          </Typography>
          <Typography className={classes.examInfo}>
            <EventNoteIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            {props.time}
          </Typography>
        </CardContent>
      )}
    </>
  );
}
