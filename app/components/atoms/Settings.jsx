import {
  AppBar,
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  makeStyles,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  card: (value) =>
    value === 0
      ? {
          width: 645,
          height: 622,
          border: '1px solid rgba(63, 63, 68, 0.005)',
          boxShadow:
            '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
        }
      : {
          width: 645,
          height: 319,
          border: '1px solid rgba(63, 63, 68, 0.005)',
          boxShadow:
            '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
        },
  header: {
    width: 645,
    height: 54,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  tabBar: {
    width: 610,
    height: 49,
    backgroundColor: 'white',
  },
  tabs: {
    borderBottom: '1px solid #E3E7EB',
  },
  tab: {
    fontSize: 16,
    minWidth: 125,
    color: '#7C7C7C',
    minWidth: 125,
    '&:hover': {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
    '&:focus': {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
    '&$selected': {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
  },
  infoBox: {
    width: 588,
    height: 244,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  infoBox2: {
    width: 588,
    height: 155,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formControl: {
    width: 589,
    height: 66,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileBox: {
    height: 470,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  box: {
    width: 280,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
  },
  divider: {
    backgroundColor: '#E4E7EB',
    width: 588,
  },
  textfield: {
    fontSize: 16,
    width: 280,
  },
  label: {
    fontSize: 14,
    color: theme.palette.primary.main,
    marginBottom: 7,
  },
  year: {
    width: 88,
    height: 38,
  },
  month: { width: 65, height: 38 },
  date: { width: 65, height: 38 },
  sex: {
    width: 77,
    height: 38,
  },
  submitButton: {
    width: 78,
    height: 36,
    borderRadius: 7,
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.14), 0px 3px 4px rgba(63, 63, 68, 0.12), 0px 1px 5px rgba(63, 63, 68, 0.2)',
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    fontSize: 16.5,
    fontWeight: 450,
    paddingTop: 1.8,
    paddingBottom: 3.2,
    marginRight: 7,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function MyTextField(props) {
  const classes = useStyles();
  return (
    <TextField
      id={props.id}
      variant="outlined"
      defaultValue={props.defaultValue}
      className={classes.textfield}
      type={props.type ? props.type : 'string'}
      inputProps={{
        style: {
          height: 28,
          paddingTop: 5,
          paddingBottom: 5,
        },
      }}
    />
  );
}

export default function Settings() {
  let today = new Date();
  const [value, setValue] = React.useState(0);
  const { username, email, organization, avatar } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const classes = useStyles(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <AppBar position="relative" className={classes.tabBar} elevation={0}>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              label="프로필 정보"
              className={classes.tab}
              {...a11yProps(0)}
            />
            <Tab
              label="비밀번호 변경"
              className={classes.tab}
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>
      </div>
      <TabPanel value={value} index={0}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.value);
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box className={classes.profileBox}>
            <Box className={classes.infoBox}>
              <FormControl className={classes.formControl}>
                <Box className={classes.box}>
                  <label className={classes.label} htmlFor="username">
                    이름
                  </label>
                  <MyTextField id="username" defaultValue={username} />
                </Box>
                <Box className={classes.box}>
                  <label className={classes.label} htmlFor="email">
                    이메일
                  </label>
                  <MyTextField id="email" defaultValue={email} />
                </Box>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Box className={classes.box}>
                  <label className={classes.label} htmlFor="birth">
                    생년월일
                  </label>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    style={{ width: 250 }}
                  >
                    <Select
                      className={classes.year}
                      value={1999}
                      variant="outlined"
                    >
                      {Array.from({ length: 80 }, (v, i) => i + 1940).map(
                        (value) => (
                          <MenuItem value={value}>{value}</MenuItem>
                        )
                      )}
                    </Select>
                    <Select
                      className={classes.month}
                      value={today.getMonth() + 1}
                      variant="outlined"
                    >
                      {Array.from({ length: 12 }, (v, i) => i + 1).map(
                        (value) => (
                          <MenuItem value={value}>{value}</MenuItem>
                        )
                      )}
                    </Select>
                    <Select
                      className={classes.date}
                      value={today.getDate()}
                      variant="outlined"
                    >
                      {Array.from({ length: 31 }, (v, i) => i + 1).map(
                        (value) => (
                          <MenuItem value={value}>{value}</MenuItem>
                        )
                      )}
                    </Select>
                  </Box>
                </Box>
                <Box className={classes.box}>
                  <label className={classes.label} htmlFor="sex">
                    성별
                  </label>
                  <Select
                    id="sex"
                    variant="outlined"
                    value={'남자'}
                    className={classes.sex}
                  >
                    <MenuItem value={'남자'}>남자</MenuItem>
                    <MenuItem value={'여자'}>여자</MenuItem>
                  </Select>
                </Box>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Box className={classes.box}>
                  <label className={classes.label} htmlFor="phoneNumber">
                    연락처
                  </label>
                  <MyTextField id="phoneNumber" defaultValue="010-1234-5678" />
                </Box>
              </FormControl>
            </Box>
            <Divider classes={classes.divider} />
            <Box className={classes.infoBox2}>
              <FormControl className={classes.formControl}>
                <Box className={classes.box}>
                  <label className={classes.label} htmlFor="organization1">
                    소속 학교
                  </label>
                  <MyTextField
                    id="organization1"
                    defaultValue={organization.split(' ')[0]}
                  />
                </Box>
                <Box className={classes.box}>
                  <label className={classes.label} htmlFor="organization2">
                    소속 학과
                  </label>
                  <MyTextField
                    id="organization2"
                    defaultValue={organization.split(' ')[1]}
                  />
                </Box>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Box className={classes.box}>
                  <label className={classes.label} htmlFor="studentId">
                    학번
                  </label>
                  <MyTextField id="studentId" defaultValue="20180330" />
                </Box>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            style={{ paddingTop: 11 }}
          >
            <Button
              className={classes.submitButton}
              style={{ backgroundColor: '#253053' }}
            >
              수정
            </Button>
          </Box>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Index 1
      </TabPanel>
    </Card>
  );
}
