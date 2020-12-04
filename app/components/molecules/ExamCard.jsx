import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Card, Divider, Box } from '@material-ui/core';
import { Translate } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExamCardHeader from '../atoms/ExamCardHeader';
import ExamCardContent from '../atoms/ExamCardContent';
import ExamCardFooter from '../atoms/ExamCardFooter';
import ExamDialog from '../atoms/ExamDialog';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
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

export default function ProgressExamCard(props) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const progress = props.progress;
  const state = props.state;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.box}>
      {state === 3 ? (
        <Card className={classes.cardEnded}>
          <ExamCardHeader state={state} name={props.name} />
          <ExamCardContent
            state={state}
            name={props.name}
            professor={props.professor}
            time={props.time}
          />
          <ExamCardFooter style={{ marginTop: -30 }} />
        </Card>
      ) : (
        <Card className={classes.card}>
          <ExamCardHeader state={state} name={props.name} />
          <ExamCardContent
            state={state}
            name={props.name}
            professor={props.professor}
            time={props.time}
          />
          <ExamCardFooter />
        </Card>
      )}
    </Box>
  );
}
