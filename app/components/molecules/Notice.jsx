import React from 'react';
import {
  makeStyles,
  Typography,
  Box,
  ListItemAvatar,
  Card,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#E5E5E5',
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
}));

export default function Notice(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.content}>
      <Card className={classes.card}>
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
        <List className={classes.allNoticeBox}>
          <ListItem className={classes.noticeBox}>
            <ListItemAvatar>
              <Avatar style={{ background: '#47B881' }}>
                <DoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h3" className={classes.typoPrimary}>
                  운영체제 중간고사
                </Typography>
              }
              secondary={
                <Typography variant="h5" className={classes.typoSecondary}>
                  응시 승인을 받았습니다.
                </Typography>
              }
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem className={classes.noticeBox}>
            <ListItemAvatar>
              <Avatar style={{ background: '#47B881' }}>
                <DoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h3" className={classes.typoPrimary}>
                  캡스톤 디자인 종합 프로젝트 1 중간고사
                </Typography>
              }
              secondary={
                <Typography variant="h5" className={classes.typoSecondary}>
                  응시 승인을 받았습니다.
                </Typography>
              }
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem className={classes.noticeBox}>
            <ListItemAvatar>
              <Avatar style={{ background: '#47B881' }}>
                <DoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h3" className={classes.typoPrimary}>
                  컴퓨터 그래픽스 중간고사
                </Typography>
              }
              secondary={
                <Typography variant="h5" className={classes.typoSecondary}>
                  응시 승인을 받았습니다.
                </Typography>
              }
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem className={classes.noticeBox}>
            <ListItemAvatar>
              <Avatar style={{ background: '#FF5E57' }}>
                <ClearIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h3" className={classes.typoPrimary}>
                  미래 융합 기술 세미나 중간고사
                </Typography>
              }
              secondary={
                <Typography variant="h5" className={classes.typoSecondary}>
                  응시 거부를 받았습니다.
                </Typography>
              }
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem className={classes.noticeBox}>
            <ListItemAvatar>
              <Avatar style={{ background: '#F2C94C' }}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h3" className={classes.typoPrimary}>
                  데이터베이스 응용 중간고사
                </Typography>
              }
              secondary={
                <Typography variant="h5" className={classes.typoSecondary}>
                  시험 점수가 발표되었습니다.
                </Typography>
              }
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem className={classes.noticeBox}>
            <ListItemAvatar>
              <Avatar style={{ background: '#47B881' }}>
                <DoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h3" className={classes.typoPrimary}>
                  데이터베이스 응용 중간고사
                </Typography>
              }
              secondary={
                <Typography variant="h5" className={classes.typoSecondary}>
                  응시 승인을 받았습니다.
                </Typography>
              }
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem className={classes.noticeBox}>
            <ListItemAvatar>
              <Avatar style={{ background: '#F2C94C' }}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h3" className={classes.typoPrimary}>
                  시스템 프로그래밍 기말고사
                </Typography>
              }
              secondary={
                <Typography variant="h5" className={classes.typoSecondary}>
                  시험 점수가 발표되었습니다.
                </Typography>
              }
            ></ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Card>
    </div>
  );
}
