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
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ExamDialog from './ExamDialog';
import ProgressExamCard from './ProgressExamCard';
import AllowedExamCard from './AllowedExamCard';
import WaitingExamCard from './WaitingExamCard';
import EndedExamCard from './EndedExamCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'row',
  },
}));

export default function ExamList(props) {
  const classes = useStyles();
  const index = props.index;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  return(
    <div className={classes.root} ms={12}>
    {index === 0 &&
      <>
        <ProgressExamCard />
      </>
    }
    {index === 1 &&
      <>
        <AllowedExamCard />
        <WaitingExamCard />
      </>
    }
    {index === 2 &&
      <>
        <EndedExamCard />
      </>
    }
  </div>
  );
}

ExamList.propTypes = {
  index: PropTypes.node.isRequired
}
