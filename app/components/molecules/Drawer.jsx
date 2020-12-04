import React from 'react';
import { Divider, Drawer, makeStyles } from '@material-ui/core';
import LogoBar from '../atoms/LogoBar';
import DrawerAvatar from '../atoms/DrawerAvatar';
import DrawerList from '../atoms/DrawerList';

const useStyles = makeStyles((theme) => ({
  drawer: (drawerWidth) => ({
    width: drawerWidth,
    flexShrink: 0,
  }),
  drawerPaper: (drawerWidth) => ({
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
  }),
}));

function MyDrawer({ appBarHeight, drawerWidth }) {
  const classes = useStyles(drawerWidth);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      color="primary"
    >
      <LogoBar logoBarHeight={appBarHeight} />
      <Divider variant="middle" style={{ backgroundColor: '#353F5F' }} />
      <DrawerAvatar />
      <Divider variant="middle" style={{ backgroundColor: '#E4E7EB' }} />
      <DrawerList />
    </Drawer>
  );
}

export default React.memo(MyDrawer);
