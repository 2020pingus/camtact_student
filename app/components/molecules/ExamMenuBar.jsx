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
  MenuItem,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ExamList from './ExamList';
import { useSelector } from 'react-redux';

function createUser(type) {
  return type;
}

const users = createUser('examiners');

function createData(id, name, professor, startTime, endTime, state, examiners) {
  return { id, name, professor, startTime, endTime, state, examiners };
}

const ONGOING = 0;
const ALLOWED = 1;
const WAITING_ALLWOWED = 2;
const END = 3;

const rowsStart = [
  createData(
    0,
    '컴퓨터 그래픽스',
    '김동호 교수님',
    '2020-12-15T11:00',
    '2020-12-15T18:00',
    ONGOING,
    '숭실대학교 컴퓨터학부생'
  ),
];

const rowsExpecting = [
  createData(
    2,
    '운영체제',
    '양승민 교수님',
    '2020-12-15T15:00',
    '2020-12-15T17:00',
    ALLOWED,
    '숭실대학교 소프트웨어학부생'
  ),
  createData(
    3,
    '캡스톤 디자인 종합 프로젝트',
    '이수원 교수님',
    '2020-12-15T16:30',
    '2020-12-15T17:00',
    WAITING_ALLWOWED,
    '숭실대학교 소프트웨어학부생'
  ),
];

const rowsEnd = [
  createData(
    4,
    '프레젠테이션테크닉디자인',
    '유명환 교수님',
    '2020-12-13T12:30',
    '2020-12-13T17:00',
    END,
    '숭실대학교 소프트웨어학부생'
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

const options = ['날짜순', '시간순', '이름순'];
export default function ExamMenuBar(props) {
  const classes = useStyles(props);
  const { role } = useSelector((state) => state.user);
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleDialogClickOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
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
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            onClick={handleToggle}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#253053',
              fontSize: 16,
              fontWeight: 700,
              width: 95,
              paddingRight: 5,
              paddingTop: 1,
              height: 36,
              borderRadius: 7,
            }}
          >
            {options[selectedIndex]}
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        style={{ width: 95, color: '#253053' }}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        {role === '응시자' && (
          <Button
            className={classes.createExamButton}
            variant="contained"
            onClick={handleDialogClickOpen}
          >
            시험 등록
          </Button>
        )}

        <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle
            id="form-dialog-title"
            style={{
              color: '#253053',
              paddingRight: 40,
              paddingLeft: 40,
              paddingTop: 20,
              paddingBottom: 0,
            }}
          >
            초대 코드를 입력해주세요
          </DialogTitle>
          <DialogContent style={{ textAlign: 'center' }}>
            <TextField
              style={{ width: 212 }}
              autoFocus
              id="name"
              label="초대코드"
              type="input"
              fullWidth
              color="primary"
            />
          </DialogContent>
          <DialogActions
            style={{
              paddingLeft: 40,
              paddingRight: 40,
              display: 'flex',
              justifyContent: 'space-evenly',
              paddingBottom: 16,
            }}
          >
            <Button onClick={handleDialogClose} color="primary">
              취소
            </Button>
            <Button onClick={handleDialogClose} color="primary">
              등록
            </Button>
          </DialogActions>
        </Dialog>
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
