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

const useStyles = makeStyles((theme) => ({
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
    padding: theme.spacing(3),
  }),
  menuBar: {
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    marginTop: theme.spacing(-2),
    marginLeft: theme.spacing(1.8),
    width: 1118,
    height: 41,
  },
  tabs: {
    borderBottom: '1px solid #E3E7EB',
  },
  tab: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightRegular,
    color: '#7C7C7C',
    minWidth: 125,
    '&:focus': {
      fontWeight: 'bold',
      color: '#253053',
    },
    '&$selected': {
      color: '#253053',
      fontWeight: 'bold',
    },
  },
  button: {
    background: '#FFFFFF',
    fontWeight: 'bold',
    color: '#253053',
    width: 95,
    height: 36,
    fontSize: 16,
    margin: theme.spacing(3.2, 0, 1.6, 1.8),
  },
  createExamButton: {
    background: '#FFFFFF',
    fontWeight: 'bold',
    color: '#253053',
    width: 95,
    height: 36,
    fontSize: 16,
    margin: theme.spacing(3.2, 0, 1.6, 1.8),
    marginLeft: -18,
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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

export default function MenuBar(props) {
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

      <Grid container direction="row">
        <Grid item xs={3}>
          <Button className={classes.button} size="small" variant="contained">
            날짜순
            <ArrowDropDownIcon />
          </Button>
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={1}>
          <Button
            className={classes.createExamButton}
            size="small"
            variant="contained"
          >
            시험 등록
          </Button>
        </Grid>
      </Grid>

      <TabPanel value={value} index={0}>
        {/* Item one */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Item two */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Item three */}
      </TabPanel>
    </div>
  );
}
