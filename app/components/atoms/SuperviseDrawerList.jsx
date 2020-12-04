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

export default function SuperviseDrawerList(props) {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <List component="nav" className={classes.list}>
        {examiners.map((examiner) => (
          <ListItem button key={examiner.id} className={classes.listItem}>
            {examiner.state === DETECTED && (
              <ListItemText
                primary={examiner.name}
                className={classes.listItem}
                style={{ color: '#F2C94C' }}
              />
            )}
            {examiner.state === NOT_DETECTED && (
              <ListItemText
                primary={examiner.name}
                className={classes.listItem}
              />
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

const NOT_DETECTED = 0;
const DETECTED = 1;

const examiners = [
  { id: 0, name: '허예은', state: NOT_DETECTED },
  { id: 1, name: '김예은', state: DETECTED },
  { id: 2, name: '박예은', state: NOT_DETECTED },
  { id: 3, name: '조예은', state: DETECTED },
  { id: 4, name: '정예은', state: NOT_DETECTED },
  { id: 5, name: '이예은', state: NOT_DETECTED },
];
