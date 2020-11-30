import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  Divider,
  Button,
  Chip,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ExamDialog from './ExamDialog';
import ExamCardButton from './ExamCardButton';
import { Translate } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    width: 537,
    height: 250,
    marginTop: 16,
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  },cardEnded: {
    minWidth: 537,
    minHeight: 220,
    padding: theme.spacing(2, 0, 0, 2),
    margin: theme.spacing(-1.5, -1.5, 6),
  },
  cardHeader: {
    color: theme.palette.primary.main,
    marginLeft: 22,
    paddingTop: 24,
  },
  examTitle: {
    fontSize: 25,
    fontWeight: 700,
  },
  isAllowedChip: {
    backgroundColor: '#47B881',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 700,
    minWidth: 75,
    minHeight: 25,
    marginLeft: theme.spacing(1.2),
  },
  isAllowedWaitingChip: {
    backgroundColor: '#42ABFF',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 700,
    minWidth: 74,
    minHeight: 25,
    marginLeft: theme.spacing(1.2),
  },
  isEndedChip: {
    backgroundColor: '#F2C94C',
    color: '#253053',
    fontSize: 14,
    fontWeight: 700,
    minWidth: 74,
    minHeight: 25,
    marginLeft: theme.spacing(1.2),
  },
  moreIcon: {
    padding: 0,
  },
  cardContent: {
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
  footer: {
    height: 68,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));

export default function ProgressExamCard(props) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const progress = props.progress;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.box}>
      <Card className={classes.card}>
        {/* Card Header */}
        <CardHeader
          className={classes.cardHeader}
          action={
            <IconButton>
              <MoreVertIcon className={classes.moreIcon} />
            </IconButton>
          }
          title={
            <Typography className={classes.examTitle}>운영체제
              { progress === 'allowed' &&
                <Chip className={classes.isAllowedChip} label="승인 완료"></Chip>
              }
              { progress === 'waiting' &&
                <Chip className={classes.isAllowedWaitingChip} label="승인 대기"></Chip>
              }
              { progress === 'end' &&
                <Chip className={classes.isEndedChip} label="종료"></Chip>
              }
            </Typography>

          }
        />
        {/* Card Content */}
        <CardContent className={classes.cardContent}>
          <Typography className={classes.examInfo}>
            <PersonIcon className={classes.icon} viewBox="0 -1 23 23" /> 양승민
            교수님
          </Typography>
          <Typography className={classes.examInfo}>
            <EventNoteIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
            2020년 12월 20일 12시 30분 ~ 13시 30분
          </Typography>
          {progress === 'start' &&
            <Typography className={classes.examInfo} color="error">
              <AccessAlarmIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
              시험 종료 0시간 50분 20초 남음
            </Typography>
          }
          {progress === 'waiting' &&
            <Typography className={classes.examInfo} style={{ color: '#42ABFF' }}>
              <AccessAlarmIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
               5시간 50분 20초 남음
            </Typography>
          }
          {progress === 'allowed' &&
            <Typography className={classes.examInfo} style={{ color: '#47B881' }}>
              <AccessAlarmIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
              10일 23시간 50분 20초 남음
            </Typography>
          }
          {progress === 'end' &&
            <Typography className={classes.examInfo} style={{ color: '#F2C94C' }}>
              <AccessAlarmIcon className={classes.icon} viewBox="0 -1 23 23" />{' '}
              시험 종료
            </Typography>
          }
        </CardContent>
        <Divider className={classes.divider} />
        {/* Card Footer */}
        <div className={classes.footer}>
          <ExamCardButton state="exam" />
          <ExamDialog open={open} onClose={handleClose} subject="운영체제" date="2020년 12월 20일 12시 30분 ~ 13시 30분" remainingTime="시험 종료 0시간 50분 20초 남음" />
        </div>
          {/* TODO : Dialog 하위 컴포넌트로 빼기 */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle
              style={{
                color: '#253053',
                fontSize: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                marginTop: 47,
                marginBottom: -20,
              }}
            >
              <span style={{ fontSize: 30, fontWeight: 700 }}>
                {'운영체제'}
              </span>
            </DialogTitle>
            <DialogContent>
              {/* <DialogContentText style={{display: 'flex', alignItems: 'center', justifyContent: 'column' }}> */}
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9FA4B6',
                  marginTop: 14,
                  fontsize: 20,
                }}
              >
                양승민 교수님
              </p>
              <Chip
                label="0시간 10분 30초 남음"
                style={{
                  marginLeft: 134,
                  marginRight: 134,
                  marginTop: 23,
                  marginBottom: 27,
                  backgroundColor: '#FF5E57',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  width: 250,
                  height: 36,
                }}
              />
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'row',
                  fontSize: 20,
                }}
              >
                <p
                  style={{
                    marginLeft: 93,
                    marginRight: 38,
                    color: '#293356',
                  }}
                >
                  응시 대상
                </p>
                <p style={{ marginRight: 93 }}>숭실대학교 소프트웨어학부생</p>
              </p>
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'row',
                  fontSize: 20,
                }}
              >
                <p
                  style={{
                    marginLeft: 93,
                    marginRight: 38,
                    color: '#293356',
                  }}
                >
                  시험 점수
                </p>
                <p style={{ marginRight: 93 }}> -- / 100</p>
              </p>
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'row',
                  fontSize: 20,
                }}
              >
                <p
                  style={{
                    marginLeft: 93,
                    marginRight: 38,
                    color: '#293356',
                  }}
                >
                  시험 등수
                </p>
                <p style={{ marginRight: 93 }}> -- / 50</p>
              </p>
              {/* </DialogContentText> */}
            </DialogContent>
            <DialogActions
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="contained"
                onClick={handleClose}
                color="primary"
                style={{
                  marginTop: 38,
                  marginBottom: 53,
                  width: 82,
                  height: 36,
                }}
              >
              확인
              </Button>
            </DialogActions>
          </Dialog>

      </Card>
    </Box>
  );
}
