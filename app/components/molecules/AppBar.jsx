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
import { useHistory } from 'react-router';
import routes from '../../constants/routes.json';

const useStyles = makeStyles((theme) => ({
  appBar: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    marginLeft: props.drawerWidth,
    background: '#FFFFFF',
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  }),
  toolBar: (props) => ({
    paddingRight: '8px',
    minHeight: props.appBarHeight,
  }),
  title: {
    flexGrow: 1,
  },
  notificationButton: {
    padding: 9,
  },
  notificationIcon: {
    width: '32px',
    height: '38px',
  },
  exitButton: {
    padding: 9,
  },
  exitIcon: {
    width: '34px',
    height: '34px',
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

export default function MyAppBar(props) {
  const classes = useStyles(props);
  const history = useHistory();

  return (
    <AppBar position="absolute" className={classes.appBar} elevation={1}>
      <Toolbar className={classes.toolBar}>
        <Typography
          className={classes.title}
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
        />
        <IconButton
          className={classes.notificationButton}
          color="primary"
          onClick={() => history.push(routes.NOTIFICATION)}
        >
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
  );
}
