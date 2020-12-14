import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { desktopCapturer } from 'electron';
import RTCVideo from '../atoms/RTCVideo';

const useStyles = makeStyles((theme) => ({
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
  }),
  card: {
    width: 1144,
    height: 753,
    padding: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 1144,
    height: 70,
  },
  headerTopography: {
    fontSize: 26,
    fontWeight: 700,
    width: 120,
    height: 40,
    marginLeft: 32,
  },
  headerSubTopography: {
    fontSize: 18,
    fontWeight: 400,
    margin: 'auto 0',
    textAlign: 'center',
  },
}));

export default function ExamWaitContent(props) {
  const classes = useStyles(props);
  const [hardwareIP, setHardwareIP] = useState('192.168.0.15');
  const [screenStream, setScreenStream] = useState(null);
  return (
    <div className={classes.content}>
      <Card className={classes.card}>
        <Box className={classes.header} display="flex" alignContent="center">
          <Typography className={classes.headerTopography} color="primary">
            연결 설정
          </Typography>
          <Typography
            className={classes.headerSubTopography}
            align="center"
            color="primary"
          >
            하드웨어와 공유 화면을 설정합니다.
          </Typography>
        </Box>
        <Divider />
        <Box>
          <Grid
            container
            style={{ paddingLeft: 32, paddingRight: 32 }}
            spacing={2}
          >
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  marginTop: 16,
                  marginBottom: 16,
                }}
                align="center"
                color="primary"
              >
                하드웨어 화면
              </Typography>
              <Box
                display="flex"
                style={{ width: '100%', height: 335, marginBottom: 18 }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                  style={{ background: '#979797', width: '100%' }}
                >
                  <div style={{ margin: 'auto' }}>
                    <Typography
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        marginBottom: 4,
                      }}
                      color="primary"
                    >
                      하드웨어 IP 주소
                    </Typography>
                    <div>
                      <TextField
                        style={{
                          backgroundColor: 'white',
                          width: 161,
                          marginRight: 13,
                        }}
                        label=""
                        size="small"
                        variant="outlined"
                        onChange={(event) => setHardwareIP(event.target.value)}
                        value={hardwareIP}
                      />
                      <Button variant="contained" color="primary" size="medium">
                        연결
                      </Button>
                    </div>
                  </div>
                </Box>
              </Box>
              <Box display="flex" alignContent="center">
                <PriorityHighIcon
                  style={{
                    width: 19,
                    height: 19,
                    margin: 'auto 0',
                    color: '#FF5E57',
                  }}
                />
                <Typography
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    marginBottom: 4,
                    marginLeft: 2,
                    color: '#FF5E57',
                  }}
                >
                  하드웨어 연결을 설정해주세요.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  marginTop: 16,
                  marginBottom: 16,
                }}
                align="center"
                color="primary"
              >
                하드웨어 화면
              </Typography>
              <Box
                display="flex"
                style={{ width: '100%', height: 335, marginBottom: 18 }}
              >
                {(!screenStream && (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    style={{ background: '#979797', width: '100%' }}
                  >
                    <div style={{ margin: 'auto' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={async () => {
                          const source = (
                            await desktopCapturer.getSources({
                              types: ['window', 'screen'],
                            })
                          )[0];
                          console.log(source);
                          const stream = await navigator.mediaDevices.getUserMedia(
                            {
                              audio: false,
                              video: {
                                mandatory: {
                                  chromeMediaSource: 'desktop',
                                  chromeMediaSourceId: source.id,
                                },
                              },
                            }
                          );
                          setScreenStream(stream);
                        }}
                      >
                        화면 선택
                      </Button>
                    </div>
                  </Box>
                )) || <RTCVideo mediaStream={screenStream} />}
              </Box>
              <Box display="flex" alignContent="center">
                <PriorityHighIcon
                  style={{
                    width: 19,
                    height: 19,
                    margin: 'auto 0',
                    color: '#FF5E57',
                  }}
                />
                <Typography
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    marginBottom: 4,
                    marginLeft: 2,
                    color: '#FF5E57',
                  }}
                >
                  하드웨어 연결을 설정해주세요.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
}
