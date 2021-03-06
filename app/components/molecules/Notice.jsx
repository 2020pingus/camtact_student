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
import Paginations from '../atoms/Paginations';
import { useSelector } from 'react-redux';
import { paginate } from '../../utils/paginate';

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
  const getNotices = () => {
    const notices = [
      {
        status: 0,
        title: '운영체제 중간고사',
        content: '응시 승인을 받았습니다.',
      },
      {
        status: 0,
        title: '캡스톤 디자인 종합 프로젝트 1 중간고사',
        content: '응시 승인을 받았습니다.',
      },
      {
        status: 0,
        title: '컴퓨터 그래픽스 중간고사',
        content: '응시 승인을 받았습니다.',
      },
      {
        status: 1,
        title: '미래 융합 기술 세미나 중간고사',
        content: '응시 거부를 받았습니다.',
      },
      {
        status: 2,
        title: '데이터베이스 응용 중간고사',
        content: '시험 점수가 발표되었습니다.',
      },
      {
        status: 0,
        title: '데이터베이스 응용 중간고사',
        content: '응시 승인을 받았습니다.',
      },
      {
        status: 2,
        title: '시스템 프로그래밍 기말고사',
        content: '시험 점수가 발표되었습니다.',
      },
      {
        status: 1,
        title:'IoT 프로그래밍 중간고사',
        content: '응시 거부를 받았습니다.',
      },
      {
        status: 0,
        title: '유비쿼터스센서네트워크 중간고사',
        content: '응시 승인을 받았습니다.',
      },
      {
        status: 2,
        title: '한반도 평화와 선교',
        content: '시험 점수가 발표되었습니다.',
      },
      {
        status: 2,
        title:'유비쿼터스센서네트워크 중간고사',
        content: '시험 점수가 발표되었습니다.',
      },
      {
        status: 0,
        title: '부동산학개론 기말고사',
        content:'응시 승인을 받았습니다.',
      },
      {
        status: 1,
        title: '부동산학개론 중간고사',
        content: '응시 거부를 받았습니다.',
      },
      {
        status: 0,
        title: '알고리즘 기말고사',
        content: '응시 승인을 받았습니다.',
      },
      {
        status: 0,
        title: '생명정보과학 기말고사',
        content: '응시 승인을 받았습니다.',
      },
  
    ]
    return notices;
  }

  const [notices, setNotices] = React.useState({
    data: noticeList,
    pageSize: 7,
    currentPage: 1,
  });

  const handlePageChange = (page) => {
    setNotices({ ...notices, currentPage: page });
  };

  const { data, pageSize, currentPage } = notices;
  const pagedNotices = paginate(data, currentPage, pageSize);

  const { length: count } = notices.data;

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
          {pagedNotices.map((notice, index) => (
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
              <Divider key={`divider-${index}`} className={classes.divider} />
            </>
          ))}
        </List>

        {/* Notice Pagination */}
        <div className={classes.pagination}>
          <Paginations
            pageSize={pageSize}
            itemsCount={count}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          ></Paginations>
        </div>
      </Card>
    </div>
  );
}
