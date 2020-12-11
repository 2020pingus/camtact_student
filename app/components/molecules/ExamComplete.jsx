import React from 'react';
import {
  makeStyles,
  Typography,
  Card,
  Button,
} from '@material-ui/core';


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
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  },
  title : {
      fontSize: 45,
      fontWeight: 700,
      color: '#253053',
      marginTop:222,
  },
  endexam: {
      fontSize: 30,
      fontWeight: 700,
      color: '#253053',
      marginTop: 20,
  },
  autosubmit: {
      fontSize: 18,
      fontWeight: 400,
      color: '#253053',
      marginTop: 25,

  },
  back: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',

  },
  backbutton: {
      width: 126,
      height: 36,
      backgroundColor: '#FFFFFF',
      fontSize: 18,
      fontWeight: 700,
      color: '#253053',
      marginTop: 39,
      padding: 0,
      alignText: 'center',
  }
  
}));

export default function Notice(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.content}>
      <Card className={classes.card}>
          <Typography className={classes.title}>컴퓨터 그래픽스</Typography>
          <Typography className={classes.endexam}>시험이 종료되었습니다.</Typography>
          <Typography className={classes.autosubmit}>현재까지 작성한 답안은 자동 제출됩니다.</Typography>
          <div classses={classes.back}>
            <Button variant="contained" className={classes.backbutton}>돌아가기</Button>
          </div>
      </Card>
    </div>
  );
}
