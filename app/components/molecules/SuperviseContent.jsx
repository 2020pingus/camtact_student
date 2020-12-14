import {
  makeStyles,
  Box,
  Card,
  Grid,
  Divider,
  Button,
  Chip,
} from '@material-ui/core';
import React, { useState } from 'react';
import Paginations from '../atoms/Paginations';
import { paginate } from '../../utils/paginate';
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

export default function SuperviseContent(props) {
  const { data } = props;
  const classes = useStyles(props);
  const history = useHistory();
  const getCards = () => {
    return data;
  };

  const [cards, setCards] = useState({
    data: getCards(),
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
          {pagedCards.map((item) => (
            <Box item style={{ width: '50%' }} key={item.id}>
              <Card className={classes.card}>
                <div className={classes.window}>
                  {item.isConnected === 'o' ? (
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
                  <p>화면2</p>
                </div>
                <Button
                  className={classes.button}
                  onClick={() => history.push(routes.SUPERVISE_REALTIME)}
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
