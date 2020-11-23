import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import routes from '../../constants/routes.json';
import logo from '../../../resources/camtact_img.png';

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
    justifyContent: 'space-between',
    width: 360,
    marginTop: 32,
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

export default function SignUp() {
  const classes = useStyles();
  const [role, setRole] = React.useState(false);
  return (
    <>
      <div className={classes.main}>
        <Box className={classes.box1}>
          <Typography variant="h5" style={{ color: '#9EA0A5' }}>
            <Link
              to={routes.LOGIN}
              style={{
                textDecoration: 'none',
                color: '#9EA0A5',
                display: 'flex',
              }}
            >
              <ArrowBackRoundedIcon
                viewBox="0 0 36 23"
                style={{
                  color: '#9EA0A5',
                  fontSize: 14,
                  width: 24,
                  height: 16,
                }}
              />
              {' 뒤로 가기'}
            </Link>
          </Typography>
          <Typography variant="h5" style={{ color: '#9EA0A5' }}>
            {'계정이 있으시다면? '}
            <Link to={routes.LOGIN} className={classes.link}>
              로그인
            </Link>
          </Typography>
        </Box>
        <Typography variant="h2" style={{ marginTop: 41, marginBottom: 7 }}>
          회원 가입
        </Typography>
        <Typography variant="h5" style={{ marginBottom: 34, color: '#9EA0A5' }}>
          새로운 계정 생성하기
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
          <TextField
            label="이름"
            name="name"
            autoComplete="fname"
            variant="outlined"
            className={classes.textField}
            inputProps={{ style: { paddingTop: 15.5, paddingBottom: 15.5 } }}
            required
          />
          <TextField
            label="이메일"
            name="email"
            autoComplete="email"
            variant="outlined"
            className={classes.textField}
            inputProps={{ style: { paddingTop: 15.5, paddingBottom: 15.5 } }}
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
          <TextField
            type="password"
            label="비밀번호 확인"
            name="confirmPassword"
            autoComplete="current-password"
            variant="outlined"
            className={classes.textField}
            inputProps={{ style: { paddingTop: 15.5, paddingBottom: 15.5 } }}
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={role}
                onChange={() => setRole(!role)}
                name="auto-login"
                color="primary"
              />
            }
            label={<Typography variant="h5">감독자인 경우 체크하기</Typography>}
            style={{ marginTop: 9 }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            회원 가입
          </Button>
        </form>
      </div>
      <div className={classes.logo}>
        <Box className={classes.image}>
          <img src={logo} alt="" width="352" height="231" />
        </Box>
      </div>
    </>
  );
}
