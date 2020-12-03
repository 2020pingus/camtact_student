import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { current } from 'immer';
import '../scroll.css';

const useStyles = makeStyles((theme) => ({
  box: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  list: {
    color: 'white',
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
    fontSize: 16,
    paddingLeft: 0,
  },
}));

export default function ExamDrawerList() {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <List component="nav" className={classes.list}>
        {problems.map((problem, index) => (
          <ListItem button key={index} className={classes.listItem}>
            <ListItemText
              primary={problem.title}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

const NOT_SOLVED = 0;
const SOLVED = 1;
const CURRENT_PROBLEM = 2;
const CHECK_PROBLEM = 3;

const problems = [
  { title: '객관식 1', state: SOLVED },
  { title: '객관식 2', state: SOLVED },
  { title: '객관식 3', state: CHECK_PROBLEM },
  { title: '객관식 4', state: SOLVED },
  { title: '객관식 5', state: SOLVED },
  { title: '객관식 6', state: CURRENT_PROBLEM },
  { title: '객관식 7', state: NOT_SOLVED },
  { title: '주관식 1', state: NOT_SOLVED },
  { title: '주관식 2', state: NOT_SOLVED },
  { title: '주관식 3', state: NOT_SOLVED },
  { title: '서술형 1', state: NOT_SOLVED },
  { title: '서술형 2', state: NOT_SOLVED },
  { title: '서술형 2', state: NOT_SOLVED },
  { title: '서술형 2', state: NOT_SOLVED },
  { title: '서술형 2', state: NOT_SOLVED },
  { title: '서술형 2', state: NOT_SOLVED },
  { title: '서술형 2', state: NOT_SOLVED },
  { title: '서술형 2', state: NOT_SOLVED },
  { title: '서술형 2', state: NOT_SOLVED },
  { title: '서술형 2', state: NOT_SOLVED },
];
