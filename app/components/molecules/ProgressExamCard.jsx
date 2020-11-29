import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  Divider,
  Button,
  Chip,
  Box,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ExamDialog from './ExamDialog';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    justifyContent: 'row',
  },
  box:{
    display: 'flex',
    justifyContent: 'row',
  },
  card: {
    minWidth: 537,
    minHeight: 250,
    padding: theme.spacing(2, 0, 0, 2),
    margin: theme.spacing(-1.5, -1.5, 6),
  },
  cardHeader: {
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
  },
  moreIcon: {
    marginTop: theme.spacing(0.5),
  },
  cardContent: {
    color: '#7C7C7C',
    marginTop: theme.spacing(-4),
  },
  subTitle: {
    marginTop: theme.spacing(1.2),
    fontSize: 15,
  },
  icon: {
    marginRight: theme.spacing(0.6),
    fontSize: 15,
  },
  footer: {
    height: 60,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  divider: {
    backgroundColor: '#E4E7EB',
    minWidth: 537,
    marginLeft: theme.spacing(-3),
    marginTop: theme.spacing(1.4),
  },
  button: {
    width: '100%',
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 700,
  },
}));

export default function ProgressExamCard(props) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  return(
    <>
    <div className={classes.content} ms={6} >
        <Box className={classes.box}>
        <Card className={classes.card}>
          <CardHeader className={classes.cardHeader}
            action={
              <IconButton>
                <MoreVertIcon className={classes.moreIcon} />
              </IconButton>
            }
            title={
              <Typography className={classes.title} gutterBottom variant="h2" component="h1" >
                운영체제
              </Typography>
            }
          >
          </CardHeader>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.subTitle}>
              <PersonIcon className={classes.icon} /> 양승민 교수님
            </Typography>
            <Typography className={classes.subTitle}>
              <EventNoteIcon className={classes.icon} /> 2020년 12월 20일 12시 30분 ~ 13시 30분
            </Typography>
            <Typography className={classes.subTitle} color='error'>
              <AccessAlarmIcon className={classes.icon} /> 시험 종료 0시간 50분 20초 남음
            </Typography>
          </CardContent>
          <Divider className={classes.divider} />
          <div className={classes.footer}>
            <Button className={classes.button} style={{width: '100%', marginLeft: -25}} onClick={handleClickOpen}>시험 상세 정보</Button>
            <ExamDialog open={open} onClose={handleClose} subject="운영체제" date="2020년 12월 20일 12시 30분 ~ 13시 30분" remainingTime="시험 종료 0시간 50분 20초 남음" />
            <Divider
              orientation="vertical"
              style={{ height: 54, alignSelf: 'center'}}
            />
            <Button className={classes.button} style={{color: '#FF5E57'}}>시험 시작</Button>
          </div>
        </Card>
      </Box>
    </div>
    </>
  );
}
