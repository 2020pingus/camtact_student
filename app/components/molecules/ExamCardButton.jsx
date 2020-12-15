import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Chip,
  DialogActions,
} from '@material-ui/core';
import useReactRouter from 'use-react-router';
import routes from '../../constants/routes.json';
import moment from 'moment';
import { useInterval } from './SuperviseContent.jsx';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    color: '#253053',
    fontSize: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    marginTop: 47,
    marginBottom: -20,
  },
  p: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9FA4B6',
    marginTop: 14,
    fontsize: 20,
    marginBottom: 0,
  },
  ongoingChip: {
    marginLeft: 150,
    marginRight: 134,
    marginTop: 23,
    marginBottom: 27,
    backgroundColor: '#FF5E57',
    color: '#FFFFFF',
    fontWeight: 700,
    width: 250,
    height: 36,
  },
  allowedChip: {
    marginLeft: 150,
    marginRight: 134,
    marginTop: 23,
    marginBottom: 27,
    backgroundColor: '#47B881',
    color: '#FFFFFF',
    fontWeight: 700,
    width: 250,
    height: 36,
  },
  allowedWaitingChip: {
    marginLeft: 150,
    marginRight: 134,
    marginTop: 23,
    marginBottom: 27,
    backgroundColor: '#42ABFF',
    color: '#FFFFFF',
    fontWeight: 700,
    width: 250,
    height: 36,
  },
  endedChip: {
    marginLeft: 212,
    marginRight: 134,
    marginTop: 23,
    marginBottom: 27,
    backgroundColor: '#F2C94C',
    color: '#253053',
    fontWeight: 700,
    width: 121,
    height: 36,
  },
  infoDiv: { display: 'flex', justifyContent: 'row', fontSize: 20 },
  infoTitle: {
    marginLeft: 93,
    marginRight: 38,
    color: '#293356',
  },
  dialogActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogActionsButton: {
    marginTop: 38,
    marginBottom: 53,
    width: 82,
    height: 36,
  },
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
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const { history } = useReactRouter();

  const now = moment();
  const [seconds, setSeconds] = useState(now);
  const startTime = new Date(props.startTime);
  const endTime = new Date(props.endTime);

  useInterval(() => {
    setSeconds(moment().format('MM-DD HH:mm:ss'));
  }, 1000);
  console.log(now);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExamStart = () => {
    history.push(routes.EXAMWAIT);
  };

  return (
    <>
      {props.type === 'exam' && (
        <>
          <Button
            className={classes.button}
            onClick={handleClickOpen}
            style={{ width: '100%' }}
          >
            시험 상세 정보
          </Button>
          {/* start dialog */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle className={classes.dialogTitle}>
              <span style={{ fontSize: 30, fontWeight: 700 }}>
                {props.name}
              </span>
            </DialogTitle>
            <DialogContent>
              <p className={classes.p}>{props.professor}</p>
              {props.state === 0 && (
                <Chip
                  className={classes.ongoingChip}
                  label={
                    <>
                      <>시험 종료 </>
                      {moment
                        .duration(moment(endTime).diff(now))
                        .hours()
                        .toString()}
                      <>시간 </>
                      {moment
                        .duration(moment(endTime).diff(now))
                        .minutes()
                        .toString()}
                      <>분 </>
                      {moment
                        .duration(moment(endTime).diff(now))
                        .seconds()
                        .toString()}
                      <>초 남음</>
                    </>
                  }
                />
              )}
              {props.state === 1 && (
                <Chip
                  className={classes.allowedChip}
                  label={
                    <>
                      <>시험 종료 </>
                      {moment
                        .duration(moment(startTime).diff(now))
                        .hours()
                        .toString()}
                      <>시간 </>
                      {moment
                        .duration(moment(startTime).diff(now))
                        .minutes()
                        .toString()}
                      <>분 </>
                      {moment
                        .duration(moment(startTime).diff(now))
                        .seconds()
                        .toString()}
                      <>초 남음</>
                    </>
                  }
                />
              )}
              {props.state === 2 && (
                <Chip
                  className={classes.allowedWaitingChip}
                  label={
                    <>
                      <>시험 종료 </>
                      {moment
                        .duration(moment(startTime).diff(now))
                        .hours()
                        .toString()}
                      <>시간 </>
                      {moment
                        .duration(moment(startTime).diff(now))
                        .minutes()
                        .toString()}
                      <>분 </>
                      {moment
                        .duration(moment(startTime).diff(now))
                        .seconds()
                        .toString()}
                      <>초 남음</>
                    </>
                  }
                />
              )}
              {props.state === 3 && (
                <Chip className={classes.endedChip} label="종료" />
              )}

              <div className={classes.infoDiv}>
                <p className={classes.infoTitle}>응시 대상</p>

                <p style={{ marginRight: 93 }}>{props.examiners}</p>
              </div>
              <div className={classes.infoDiv}>
                <p className={classes.infoTitle}>시험 점수</p>
                <p style={{ marginRight: 93 }}> -- / 100</p>
              </div>
              <div className={classes.infoDiv}>
                <p className={classes.infoTitle}>시험 등수</p>
                <p style={{ marginRight: 93 }}> -- / 50</p>
              </div>
              {/* </DialogContentText> */}
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
              <Button
                className={classes.dialogActionsButton}
                variant="contained"
                onClick={handleClose}
                color="primary"
              >
                확인
              </Button>
            </DialogActions>
          </Dialog>
          <Divider
            orientation="vertical"
            style={{ height: 54, alignSelf: 'center' }}
          />
          {props.state === 0 ? (
            <Button
              className={classes.button}
              style={{ color: '#FF5E57' }}
              onClick={handleExamStart}
            >
              시험 시작
            </Button>
          ) : (
            <Button
              className={classes.button}
              style={{ color: '#C4C4C4' }}
              disabled
            >
              시험 시작
            </Button>
          )}
        </>
      )}
      {props.type === 'supervise' && props.mode === 'start' && (
        <>
          <Button className={classes.button} style={{ color: '#FF5E57' }}>
            시험 감독
          </Button>
        </>
      )}
      {props.type === 'supervise' && props.mode === 'notStart' && (
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
