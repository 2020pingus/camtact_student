import { makeStyles } from '@material-ui/core';
import React from 'react';
import AdminMenu from '../atoms/AdminMenu';
import AdminTable from '../atoms/AdminTable';

const useStyles = makeStyles((theme) => ({
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
  }),
}));

export default function AdminContent(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.content}>
      <AdminMenu />
      <AdminTable />
    </div>
  );
}
