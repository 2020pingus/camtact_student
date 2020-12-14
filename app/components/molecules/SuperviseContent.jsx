/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  makeStyles,
  Box,
  Card,
  Grid,
  Divider,
  Button,
  Chip,
} from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { paginate } from '../../utils/paginate';
import Paginations from '../atoms/Paginations';
import routes from '../../constants/routes.json';
import { getSupervisorInstance } from '../../utils/util';
import RTCVideo from '../atoms/RTCVideo';

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
    marginTop: theme.spacing(-3),
  }),
  cardView: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 218,
  },
  card: {
    width: 518,
    height: 218,
    margin: theme.spacing(2.9, 5.6, 0, 4.8),
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  cardContent: {
    width: '100%',
    flexDirection: 'row',
  },
  rtcVideo: { width: 259, height: 163 },
  window: {
    width: 259,
    height: 163,
    backgroundColor: '#f1f1f1',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 0,
    marginTop: -30,
    fontSize: 16,
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  isNotConnected: {
    width: 73,
    height: 24,
    marginLeft: 12,
    backgroundColor: '#FF5E57',
    opacity: 1,
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 100,
    fontSize: 12,
    fontWeight: 700,
    float: 'right',
    marginRight: 15,
  },
  cardP: {
    width: 73,
    height: 25,
    marginTop: 127,
    marginLeft: 12,
    backgroundColor: '#000000',
    opacity: 0.5,
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    fontWeight: 700,
  },
  footer: {
    width: 1144,
    height: 46,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  divider: {
    border: 1,
    backgroundColor: '#E4E7EB',
    width: 1144,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(6.8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    paddingBottom: 0,
    marginTop: theme.spacing(-1),
  },
}));

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function SuperviseContent(props) {
  const classes = useStyles(props);
  const history = useHistory();
  const data = useSelector((state) => state.users.users);
  const [flag, setFlag] = useState(true);
  const users = data.map((_data) => getSupervisorInstance(_data.id));
  useInterval(() => {}, 500);
  console.log(users);
  users.forEach((user) => {
    if (!user.connected && !user.connecting) {
      user.connect();
    }
  });

  const [cards, setCards] = useState({
    data,
    pageSize: 6,
    currentPage: 1,
  });

  const handlePageChange = (page) => {
    setCards({ ...cards, currentPage: page });
  };

  const { pageSize, currentPage } = cards;
  const pagedCards = paginate(data, currentPage, pageSize);

  const { length: count } = cards.data;
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Box className={classes.cardView}>
          {pagedCards.map((item, idx) => (
            <Box item style={{ width: '50%' }} key={item.id}>
              {console.log(users[idx])}
              <Card className={classes.card}>
                <div className={classes.window}>
                  {item.isConnected ? (
                    <div>
                      <p className={classes.cardP}> {item.name}</p>
                    </div>
                  ) : (
                    <>
                      <p className={classes.isNotConnected}>연결 끊김</p>
                      <div>
                        <p className={classes.cardP}> {item.name}</p>
                      </div>
                    </>
                  )}
                </div>

                <div className={classes.window}>
                  <RTCVideo
                    style={{ width: 259, height: 163 }}
                    mediaStream={users[idx]?.stream}
                  />
                </div>
                <Button
                  className={classes.button}
                  onClick={() =>
                    history.push(
                      `${routes.SUPERVISE_REALTIME}/${users[idx].tid}`
                    )
                  }
                >
                  자세히 감독하기
                </Button>
              </Card>
            </Box>
          ))}
        </Box>
      </div>

      <div className={classes.footer}>
        <Divider className={classes.divider} />
        <Paginations
          className={classes.pagination}
          pageSize={pageSize}
          itemsCount={count}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
