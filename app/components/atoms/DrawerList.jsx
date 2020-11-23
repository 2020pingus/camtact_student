import React from 'react';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    color: 'white',
    marginTop: 9,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
  },
  listIcon: {
    width: 20,
    height: 20,
    paddingLeft: 18,
  },
}));

export default function DrawerList() {
  const classes = useStyles();

  return (
    <>
      <List component="nav" className={classes.list}>
        <ListItem
          button
          className={classes.listItem}
          style={{ color: '#8D93A5' }}
        >
          <ListItemIcon>
            <DashboardRoundedIcon
              viewBox="2 2 23 23"
              className={classes.listIcon}
              style={{
                color: '#8D93A5',
              }}
            />
          </ListItemIcon>
          <ListItemText primary="시험 목록" style={{ marginLeft: -3 }} />
        </ListItem>
        <ListItem button className={classes.listItem} style={{ marginTop: 4 }}>
          <ListItemIcon>
            <PersonRoundedIcon
              viewBox="2 2 23 23"
              className={classes.listIcon}
              style={{ color: 'white' }}
            />
          </ListItemIcon>
          <ListItemText primary="마이 페이지" style={{ marginLeft: -3 }} />
        </ListItem>
      </List>
    </>
  );
}
