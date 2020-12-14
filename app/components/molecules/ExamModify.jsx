import React from 'react';
import { makeStyles, Card, Typography, FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { LabelImportantRounded, VerticalAlignCenterRounded } from '@material-ui/icons';
import { LoaderOptionsPlugin } from 'webpack';

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
    hegith: 42,
    marginLeft: 32,
  },
  examinfo: {
    width: 1034,
    hegith: 520,
    padding: '30px 55px 125px',
  },
  textlabel: {
    fontSize: 'h4', 
    color: '#253053', 
    marginBottom: 6 
  },
  textfield: {
    minWidth: 450,
    minHeight: 44,
  },
  year: {
    marginTop: 6,
    marginRight: 20,
    width: 105,
    height: 44,
  },
  calender: {
    paddingTop:20,
    paddingBottom: 20,
  },
  calendercomponent: {
    marginTop: 6,
    marginRight: 20,
    width: 82,
    height: 44,
  },
  modify: {
    display: 'flex',
    marginTop: 43,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  modifybutton: {
    width: 126,
    height: 36,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 0,
    alignText: 'center',
    
    
  },
}));

export default function ExamCreate(props) {
  const classes = useStyles(props);
  const [year, setYear] = React.useState('2020');
  const [month,setMonth] = React.useState('12');
  const [date,setDate] = React.useState('10');
  const [hour,setHour] = React.useState('19');
  const [minute,setMinute] = React.useState('30');

  const handleChange = (event) => {
    setYear(event.target.value);    
  };
  

  return (
    <div className={classes.content}>
      <Card className={classes.card}>
        <div className={classes.header}>
          <Typography
            variant="h1"
            color="primary"
            style={{ fontWeight: 'bold', paddingTop: 22.5, paddingBottom: 17 }}
          >
            시험 정보
          </Typography>
        </div>
        <Divider />
        <div className={classes.examinfo}>
          <FormControl>
            <label
              style={{ variant: 'h4', color: '#253053', marginBottom: 6 }}
              htmlFor="exam-title"
            >
              시험 과목명
            </label>
            <TextField
              className={classes.textfield}
              id="exam-title"
              variant="outlined"
              color="primary"
              inputProps={{
                style: { paddingTop: 11, paddingBottom: 11 },
              }}
            />
          </FormControl>
          <FormControl style={{ marginLeft: 134 }}>
            <label
              style={{ variant: 'h4', color: '#253053', marginBottom: 6 }}
              htmlFor="exam-type"
            >
              시험 종류
            </label>
            <TextField
              id="exam-type"
              variant="outlined"
              color="primary"
              className={classes.textfield}
              inputProps={{
                style: { paddingTop: 11, paddingBottom: 11 },
              }}
            />
          </FormControl>
          <FormControl style={{ marginTop: 40 , marginBottom: 20}}>
            <label
              style={{ variant: 'h4', color: '#253053', marginBottom: 6 }}
              htmlFor="exam-type"
            >
              시험 주최
            </label>
            <TextField
              id="exam-host"
              variant="outlined"
              color="primary"
              className={classes.textfield}
              inputProps={{
                style: { paddingTop: 11, paddingBottom: 11 },
              }}
            />
          </FormControl>
          <FormControl style={{ marginLeft: 134, marginTop: 40 }}>
            <label
              style={{ variant: 'h4', color: '#253053', marginBottom: 6 }}
              htmlFor="exam-target"
            >
              시험 대상
            </label>
            <TextField
              id="exam-target"
              variant="outlined"
              color="primary"
              className={classes.textfield}
              inputProps={{
                style: { paddingTop: 11, paddingBottom: 11 },
              }}
            />
          </FormControl>
            {examtimeList.map((examtime,index) => (
              <div key={index} className={classes.calender}>
              <label
               style={{variant:'h4',color:'#253053'}}>
              {examtime.title}
            </label>
            <div>
              <Select key={index}
                variant="outlined"
                className={classes.year}
                value={year}
                onChange={handleChange}
                id="Year"
              >
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
              </Select>
              <Select
                variant="outlined"
                className={classes.calendercomponent}
                value={month}
                onChange={handleChange}
                id="Month"
              >
                {monthList.map((month,index) => (
                  <MenuItem key={index} value={month.month}>{month.month}</MenuItem>
                ))}
              </Select>
              <Select
                variant ="outlined"
                className={classes.calendercomponent}
                value={date}
                onChange={handleChange}
                id="Date"
              >
                {dateList.map((date,index) => (
                  <MenuItem key={index} value={date.date}>{date.date}</MenuItem>
                ))}
              </Select>
              <Select
                variant = "outlined"
                className={classes.calendercomponent}
                value={hour}
                onChange={handleChange}
                id="Date"
              >
                {hourList.map((hour,index) => (
                  <MenuItem key={index} value={hour.hour}>{hour.hour}</MenuItem>
                ))}
              </Select>
              <Select 
                variant="outlined"
                className={classes.calendercomponent}
                value={minute}
                onChange={handleChange}
                id="Date"
              >
                {minuteList.map((minute,index) => (
                  <MenuItem key={index} value={minute.minute}>{minute.minute}</MenuItem>
                ))}
              </Select>
            </div>
            </div>
            ))}
            <FormControl style={{marginTop:20}}>
            <label
              style={{ variant: 'h4', color: '#253053', marginBottom: 6 }}
              htmlFor="exam-target"
            >
              시험 총점
            </label>
            <TextField
              id="exam-target"
              variant="outlined"
              color="primary"
              className={classes.textfield}
              inputProps={{
                style: { paddingTop: 11, paddingBottom: 11 },
              }}
            />
            </FormControl>
            <div className={classes.modify}>
              <Button className={classes.modifybutton} variant="contained" color="primary">정보 수정</Button>
            </div>
            </div>
      </Card>
    </div>
  );
}

const examtimeList = [
  {title: "시험 시작 시간 ( 년 / 월 / 일 / 시 )"},
  {title: "시험 종료 시간 ( 년 / 월 / 일 / 시 )"},
];

const monthList = [
  {month: 1},{month: 2},{month: 3},{month: 4},{month: 5},{month: 6},
  {month: 7},{month: 8},{month: 9},{month: 10},{month: 11},{month: 12},
];
const dateList = [
  {date: 1},{date: 2},{date: 3},{date: 4},{date: 5},{date: 6},{date: 7},{date: 8},
  {date: 9},{date: 10},{date: 11},{date: 12},{date: 13},{date: 14},{date: 15},{date: 16},
  {date: 17},{date: 18},{date: 19},{date: 20},{date: 21},{date: 22},{date: 23},{date: 24},
  {date: 25},{date: 26},{date: 27},{date: 28},{date: 29},{date: 30},{date: 31},
];
const hourList = [
  {hour:1},{hour:2},{hour:3},{hour:4},{hour:5},{hour:6},{hour:7},{hour:8},{hour:9},{hour:10},
  {hour:11},{hour:12},{hour:13},{hour:14},{hour:15},{hour:16},{hour:17},{hour:18},{hour:19},{hour:20},
  {hour:21},{hour:22},{hour:23},{hour:24},
];
const minuteList = [
  {minute:0},{minute:5},{minute:10},{minute:15},{minute:20},{minute:25},{minute:30},{minute:35},{minute:40},
  {minute:45},{minute:50},{minute:55},
];