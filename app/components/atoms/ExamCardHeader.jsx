import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  CardHeader,
  IconButton,
  Chip,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
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
    height: 25,
    marginLeft: theme.spacing(1.2),
    marginBottom: 3,
  },
  isAllowedWaitingChip: {
    backgroundColor: '#42ABFF',
    minWidth: 75,
    height: 25,
    marginLeft: theme.spacing(1.2),
    marginBottom: 3,
  },
  isEndedChip: {
    backgroundColor: '#F2C94C',
    color: '#253053',
    fontSize: 14,
    fontWeight: 700,
    minWidth: 75,
    height: 25,
    marginLeft: theme.spacing(1.2),
    marginBottom: 3,
  },
  moreIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 0,
  },
}));

export default function ExamCardHeader(props) {
  const classes = useStyles();
  const state = props.state;
  return (
    <>
      <CardHeader
        className={classes.cardHeader}
        action={
          <IconButton>
            <MoreVertIcon className={classes.moreIcon} />
          </IconButton>
        }
        title={
          <div className={classes.examTitle}>
            {props.name}
            {state === 1 && (
              <Chip
                className={classes.isAllowedChip}
                label={
                  <Typography
                    style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 700 }}
                  >
                    승인 완료
                  </Typography>
                }
              />
            )}
            {state === 2 && (
              <Chip
                className={classes.isAllowedWaitingChip}
                label={
                  <Typography
                    style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 700 }}
                  >
                    승인 대기
                  </Typography>
                }
              />
            )}
            {state === 3 && (
              <Chip
                className={classes.isEndedChip}
                label={
                  <Typography
                    style={{ color: '#253053', fontSize: 14, fontWeight: 700 }}
                  >
                    종료
                  </Typography>
                }
              />
            )}
          </div>
        }
      />
    </>
  );
}
