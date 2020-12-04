import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import avatar from '../../../resources/avatar_example.jpg';

const useStyles = makeStyles((theme) => ({
  avatarBar: {
    height: 210,
  },
  avatarImg: {
    width: 111,
    height: 111,
    marginBottom: 11,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  username: {
    color: 'white',
    fontWeight: 400,
    marginBottom: 5,
    textAlign: 'center',
  },
  role: {
    color: '#8D93A5',
    fontSize: 12,
    textAlign: 'center',
  },
}));

export default function DrawerAvatar() {
  const classes = useStyles();
  const { username, role, avatarImage } = useSelector((state) => state.user);

  return (
    <>
      <Box
        className={classes.avatarBar}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Avatar alt="" src={avatar} className={classes.avatarImg} />
        <Typography variant="h4" display="block" className={classes.username}>
          {username}
        </Typography>
        <Typography display="block" className={classes.role}>
          {role}
        </Typography>
      </Box>
    </>
  );
}
