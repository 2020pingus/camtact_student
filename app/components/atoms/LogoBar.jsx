import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import logo from '../../../resources/camtact_logo.png';

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
  },
}));

export default function LogoBar({ logoBarHeight, history }) {
  const classes = useStyles(logoBarHeight);
  return (
    <>
      <Box className={classes.logoBar}>
        <img
          src={logo}
          alt=""
          className={classes.logoImg}
          onClick={() => history.goBack()}
        />
      </Box>
    </>
  );
}
