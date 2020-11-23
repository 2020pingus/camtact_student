import React from 'react';
import { Box, Divider, makeStyles } from '@material-ui/core';
import logo from '../../../resources/camtact_logo.png';

const useStyles = makeStyles((theme) => ({
  logoBar: (props) => ({
    height: props.logoBarHeight,
  }),
  logoImg: {
    width: 48,
    height: 56,
    position: 'relative',
    left: 12,
    top: 8,
  },
}));

export default function LogoBar(props) {
  const classes = useStyles(props);
  return (
    <>
      <Box className={classes.logoBar}>
        <img src={logo} alt="" className={classes.logoImg} />
      </Box>
    </>
  );
}
