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

export default function ExamCardFooter(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Divider className={classes.divider} />
      <div className={classes.footer}>
        <CardButton
          type="exam"
          name={props.name}
          professor={props.professor}
          time={props.time}
          state={props.state}
        />
        {/* <CardButton state="supervise" mode="start" /> */}
        {/* <CardButton state="supervise" mode="notStart" /> */}
      </div>
    </>
  );
}
