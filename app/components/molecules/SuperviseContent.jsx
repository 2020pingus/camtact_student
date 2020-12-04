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
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
    display: 'flex',
  }),
  card: {
    width: 518,
    height: 218,
    margin: theme.spacing(2.8, 0, 0, 4.8),
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  divider: { border: 5, backgroundColor: '#E4E7EB', width: 1144, height: 5 },
  pagination: {
    paddingBottom: 10,
  },
}));

export default function SuperviseContent(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div container className={classes.content}>
        <div item xs={6}>
          <Box>
            <Card className={classes.card} item xs={6}>
              <div className={classes.window}>
                <div>
                  <p className={classes.cardP}>허예은</p>
                </div>
              </div>

              <div className={classes.window}>
                <p>화면2</p>
              </div>
              <Button className={classes.button}>자세히 감독하기</Button>
            </Card>
          </Box>
          <Box>
            <Card className={classes.card} item xs={6}>
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
          </Box>
          <Box>
            <Card className={classes.card} item xs={6}>
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
          </Box>
        </div>
        <div item xs={6}>
          <Box>
            <Card className={classes.card} item xs={6}>
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
          </Box>
          <Box>
            <Card className={classes.card} item xs={6}>
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
          </Box>
          <Box>
            <Card className={classes.card} item xs={6}>
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
          </Box>
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
