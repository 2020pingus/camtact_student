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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
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
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle style={{color: '#253053', fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700,  marginTop: 47, marginBottom: -20}}>
                <span style={{fontSize: 30, fontWeight: 700}}>{"운영체제"}</span>
              </DialogTitle>
              <DialogContent>
                {/* <DialogContentText style={{display: 'flex', alignItems: 'center', justifyContent: 'column' }}> */}
                  <p style={{display:'flex', alignItems: 'center', justifyContent: 'center', color: '#9FA4B6', marginTop: 14, fontsize: 20}}>양승민 교수님</p>
                  <Chip label="0시간 10분 30초 남음" style={{ marginLeft: 134, marginRight: 134, marginTop: 23, marginBottom: 27, backgroundColor: '#FF5E57', color: '#FFFFFF', fontWeight: 700, width: 250, height: 36}}> </Chip>
                  <p style={{display: 'flex', justifyContent: 'row', fontSize: 20}}>
                    <p style={{marginLeft: 93, marginRight: 38}}>응시 대상</p>
                    <p style={{marginRight: 93}}>숭실대학교 소프트웨어학부생</p>
                  </p>
                  <p style={{display: 'flex', justifyContent: 'row', fontSize: 20 }}>
                    <p style={{marginLeft: 93, marginRight: 38}}>시험 점수</p>
                    <p style={{marginRight: 93}}> -- / 100</p>
                  </p>
                  <p style={{display: 'flex', justifyContent: 'row', fontSize: 20}}>
                    <p style={{marginLeft: 93, marginRight: 38}}>시험 등수</p>
                    <p style={{marginRight: 93}}> -- / 50</p>
                  </p>
                {/* </DialogContentText> */}
              </DialogContent>
              <DialogActions style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button variant="contained" onClick={handleClose} color='primary' style={{marginTop: 38, marginBottom: 53, width: 82, height: 36}} >확인</Button>
              </DialogActions>
            </Dialog>
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
