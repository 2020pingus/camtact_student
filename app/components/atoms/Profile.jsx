import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editAvatar, removeAvatar } from '../../modules/action/userAction';
// import avatar from '../../../resources/avatar_example.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 468,
    height: 294,
    border: '1px solid rgba(63, 63, 68, 0.005)',
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  },
  header: {
    height: 52,
    paddingLeft: 22,
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    height: 182,
    paddingLeft: 24,
    paddingRight: 24,
    display: 'flex',
    alignItems: 'center',
  },
  footer: {
    height: 60,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  divider: {
    backgroundColor: '#E4E7EB',
  },
  typoHeader: {
    fontSize: 20,
    fontWeight: 700,
  },
  avatarImage: {
    width: 138,
    height: 138,
    border: '1px solid rgba(63, 63, 68, 0.005)',
    borderRadius: '4px',
  },
  avatarInfo: {
    float: 'right',
    paddingLeft: 26,
    paddingTop: 26.5,
    alignSelf: 'flex-start',
  },
  button: {
    width: '100%',
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 700,
  },
  dialogContent: {
    padding: 20,
    paddingBottom: 0,
  },
  dialogAction: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));

export default function Profile() {
  const { username, email, role, organization, avatar } = useSelector(
    (state) => state.user
  );
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleChangeImage = (e) => {
    const imgUrl = e.target.value;
    dispatch(editAvatar(imgUrl));
  };

  const handleRemoveImage = () => {
    dispatch(removeAvatar());
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    handleRemoveImage();
    handleClose();
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {/* Header */}
      <div className={classes.header}>
        <Typography color="primary" className={classes.typoHeader}>
          프로필
        </Typography>
      </div>
      <Divider />

      {/* Content */}
      <div className={classes.content}>
        {/* Avatar Image */}
        <div style={{ float: 'left' }}>
          <Avatar alt="" src={avatar} className={classes.avatarImage} />
        </div>
        {/* Avatar Info */}
        <div className={classes.avatarInfo}>
          <Typography
            variant="h4"
            style={{ display: 'inline', paddingRight: 9, color: '#7C7C7C' }}
          >
            {role}
          </Typography>
          <Typography variant="h4" color="primary" display="inline">
            {username}
          </Typography>
          <Typography variant="h4" color="primary" style={{ marginTop: 13 }}>
            {organization}
          </Typography>
          <Typography variant="h4" color="primary" style={{ marginTop: 13 }}>
            {email}
          </Typography>
        </div>
      </div>
      <Divider />

      {/* Footer */}
      <div className={classes.footer}>
        {/* Change Image Button */}
        <Button component="label" className={classes.button}>
          <Typography variant="h4" color="primary" style={{ fontWeight: 700 }}>
            이미지 변경
          </Typography>
          <input
            style={{ display: 'none' }}
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
          />
        </Button>

        <Divider
          orientation="vertical"
          style={{ height: 46, alignSelf: 'center' }}
        />
        {/* Remove Image Button */}
        <Button className={classes.button} onClick={handleClickOpen}>
          이미지 제거
        </Button>

        {/* Remove Alert Dialog */}
        <Dialog open={open} onClose={handleClose}>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText>이미지를 제거하시겠습니까?</DialogContentText>
          </DialogContent>
          <DialogActions className={classes.dialogAction}>
            <Button onClick={handleAgree} color="primary">
              예
            </Button>
            <Button onClick={handleClose} color="primary">
              아니오
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Card>
  );
}
