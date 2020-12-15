/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import routes from '../../constants/routes.json';
import logo from '../../../resources/camtact_img.png';
import { editUserInfo } from '../../modules/action/userAction';

const useStyles = makeStyles((theme) => ({
  main: {
    width: 360,
    height: 600,
    padding: '20px 60px',
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    width: 480,
    height: 640,
    float: 'right',
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    color: theme.palette.primary.main,
  },
  box1: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 360,
    marginTop: 32,
  },
  box2: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
    marginTop: 9,
  },
  textField: {
    width: 360,
    height: 50,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    width: 360,
    height: 40,
    fontSize: 16,
    color: 'white',
    marginTop: 9,
  },
  image: {
    marginTop: 178,
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Login() {
  const classes = useStyles();
  const [check, setCheck] = React.useState(true);
  const [id, setId] = useState('');
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(users);

  return (
    <>
      <div className={classes.main}>
        <Box className={classes.box1}>
          <Typography variant="h5" style={{ color: '#9EA0A5' }}>
            {'계정이 없으시다면? '}
            <Link to={routes.SIGNUP} className={classes.link}>
              회원가입
            </Link>
          </Typography>
        </Box>
        <Typography variant="h2" style={{ marginTop: 82, marginBottom: 7 }}>
          로그인
        </Typography>
        <Typography variant="h5" style={{ marginBottom: 44, color: '#9EA0A5' }}>
          Camtact로 로그인하기
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
          <TextField
            label="이메일"
            name="email"
            autoComplete="email"
            variant="outlined"
            className={classes.textField}
            inputProps={{ style: { paddingTop: 15.5, paddingBottom: 15.5 } }}
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            required
          />
          <TextField
            type="password"
            label="비밀번호"
            name="password"
            autoComplete="current-password"
            variant="outlined"
            className={classes.textField}
            inputProps={{ style: { paddingTop: 15.5, paddingBottom: 15.5 } }}
            required
          />
          <Box className={classes.box2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={check}
                  onChange={() => setCheck(!check)}
                  name="auto-login"
                  color="primary"
                />
              }
              label={<Typography variant="h5">자동 로그인</Typography>}
            />
            <Typography style={{ color: '#9EA0A5', fontSize: 12 }}>
              {'아이디 혹은 비밀번호를 잃어버리셨나요? '}
              <Link to={routes.LOGIN} className={classes.link}>
                찾기
              </Link>
            </Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            // onClick={() => {
            //   const _user = users.find((u) => u.email === id);
            //   console.log(_user);
            //   if (_user)
            //     dispatch(
            //       editUserInfo({
            //         ...user,
            //         username: _user.name,
            //         email: _user.email,
            //       })
            //     );
            // }}
            onClick={() => history.push(routes.NOTIFICATION)}
          >
            로그인
          </Button>
        </form>
      </div>
      <div className={classes.logo}>
        <Box className={classes.image}>
          <img
            src={logo}
            alt=""
            width="352"
            height="231"
            onClick={() => history.push(routes.NOTIFICATION)}
          />
        </Box>
      </div>
    </>
  );
}
