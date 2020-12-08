import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import ExamCardButton from '../molecules/ExamCardButton';

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
  const { state, name, professor, time, examiners } = props;
  return (
    <>
      <Divider className={classes.divider} />
      <div className={classes.footer}>
        <ExamCardButton
          type="exam"
          state={state}
          name={name}
          professor={professor}
          time={time}
          examiners={examiners}
        />
        {/* <CardButton type="supervise" mode="start" /> */}
        {/* <CardButton type="supervise" mode="notStart" /> */}
      </div>
    </>
  );
}
