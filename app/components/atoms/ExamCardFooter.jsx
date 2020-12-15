import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import ExamCardButton from '../molecules/ExamCardButton';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
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

export default function ExamCardFooter(props) {
  const classes = useStyles();
  const { role } = useSelector((state) => state.user);
  const { state, name, professor, startTime, endTime, examiners } = props;
  return (
    <>
      <Divider className={classes.divider} />
      <div className={classes.footer}>
        {role === '응시자' && (
          <ExamCardButton
            type="exam"
            state={state}
            name={name}
            professor={professor}
            startTime={startTime}
            endTime={endTime}
            examiners={examiners}
          />
        )}
        {role === '감독자' && START_INFO.mode === 'start' ? (
          <ExamCardButton type="supervise" mode="start" />
        ) : (
          <ExamCardButton type="supervise" mode="notStart" />
        )}
      </div>
    </>
  );
}

const START_INFO = {
  mode: 'notStart', // 여기 start, notStart 바꾸면 돼용
};
