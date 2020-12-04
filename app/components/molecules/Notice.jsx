import React from 'react';
import {
  makeStyles,
  Typography,
  Box,
  ListItemAvatar,
  Card,
  Button,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
    display: 'flex',
    alignItems: 'center',
  }),
  card: {
    width: 1144,
    height: 753,
    padding: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  },
  header: {
    width: 428,
    height: 105,
    marginLeft: 32,
  },
  allNoticeBox: {
    width: 1144,
    height: 561,
    padding: 0,
  },
  noticeBox: {
    width: 472,
    height: 42,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 16,
  },
  divider: {
    backgroundColor: '#E4E7EB',
  },
  typoPrimary: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  typoSecondary: {
    color: theme.palette.primary.main,
    marginTop: 8,
    marginLeft: 6,
  },
  pagination: {
    width: '100%',
    height: '8.5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Notice(props) {
  const classes = useStyles(props);
  const noticeList = useSelector((state) => state.user.noticeList);
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.content}>
      <Card className={classes.card}>
        {/* Notice Header */}
        <div className={classes.header}>
          <Typography variant="h1" color="primary" style={{ paddingTop: 24 }}>
            전체 알림
          </Typography>
          <Typography
            variant="h3"
            color="primary"
            style={{ marginTop: 9, marginBottom: 21 }}
          >
            지금까지 온 알림 목록입니다.
          </Typography>
        </div>
        <Divider />

        {/* Notice Content */}
        <List className={classes.allNoticeBox}>
          {noticeList.map((notice, index) => (
            <>
              <ListItem key={index} className={classes.noticeBox}>
                <ListItemAvatar>
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
                ></ListItemText>
              </ListItem>
              <Divider className={classes.divider} />
            </>
          ))}
        </List>

        {/* Notice Pagination */}
        <div className={classes.pagination}>
          <Pagination
            color="primary"
            shape="rounded"
            count={2}
            page={page}
            onChange={handleChange}
            hidePrevButton
            hideNextButton
          />
        </div>
      </Card>
    </div>
  );
}
