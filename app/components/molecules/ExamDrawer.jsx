import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Drawer,
  makeStyles,
} from '@material-ui/core';
import LogoBar from '../atoms/LogoBar';
import ExamDrawerInfo from '../atoms/ExamDrawerInfo';
import ExamDrawerList from '../atoms/ExamDrawerList';
import useReactRouter from 'use-react-router';
import routes from '../../constants/routes.json';

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
  dialogContent: {
    padding: 20,
    paddingBottom: 0,
  },
  dialogAction: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));

function ExamDrawer({ appBarHeight, drawerWidth }) {
  const classes = useStyles(drawerWidth);
  const [open, setOpen] = React.useState(false);
  const { history } = useReactRouter();

  const handleExamExit = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    handleClose();
    history.replace(routes.EXAMCOMPLETE);
  };

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
          onClick={handleExamExit}
        >
          시험 종료
        </Button>

        {/* Exam Exit Dialog */}
        <Dialog open={open} onClose={handleClose}>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText color="primary">
              시험을 종료하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.dialogAction}>
            <Button onClick={handleAgree} color="error">
              예
            </Button>
            <Button onClick={handleClose} color="primary">
              아니오
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Drawer>
  );
}

export default React.memo(ExamDrawer);
