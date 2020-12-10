import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import ProblemCard from '../atoms/ProblemCard';

const useStyles = makeStyles((theme) => ({
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
}));

export default function ExamContent(props) {
  const classes = useStyles(props);
  const { problems, currentProblem } = useSelector((state) => state.exam);

  return (
    <div className={classes.content}>
      <ProblemCard
        problem={problems[currentProblem]}
        currentProblem={currentProblem}
        count={problems.length}
      />
    </div>
  );
}
