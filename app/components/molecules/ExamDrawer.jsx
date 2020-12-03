import React from 'react';
import { Button, Divider, Drawer, makeStyles } from '@material-ui/core';
import LogoBar from '../atoms/LogoBar';
import ExamDrawerInfo from '../atoms/ExamDrawerInfo';
import ExamDrawerList from '../atoms/ExamDrawerList';

const useStyles = makeStyles((theme) => ({
  drawer: (drawerWidth) => ({
    width: drawerWidth,
    flexShrink: 0,
  }),
  drawerPaper: (drawerWidth) => ({
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
  }),
  submit: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    width: 126,
    height: 36,
    position: 'fixed',
    bottom: 36,
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
    padding: 0,
    alignText: 'center',
    paddingBottom: 3,
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: 7,
  },
}));

function ExamDrawer({ appBarHeight, drawerWidth }) {
  const classes = useStyles(drawerWidth);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      color="primary"
    >
      <LogoBar logoBarHeight={appBarHeight} />
      <Divider variant="middle" style={{ backgroundColor: '#353F5F' }} />
      <ExamDrawerInfo />
      <Divider variant="middle" style={{ backgroundColor: '#E4E7EB' }} />
      <ExamDrawerList />
      <div className={classes.submit}>
        <Button
          type="submit"
          className={classes.submitButton}
          style={{ backgroundColor: '#47B881' }}
        >
          시험 종료
        </Button>
      </div>
    </Drawer>
  );
}

export default React.memo(ExamDrawer);
