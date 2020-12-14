/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/* eslint-disable no-new */
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
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { desktopCapturer } from 'electron';
import RTCVideo from '../atoms/RTCVideo';
import { testerConnectServer } from '../../modules/action/testerAction';
import { getTesterInstance } from '../../utils/util';
import { HardwarePeer } from '../../utils/hardwarepeer';

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

  const [hardwareIP, setHardwareIP] = useState('192.168.0.45');
  const [screenStream, setScreenStream] = useState(null);
  const [hardwareStream, setHardwareStream] = useState(null);
  const [hardwarePeer, setHardwarePeer] = useState(
    new HardwarePeer((stream) => {
      // setHardwareStream(stream);
      // testerConnection_hw.p.addStream(stream);
      setHardwareStream(stream);
    })
  );
  const testerConnection_pc = getTesterInstance('0', (dir) => {
    console.log(dir);
    hardwarePeer.remoteDirection = dir;
  });

  if (!testerConnection_pc.connected && !testerConnection_pc.connecting) {
    console.log(testerConnection_pc);
    testerConnection_pc.connect();
  }

  useEffect(() => {}, []);

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
                {(hardwareStream && (
                  <RTCVideo mediaStream={hardwareStream} />
                )) || (
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
                          onChange={(event) => {
                            setHardwareIP(event.target.value);
                          }}
                          value={hardwareIP}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          size="medium"
                          onClick={() => {
                            hardwarePeer.init(
                              `ws://${hardwareIP}:8080/stream/webrtc`
                            );
                          }}
                        >
                          연결
                        </Button>
                      </div>
                    </div>
                  </Box>
                )}
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
                모니터 화면
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
                          testerConnection_pc.stream = stream;
                          setScreenStream(stream);
                          testerConnection_pc.p.addStream(stream);
                        }}
                      >
                        화면 선택
                      </Button>
                    </div>
                  </Box>
                )) || <RTCVideo mediaStream={screenStream} />}
              </Box>
              <Box display="flex" alignContent="center">
                {(!screenStream && (
                  <>
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
                      모니터 공유 화면을 설정해주세요.
                    </Typography>
                  </>
                )) || (
                  <Typography
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      marginBottom: 4,
                      marginLeft: 2,
                      color: 'green',
                    }}
                  >
                    설정되었습니다.
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Typography
              align="center"
              color="primary"
              style={{ marginTop: 60 }}
            >
              시험 시작까지 8분 12초 남았습니다.
            </Typography>
            <Button
              variant="contained"
              color="white"
              size="medium"
              justifyContent="center"
            >
              시험 시작
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
}
