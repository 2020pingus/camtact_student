import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Divider,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
divider: {
  backgroundColor: '#E4E7EB',
  minWidth: 537,
},
button: {
  width: '100%',
  color: theme.palette.primary.main,
  fontSize: 16,
  fontWeight: 700,
},
}));

export default function ExamCardButton(props){
  const state = props.state;
  const classes = useStyles(props);
  return(
    <>
      <Button className={classes.button} style={{width: '100%', marginLeft: -25}}>시험 상세 정보</Button>
      <Divider
        orientation="vertical"
        style={{ height: 54, alignSelf: 'center'}}
      />
      <Button className={classes.button} style={{color: '#FF5E57'}}>시험 시작</Button>
    </>
  );
}
