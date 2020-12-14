import React from 'react';
import {
  Avatar,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import zIndex from '@material-ui/core/styles/zIndex';

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
  allNoticeBox: {
    width: '100%',
    padding: 0,
  },
  noticeBox: {
    width: 405,
    height: 42,
    padding: 0,
    marginTop: 18,
    marginBottom: 19,
    marginLeft: 22,
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
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 700,
    paddingRight: 23,
  },
  typoPrimary: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  typoSecondary: {
    color: theme.palette.primary.main,
    marginTop: 6,
    marginLeft: 6,
  },
}));

export default function SimpleNotice() {
  const classes = useStyles();
  const noticeList = useSelector((state) => state.user.noticeList);
  return (
    <Card className={classes.card}>
      {/* Simple Notice Header */}
      <div className={classes.header}>
        <Typography color="primary" className={classes.typoHeader}>
          알림
        </Typography>
      </div>
      <Divider className={classes.divider} />

      {/* Simple Notice Content */}
      <List className={classes.allNoticeBox}>
        {noticeList.slice(0, 4).map((notice, index) => (
          <>
            <ListItem key={`item-${index}`} className={classes.noticeBox}>
              <ListItemAvatar key={`avatar-${index}`}>
                {notice.status === 0 ? (
                  <Avatar style={{ background: '#47B881' }}>
                    <DoneIcon />
                  </Avatar>
                ) : notice.status === 1 ? (
                  <Avatar style={{ background: '#FF5E57' }}>
                    <ClearIcon />
                  </Avatar>
                ) : (
                  <Avatar style={{ background: '#F2C94C' }}>
                    <EditIcon />
                  </Avatar>
                )}
              </ListItemAvatar>
              <ListItemText
                key={`text-${index}`}
                primary={
                  <Typography variant="h3" className={classes.typoPrimary}>
                    {notice.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="h5" className={classes.typoSecondary}>
                    {notice.content}
                  </Typography>
                }
              />
            </ListItem>
            <Divider className={classes.divider} />
          </>
        ))}
      </List>

      {/* Simple Notice Footer */}
      <div className={classes.footer}>
        <Link to={routes.NOTIFICATION} className={classes.link}>
          모두 보기
        </Link>
      </div>
    </Card>
  );
}
