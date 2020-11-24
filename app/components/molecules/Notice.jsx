import React from 'react'
import {
    makeStyles,
    Typography,
    Box,
    ListItemAvatar,
  


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
    width: props.windowSize.width,
    height: props.windowSize.height,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(3),
  }),
  main: {
    width: 1144,
    height: 753,
    display : 'flex',
    flexDirection: 'column'

},
header: {
    width: 428,
    height: 65,
    marginTop:17,
    marginBottom: 23,
    marginLeft: 32
    

},
allnoticebox: {
    width: 1144,
    height: 561,

    
    

},
noticebox: {
    width: 472,
    height: 43,
    marginTop: 20,
    marginBottom:20,
    marginLeft: 32,
},
}));

export default function Notice(props) {
  const classes = useStyles(props);
  return <div className={classes.content}>
      <div className={classes.main}>
            <div className={classes.header}>
                <Typography variant="h1" style={{color: '#253053'}}>전체 알림</Typography>
                <Typography variant="h3" style= {{color:'#253053', marginTop:7}}>지금까지 온 알림 목록입니다.</Typography>
            </div> 
            <Divider/>
            <List className={classes.allnoticebox}>
                    <ListItem className={classes.noticebox}>
                        <ListItemAvatar>
                            <Avatar style={{background: '#47B881'}}>
                            <DoneIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="h3" style={{color:'#253053', fontWeight: 'bold', marginLeft:6}}>운영체제 중간고사</Typography>} 
                        secondary={<Typography variant="h5" style={{color:'#253053', marginTop:9, marginLeft:6}}>응시 승인을 받았습니다.</Typography>}></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.noticebox}>
                        <ListItemAvatar>
                            <Avatar style={{background: '#47B881'}}>
                            <DoneIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="h3" style={{color:'#253053', fontWeight: 'bold', marginLeft:6}}>캡스톤 디자인 종합 프로젝트 1  중간고사</Typography>} 
                        secondary={<Typography variant="h5" style={{color:'#253053', marginTop:9, marginLeft:6}}>응시 승인을 받았습니다.</Typography>}></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.noticebox}>
                        <ListItemAvatar>
                            <Avatar style={{background: '#47B881'}}>
                            <DoneIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="h3" style={{color:'#253053', fontWeight: 'bold', marginLeft:6}}>컴퓨터 그래픽스 중간고사</Typography>} 
                        secondary={<Typography variant="h5" style={{color:'#253053', marginTop:9, marginLeft:6}}>응시 승인을 받았습니다.</Typography>}></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.noticebox}>
                        <ListItemAvatar>
                            <Avatar style={{background: '#FF5E57'}}>
                            <ClearIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="h3" style={{color:'#253053', fontWeight: 'bold', marginLeft:6}}>미래 융합 기술 세미나 중간고사</Typography>} 
                        secondary={<Typography variant="h5" style={{color:'#253053', marginTop:9, marginLeft:6}}>응시 거부를 받았습니다.</Typography>}></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.noticebox}>
                        <ListItemAvatar>
                            <Avatar style={{background: '#F2C94C'}}>
                            <EditIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="h3" style={{color:'#253053', fontWeight: 'bold', marginLeft:6}}>데이터베이스 응용 중간고사</Typography>} 
                        secondary={<Typography variant="h5" style={{color:'#253053', marginTop:9, marginLeft:6}}>시험 점수가 발표되었습니다.</Typography>}></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.noticebox}>
                        <ListItemAvatar>
                            <Avatar style={{background: '#47B881'}}>
                            <DoneIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="h3" style={{color:'#253053', fontWeight: 'bold', marginLeft:6}}>데이터베이스 응용 중간고사</Typography>} 
                        secondary={<Typography variant="h5" style={{color:'#253053', marginTop:9, marginLeft:6}}>응시 승인을 받았습니다.</Typography>}></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.noticebox}>
                        <ListItemAvatar>
                            <Avatar style={{background: '#F2C94C'}}>
                            <EditIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="h3" style={{color:'#253053', fontWeight: 'bold', marginLeft:6}}>시스템 프로그래밍 기말고사</Typography>} 
                        secondary={<Typography variant="h5" style={{color:'#253053', marginTop:9, marginLeft:6}}>시험 점수가 발표되었습니다.</Typography>}></ListItemText>
                    </ListItem>
                    <Divider />
            </List>
            
        </div>
  </div>;
}
