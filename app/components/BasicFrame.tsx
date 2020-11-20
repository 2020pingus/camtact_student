import React from 'react';
import { withStyles } from '@material-ui/styles';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from '@material-ui/core';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: '#FFFFFF',
  },
  toolbar: {
    paddingRight: '10px',
    minHeight: '62px',
    minWidth: '1200px',
  },
  title: {
    flexGrow: 1,
  },
  notificationButton: {
    marginRight: '8px',
  },
  notificationIcon: {
    width: '32px',
    height: '38px',
  },
  exitButton: {
    padding: '0px',
  },
  exitIcon: {
    width: '34px',
    height: '34px',
    marginRight: '7px',
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 4,
    top: 8,
    fontSize: '12px',
    height: '20px',
    width: '20px',
  },
}))(Badge);

export default function BasicFrame() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar} elevation={1}>
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.title}
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
          />
          <IconButton className={classes.notificationButton} color="primary">
            <StyledBadge badgeContent={5} color="error">
              <NotificationsNoneRoundedIcon
                className={classes.notificationIcon}
              />
            </StyledBadge>
          </IconButton>
          <IconButton className={classes.exitButton} color="primary">
            <ExitToAppRoundedIcon className={classes.exitIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
