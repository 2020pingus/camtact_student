import {
  makeStyles,
  Box,
  Card,
  Grid,
  Divider,
  Button,
  Typography,
  Checkbox,
  IconButton,
  Slider,
} from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import CropFreeIcon from '@material-ui/icons/CropFree';
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useHistory } from 'react-router';
import { Pause } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(-8, 0, 0, 0),
  }),
  card: {
    width: 1145,
    height: 753,
    margin: theme.spacing(2.6, 2.7, 0, 2.8),
    padding: theme.spacing(0),
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  window: {
    width: 531,
    height: 336,
    backgroundColor: '#f1f1f1',
  },
  cardP: {
    color: '#253053',
    fontWeight: 700,
    fontSize: 18,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 1144,
    height: 70,
    borderBottom: '1px solid rgb(228,231,235)',
  },
  headerTopography: {
    fontSize: 26,
    fontWeight: 700,
    width: 120,
    height: 40,
    margin: theme.spacing(1.9, 0, 0, 1.2),
  },
  space: {
    width: 733,
  },
  headerRight: {
    width: 257,
    height: 41,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  headerRightTopography: {
    fontSize: 18,
    fontWeight: 400,
    margin: theme.spacing(2.5, 1.1, 0, 0),
  },
  checkbox: {
    justifyContent: 'center',
    weight: 28,
    height: 28,
    margin: theme.spacing(2.5, 3.2, 0, 0),
    padding: 0,
  },
  infoSection: {
    margin: theme.spacing(0, 0, 0, 3.2),
  },
  infoHeader: {
    color: '#253053',
    fontSize: 18,
    fontWeight: 700,
  },
  infoContent: { color: '#253053', fontSize: 16, fontWeight: 400 },
  screen: {
    width: 1080,
    margin: theme.spacing(0, 0, 0, 3.2),
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  contentSection: {
    width: 1080,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 0, 0, 3.2),
  },
  sliderSection: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  iconButton: { padding: 0, marginTop: 18 },
  pauseIcon: { width: 30, height: 30 },
  timeSection: {
    color: '#253053',
    textAlign: 'center',
    marginRight: 5,
    width: 130,
  },
  slider: { marginTop: 19 },
  infoRight: {
    padding: 0,
    marginTop: 18,
    marginLeft: 18,
    width: 30,
    height: 30,
  },
  cropFreeIcon: { width: 30, height: 30 },
  footer: {
    display: 'flex',
    width: 1144,
    height: 48,
    borderTop: '1px solid rgb(228,231,235)',
    justifyContent: 'center',
  },
  goBackButton: {
    height: 36,
    backgroundColor: '#FFFFFF',
    margin: theme.spacing(1.1, 0, 0, 0),
  },
}));

export default function SuperviseRealTimeContent(props) {
  const classes = useStyles(props);
  const history = useHistory();
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState(30);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleValueChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div xs={12}>
          <Card className={classes.card}>
            <div className={classes.header} xs={12}>
              <div>
                <Typography
                  className={classes.headerTopography}
                  color="primary"
                >
                  허예은
                </Typography>
              </div>
              <div className={classes.space}>&nbsp;</div>
              <div className={classes.headerRight}>
                <Typography
                  className={classes.headerRightTopography}
                  color="primary"
                >
                  부정행위 의심
                </Typography>

                <Checkbox
                  className={classes.checkbox}
                  checked={checked}
                  onChange={handleCheckChange}
                />
              </div>
            </div>
            <div className={classes.infoSection}>
              <p className={classes.infoHeader}>시험자 정보</p>
              <p className={classes.infoContent}>IP 주소: </p>
              <p className={classes.infoContent}>시험 접속 시간: </p>
              <p className={classes.infoContent}>시험 종료 시간: </p>
            </div>
            <div className={classes.screen}>
              <div className={classes.window}>
                <div>
                  <p className={classes.cardP}>화면1</p>
                </div>
              </div>

              <div className={classes.window}>
                <p>화면2</p>
              </div>
              <div className={classes.sliderSection}>
                <div xs={3}>
                  <IconButton className={classes.iconButton} color="primary">
                    <PauseIcon className={classes.pauseIcon} />
                  </IconButton>
                </div>
                <div className={classes.timeSection} xs={3}>
                  <p style={{ marginTop: 20 }}>16:42 / 1:50:12</p>
                </div>
                <div
                  style={{
                    width: 865,
                  }}
                >
                  <Slider
                    className={classes.slider}
                    value={value}
                    onChange={handleValueChange}
                    aria-labelledby="continuous-slider"
                  />
                </div>
                <IconButton color="primary" className={classes.infoRight}>
                  <CropFreeIcon className={classes.cropFreeIcon} />
                </IconButton>
              </div>
            </div>
            <div className={classes.footer}>
              <Button
                className={classes.goBackButton}
                disabled
                variant="contained"
                onClick={() => {
                  history.goBack();
                }}
              >
                돌아가기
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
