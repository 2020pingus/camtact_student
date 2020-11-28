import {
  Avatar,
  Button,
  Card,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import avatar from '../../../resources/avatar_example.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 468,
    height: 294,
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
  content: {
    height: 182,
    paddingLeft: 24,
    paddingRight: 24,
    display: 'flex',
    alignItems: 'center',
  },
  footer: {
    height: 60,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  divider: {
    backgroundColor: '#E4E7EB',
  },
  typoHeader: {
    fontSize: 20,
    fontWeight: 700,
  },
  avatarImage: {
    width: 138,
    height: 138,
    border: '1px solid rgba(63, 63, 68, 0.005)',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 700,
  },
}));

export default function Profile() {
  const [avatarImage, setAvatarImage] = useState(avatar);
  const [username, setUsername] = useState('정승욱');
  const [role, setRole] = useState('응시자');
  const [organization, setOrganization] = useState('숭실대학교 소프트웨어학부');
  const [email, setEmail] = useState('example1234@naver.com');

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <Typography color="primary" className={classes.typoHeader}>
          프로필
        </Typography>
      </div>
      <Divider />
      <div className={classes.content}>
        <div style={{ float: 'left' }}>
          <Avatar alt="" src={avatarImage} className={classes.avatarImage} />
        </div>
        <div
          style={{
            float: 'right',
            paddingLeft: 26,
            paddingTop: 26.5,
            alignSelf: 'flex-start',
          }}
        >
          <Typography
            variant="h4"
            style={{ display: 'inline', paddingRight: 9, color: '#7C7C7C' }}
          >
            {role}
          </Typography>
          <Typography
            variant="h4"
            color="primary"
            style={{ display: 'inline' }}
          >
            {username}
          </Typography>
          <Typography
            variant="h4"
            color="primary"
            style={{ marginTop: 13, marginBottom: 13 }}
          >
            {organization}
          </Typography>
          <Typography variant="h4" color="primary">
            {email}
          </Typography>
        </div>
      </div>
      <Divider />
      <div className={classes.footer}>
        <Button className={classes.button}>이미지 변경</Button>
        <Divider
          orientation="vertical"
          style={{ height: 46, alignSelf: 'center' }}
        />
        <Button className={classes.button}>이미지 제거</Button>
      </div>
    </Card>
  );
}
