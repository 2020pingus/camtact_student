import {
  makeStyles,
  Box,
  Card,
  Grid,
  Divider,
  Button,
} from '@material-ui/core';
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router';
import routes from '../../constants/routes.json';

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
    height: 46.5,
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
    marginTop: theme.spacing(-2.3),
    marginLeft: theme.spacing(6.8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(-2),
    paddingBottom: 0,
  },
}));

export default function SuperviseContent(props) {
  const classes = useStyles(props);
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div xs={12}>
          <Card className={classes.card}>
            <div className={classes.window}>
              <div>
                <p className={classes.cardP}>허예은</p>
              </div>
            </div>

            <div className={classes.window}>
              <p>화면2</p>
            </div>
            <Button
              className={classes.button}
              onClick={() => history.push(routes.SUPERVISE_REALTIME)}
            >
              자세히 감독하기
            </Button>
          </Card>

          <Card className={classes.card}>
            <div className={classes.window}>
              <div>
                <p className={classes.cardP}>이예은</p>
              </div>
            </div>

            <div className={classes.window}>
              <p>화면2</p>
            </div>
            <Button className={classes.button}>자세히 감독하기</Button>
          </Card>

          <Card className={classes.card}>
            <div className={classes.window}>
              <div>
                <p className={classes.cardP}>박예은</p>
              </div>
            </div>

            <div className={classes.window}>
              <p>화면2</p>
            </div>
            <Button className={classes.button}>자세히 감독하기</Button>
          </Card>
        </div>
        <div xs={6}>
          <Card className={classes.card}>
            <div className={classes.window}>
              <div>
                <p className={classes.cardP}>정예은</p>
              </div>
            </div>

            <div className={classes.window}>
              <p>화면2</p>
            </div>
            <Button className={classes.button}>자세히 감독하기</Button>
          </Card>

          <Card className={classes.card}>
            <div className={classes.window}>
              <div>
                <p className={classes.cardP} style={{ color: '#F2C94C' }}>
                  조예은
                </p>
              </div>
            </div>

            <div className={classes.window}>
              <p>화면2</p>
            </div>
            <Button className={classes.button}>자세히 감독하기</Button>
          </Card>

          <Card className={classes.card}>
            <div className={classes.window}>
              <div>
                <p className={classes.cardP} style={{ color: '#F2C94C' }}>
                  김예은
                </p>
              </div>
            </div>

            <div className={classes.window}>
              <p>화면2</p>
            </div>
            <Button className={classes.button}>자세히 감독하기</Button>
          </Card>
        </div>
      </div>

      <div className={classes.footer}>
        <Divider className={classes.divider} />
        <Pagination
          className={classes.pagination}
          count={10}
          shape="rounded"
          color="primary"
        />
      </div>
    </div>
  );
}
