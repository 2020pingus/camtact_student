import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { current } from 'immer';
import '../scroll.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { moveToProblem } from '../../modules/action/examAction';

const useStyles = makeStyles((theme) => ({
  box: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  list: {
    marginTop: 25,
    padding: 0,
    width: 187,
    height: 528,
    overflow: 'auto',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    height: 28,
    marginBottom: 8,
    paddingLeft: 0,
  },
  typo: {
    fontSize: 16,
    fontWeight: 530,
    color: 'white',
  },
}));

export default function ExamDrawerList() {
  const classes = useStyles();
  const { problems, currentProblem } = useSelector((state) => state.exam);
  const dispatch = useDispatch();

  return (
    <div className={classes.box}>
      <List component="nav" className={classes.list}>
        {problems.map((problem, index) => (
          <ListItem button key={index} className={classes.listItem}>
            <ListItemText
              primary={
                <Typography
                  className={classes.typo}
                >
                  {problem.title}
                </Typography>
              }
              key={index}
              className={classes.listItem}
              onClick={() => dispatch(moveToProblem(index))}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
