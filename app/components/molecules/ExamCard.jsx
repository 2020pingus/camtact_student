import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Card } from '@material-ui/core';
import ExamCardHeader from '../atoms/ExamCardHeader';
import ExamCardContent from '../atoms/ExamCardContent';
import ExamCardFooter from '../atoms/ExamCardFooter';
import ExamDialog from '../atoms/ExamDialog';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    width: 537,
    height: 250,
    marginTop: 16,
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  },
  cardEnded: {
    width: 537,
    height: 220,
    marginTop: 16,
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  },
}));

export default function ExamCard(props) {
  const classes = useStyles(props);
  const { state, name, professor, time, examiners } = props;
  return (
    <>
      {state === 3 ? (
        <Card className={classes.cardEnded}>
          <ExamCardHeader state={state} name={name} />
          <ExamCardContent
            state={state}
            name={name}
            professor={professor}
            time={time}
          />
          <ExamCardFooter
            state={state}
            name={name}
            professor={professor}
            time={time}
            examiners={examiners}
            style={{ marginTop: -30 }}
          />
        </Card>
      ) : (
        <Card className={classes.card}>
          <ExamCardHeader state={state} name={name} />
          <ExamCardContent
            state={state}
            name={name}
            professor={professor}
            time={time}
            examiners={examiners}
          />
          <ExamCardFooter
            state={state}
            name={name}
            professor={professor}
            time={time}
            examiners={examiners}
          />
        </Card>
      )}
    </>
  );
}

ExamCard.propTypes = {
  state: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  professor: PropTypes.node.isRequired,
  time: PropTypes.node.isRequired,
};
