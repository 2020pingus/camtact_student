import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle } from '@material-ui/core';

export default function ExamDialog(props) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        style={{
          color: '#253053',
          fontSize: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          marginTop: 47,
          marginBottom: -20,
        }}
      >
        <span style={{ fontSize: 30, fontWeight: 700 }}>{'운영체제'}</span>
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText style={{display: 'flex', alignItems: 'center', justifyContent: 'column' }}> */}
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9FA4B6',
            marginTop: 14,
            fontsize: 20,
          }}
        >
          양승민 교수님
        </p>
        <Chip
          label="0시간 10분 30초 남음"
          style={{
            marginLeft: 134,
            marginRight: 134,
            marginTop: 23,
            marginBottom: 27,
            backgroundColor: '#FF5E57',
            color: '#FFFFFF',
            fontWeight: 700,
            width: 250,
            height: 36,
          }}
        />
        <p
          style={{
            display: 'flex',
            justifyContent: 'row',
            fontSize: 20,
          }}
        >
          <p
            style={{
              marginLeft: 93,
              marginRight: 38,
              color: '#293356',
            }}
          >
            응시 대상
          </p>
          <p style={{ marginRight: 93 }}>숭실대학교 소프트웨어학부생</p>
        </p>
        <p
          style={{
            display: 'flex',
            justifyContent: 'row',
            fontSize: 20,
          }}
        >
          <p
            style={{
              marginLeft: 93,
              marginRight: 38,
              color: '#293356',
            }}
          >
            시험 점수
          </p>
          <p style={{ marginRight: 93 }}> -- / 100</p>
        </p>
        <p
          style={{
            display: 'flex',
            justifyContent: 'row',
            fontSize: 20,
          }}
        >
          <p
            style={{
              marginLeft: 93,
              marginRight: 38,
              color: '#293356',
            }}
          >
            시험 등수
          </p>
          <p style={{ marginRight: 93 }}> -- / 50</p>
        </p>
        {/* </DialogContentText> */}
      </DialogContent>
      <DialogActions
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          onClick={handleClose}
          color="primary"
          style={{
            marginTop: 38,
            marginBottom: 53,
            width: 82,
            height: 36,
          }}
        >
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}
