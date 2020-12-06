/* eslint-disable react/jsx-props-no-spreading */
import {
  makeStyles,
  AppBar,
  Tab,
  Tabs,
  Box,
  Typography,
  Toolbar,
  Button,
  Grid,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import PropTypes from 'prop-types';
import ExamList from './ExamList';

function createData(id, name, professor, time, state) {
  return { id, name, professor, time, state };
}

const ONGOING = 0;
const ALLOWED = 1;
const WAITING_ALLWOWED = 2;
const END = 3;

const rowsStart = [
  createData(
    0,
    '운영체제',
    '양승민 교수님',
    '2020년 12월 4일 12시 ~ 13시',
    ONGOING
  ),
  createData(
    1,
    '컴퓨터그래픽',
    '김동호 교수님',
    '2020년 12월 7일 12시',
    ONGOING
  ),
];

const rowsExpecting = [
  createData(
    2,
    '컴퓨터그래픽스',
    '김동호 교수님',
    '2020년 12월 7일 12시 ~ 13시',
    ALLOWED
  ),
  createData(
    3,
    '캡스톤',
    '이수원 교수님',
    '2020년 12월 10일 12시 ~ 13시',
    WAITING_ALLWOWED
  ),
];

const rowsEnd = [
  createData(
    4,
    '프레젠테이션테크닉디자인',
    '유명환 교수님',
    '2020년 12월 1일 12시',
    END
  ),
];

const useStyles = makeStyles((theme) => ({
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
    padding: `0 ${
      (props.windowSize.width - props.drawerWidth - 1118) / 2
    }px 0 `,
  }),
  menuBar: {
    // flexWrap: 'wrap',
    backgroundColor: 'transparent',
    marginTop: 14,
    width: 1118,
    height: 49,
  },
  tabs: {
    borderBottom: '1px solid #E3E7EB',
    '& > span': {
      height: 4,
    },
  },
  tab: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightRegular,
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
  buttons: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'space-between',
  },
  sortButton: {
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    width: 95,
    height: 36,
    fontSize: 16,
    padding: '4px 6px',
    paddingLeft: 11,
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.14), 0px 3px 4px rgba(63, 63, 68, 0.12), 0px 1px 5px rgba(63, 63, 68, 0.2)',
    borderRadius: 7,
  },
  createExamButton: {
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    width: 105,
    height: 36,
    fontSize: 16,
    padding: 2.5,
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.14), 0px 3px 4px rgba(63, 63, 68, 0.12), 0px 1px 5px rgba(63, 63, 68, 0.2)',
    borderRadius: 7,
  },
  tabPanel: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ExamMenuBar(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.content}>
      <AppBar className={classes.menuBar} position="static" elevation={0}>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            className={classes.tab}
            label="진행중인 시험"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            label="진행 예정인 시험"
            {...a11yProps(1)}
          />
          <Tab className={classes.tab} label="종료된 시험" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Box className={classes.buttons}>
        <Button className={classes.sortButton} variant="contained">
          날짜순
          <ArrowDropDownIcon viewBox="-2 1.5 22 22" />
        </Button>
        <Button className={classes.createExamButton} variant="contained">
          시험 등록
        </Button>
      </Box>

      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <ExamList data={rowsStart} />
      </TabPanel>

      <TabPanel className={classes.tabPanel} value={value} index={1}>
        <ExamList data={rowsExpecting} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        <ExamList data={rowsEnd} />
      </TabPanel>
    </div>
  );
}
