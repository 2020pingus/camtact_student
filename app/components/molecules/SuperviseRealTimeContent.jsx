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
} from '@material-ui/core';
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useHistory } from 'react-router';

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
    height: 78,
    borderBottom: '1px solid rgb(228,231,235)',
  },
  headerTopography: {
    fontSize: 26,
    fontWeight: 700,
    width: 120,
    height: 40,
    margin: theme.spacing(1.9, 0, 0, 3.2),
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
  cameraControlSection: {
    width: 532,
    height: 201,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cameraControlSectionContent: {
    color: '#253053',
    fontSize: 16,
    fontWeight: 400,
  },
  cameraSection: {
    display: 'flex',
    justifyContent: 'center',
    width: 210,
    height: 210,
  },
  cameraSectionFrame: {
    background: '#FFFFFF',
    borderRadius: '100px',
    width: 186,
    height: 186,
    margin: theme.spacing(0, 0, 0, 2.0),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.14), 0px 3px 4px rgba(63, 63, 68, 0.12), 0px 1px 5px rgba(63, 63, 68, 0.2)',
  },
  cameraSectionButtons: {
    width: 186,
    height: 186,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  arrowDropUpIcon: {
    background: '#253053',
    borderRadius: '100px',
    color: '#FFFFFF',
    width: 50,
    height: 50,
  },
  buttonsLeftRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 210,
    height: 210,
    margin: theme.spacing(-2.25, 0, 0, 0),
  },
  arrowLeftIcon: {
    background: '#253053',
    borderRadius: '100px',
    color: '#FFFFFF',
    width: 50,
    height: 50,
    margin: theme.spacing(0, 0, 0, -0.5),
  },
  arrowRightIcon: {
    background: '#253053',
    borderRadius: '100px',
    color: '#FFFFFF',
    width: 50,
    height: 50,
  },
  buttonDown: {
    width: 210,
    height: 210,
    margin: theme.spacing(-2, 0, 0, -1.5),
  },
  arrowDropDownIcon: {
    background: '#253053',
    borderRadius: '100px',
    color: '#FFFFFF',
    width: 50,
    height: 50,
  },
  infoSection: {
    width: 418,
    height: 220,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    color: '#253053',
  },
  infoSectionHeader: {
    margin: theme.spacing(0),
    fontSize: 18,
    fontWeight: 700,
    height: 41,
  },
  infoSectionContent: {
    margin: theme.spacing(0),
    fontSize: 16,
    fontWeight: 400,
    height: 41,
  },
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

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
                  onChange={handleChange}
                />
              </div>
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
            </div>

            <div className={classes.contentSection}>
              <div className={classes.cameraControlSection}>
                <div>
                  <p className={classes.cardP}>카메라 제어</p>
                  <p className={classes.cameraControlSectionContent}>
                    우측 상하좌우 버튼으로 카메라를 움직여보세요.
                  </p>
                </div>
                <div className={classes.cameraSection}>
                  <div className={classes.cameraSectionFrame}>
                    <div className={classes.cameraSectionButtons}>
                      <div
                        style={{
                          width: 210,
                          height: 210,
                          marginLeft: -12,
                          marginTop: 2,
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'row',
                        }}
                      >
                        <IconButton>
                          <ArrowDropUpIcon
                            className={classes.arrowDropUpIcon}
                          />
                        </IconButton>
                      </div>
                      <div className={classes.buttonsLeftRight}>
                        <div>
                          <IconButton>
                            <ArrowLeftIcon className={classes.arrowLeftIcon} />
                          </IconButton>
                        </div>
                        <div>
                          <IconButton style={{ marginLeft: -95 }}>
                            <ArrowRightIcon
                              className={classes.arrowRightIcon}
                            />
                          </IconButton>
                        </div>
                      </div>
                      <div
                        className={classes.buttonDown}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'row',
                        }}
                      >
                        <IconButton>
                          <ArrowDropDownIcon
                            className={classes.arrowDropDownIcon}
                          />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classes.infoSection}>
                <p className={classes.infoSectionHeader}>시험자 정보</p>
                <p className={classes.infoSectionContent}>IP 주소: </p>
                <p className={classes.infoSectionContent}>통신 속도: </p>
                <p className={classes.infoSectionContent}>시험 접속 시간: </p>
                <p className={classes.infoSectionContent}>시험 종료 시간: </p>
                <p className={classes.infoSectionContent}>
                  현재까지 푼 문제 개수:{' '}
                </p>
              </div>
            </div>
            <div className={classes.footer}>
              <Button
                className={classes.goBackButton}
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
