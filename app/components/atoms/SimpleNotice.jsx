import {
  Avatar,
  Card,
  Divider,
  Link,
  List,
  ListItemAvatar,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import routes from '../../constants/routes.json';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 468,
    height: 426,
    border: '1px solid rgba(63, 63, 68, 0.005)',
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  },
  header: {
    height: 52,
    paddingLeft: 22,
    display: 'flex',
    alignItems: 'center',
  },
  footer: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  divider: {
    backgroundColor: '#E4E7EB',
  },
  typoHeader: {
    fontSize: 20,
    fontWeight: 700,
  },
  link: {
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 700,
    paddingRight: 23,
  },
}));

export default function SimpleNotice() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <Typography color="primary" className={classes.typoHeader}>
          알림
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <List>list</List>
      <Divider className={classes.divider} />
      <div className={classes.footer}>
        <Link to={routes.NOTIFICATION} className={classes.link}>
          모두 보기
        </Link>
      </div>
    </Card>
  );
}
