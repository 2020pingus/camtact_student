import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import logo from '../../../resources/camtact_logo.png';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  logoBar: (logoBarHeight) => ({
    height: logoBarHeight,
  }),
  logoImg: {
    width: 48,
    height: 56,
    position: 'relative',
    left: 12,
    top: 8,
    cursor: 'pointer',
  },
}));

export default function LogoBar({ logoBarHeight }) {
  const classes = useStyles(logoBarHeight);
  const history = useHistory();

  return (
    <>
      <Box className={classes.logoBar}>
        <img
          src={logo}
          alt=""
          className={classes.logoImg}
          onClick={() => history.push('/')}
        />
      </Box>
    </>
  );
}
