import React, { useState } from 'react';
import { Grid, Button, Card, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import AdminTable from './AdminTable';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2.8),
    marginBottom: theme.spacing(2),
    width: 1177,
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    width: 90,
    height: 36.1,
  },
  inputRoot: {
    color: 'inherit',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    width: 298,
    height: 36,
    marginRight: theme.spacing(57),
    boxShadow:
      '0px 3px 1px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      opacity: 0.5,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#C4C4C4',
  },
  inputInput: {
    width: 227,
    height: 27,
    marginLeft: 50,
    marginTop: -1,
    fontSize: 18,
    fontWeight: 700,
  },
  deleteButton: {
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    width: 140,
    height: 36.1,
  },
}));
export default function AdminMenu() {
  const classes = useStyles();
  const [spacing, setSpacing] = useState(2);
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item ms={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item ms={3}>
              <Button variant="contained" className={classes.filterButton}>
                필터
              </Button>
            </Grid>
            <Grid item ms={3}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="응시자 이름, 이메일로 검색"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
            <Grid item ms={6} />
            <Grid item ms={3}>
              <Button variant="contained" className={classes.deleteButton}>
                응시자 삭제
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
