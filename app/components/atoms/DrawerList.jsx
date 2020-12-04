import React, { useState } from 'react';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import routes from '../../constants/routes.json';
import { useDispatch, useSelector } from 'react-redux';
import { moveToAnotherPage } from '../../modules/action/userAction';

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

const EXAM_LIST = 0;
const MY_PAGE = 1;
const CREATE_EXAM = 2;

export default function DrawerList() {
  const classes = useStyles();
  const { role, currentPage } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const moveToExamListPage = () => {
    dispatch(moveToAnotherPage(EXAM_LIST));
    console.log(history);
    history.push(routes.EXAMLIST);
  };

  const moveToMyPage = () => {
    dispatch(moveToAnotherPage(MY_PAGE));
    history.push(routes.MYPAGE);
  };

  // const moveToCreateExamPage = () => {
  //   dispatch(moveToAnotherPage(CREATE_EXAM));
  //   history.push(routes.CREATE_EXAM);
  // };

  return (
    <>
      {role === '응시자' && (
        <List component="nav" className={classes.list}>
          <ListItem
            button
            className={classes.listItem}
            style={{
              color: `${currentPage === EXAM_LIST ? 'white' : '#8D93A5'}`,
            }}
            onClick={moveToExamListPage}
          >
            <ListItemIcon>
              <DashboardRoundedIcon
                viewBox="2 0 23 23"
                className={classes.listIcon}
                style={{
                  color: `${currentPage === EXAM_LIST ? 'white' : '#8D93A5'}`,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="시험 목록" style={{ marginLeft: -3 }} />
          </ListItem>
          <ListItem
            button
            className={classes.listItem}
            style={{
              marginTop: 4,
              color: `${currentPage === MY_PAGE ? 'white' : '#8D93A5'}`,
            }}
            onClick={moveToMyPage}
          >
            <ListItemIcon>
              <PersonRoundedIcon
                viewBox="2 0 23 23"
                className={classes.listIcon}
                style={{
                  color: `${currentPage === MY_PAGE ? 'white' : '#8D93A5'}`,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="마이 페이지" style={{ marginLeft: -3 }} />
          </ListItem>
        </List>
      )}
    </>
  );
}
