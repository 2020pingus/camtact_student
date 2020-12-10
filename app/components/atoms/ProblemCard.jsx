import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveToProblem } from '../../modules/action/examAction';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 1144,
    height: 753,
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
  },
  header: {
    width: '100%',
    height: 77,
  },
  headerBox: {
    width: 1088,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    left: 32,
    top: 18,
  },
  content: {
    width: '100%',
    height: 609,
  },
  footer: {
    width: '100%',
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    width: 1047,
    position: 'relative',
    left: 46,
    top: 37,
  },
  choices: {
    width: 1072,
    position: 'relative',
    left: 54,
    top: 41,
  },
  divider: {
    backgroundColor: '#E4E7EB',
  },
  moveBox: {
    width: 184,
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: 82,
    height: 36,
    padding: 2.5,
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.14), 0px 3px 4px rgba(63, 63, 68, 0.12), 0px 1px 5px rgba(63, 63, 68, 0.2)',
    borderRadius: 7,
    color: theme.palette.primary.main,
    fontSize: 18,
    fontWeight: 700,
  },
}));

export default function ProblemCard({ problem, currentProblem, count }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleBeforePage = () => {
    dispatch(moveToProblem(currentProblem - 1));
  };

  const handleNextPage = () => {
    dispatch(moveToProblem(currentProblem + 1));
  };

  return (
    <Card className={classes.card}>
      {/* Card Header */}
      <div className={classes.header}>
        <Box className={classes.headerBox}>
          <Typography
            variant="h1"
            color="primary"
            style={{ display: 'inline', paddingTop: 6.5 }}
          >
            {`${problem.title} (${problem.score}점)`}
          </Typography>
          <Checkbox color="secondary" style={{ transform: 'scale(1.3)' }} />
        </Box>
      </div>
      <Divider className={classes.divider} />

      {/* Card Content */}
      <div className={classes.content}>
        <Box className={classes.question}>
          <Typography variant="h2" color="primary">
            {problem.question}
          </Typography>
          <p style={{ fontSize: 20, color: '#253053', paddingTop: 4 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;{problem.questionContent}
          </p>
        </Box>
        <Box className={classes.choices}>
          <FormControl component="fieldset">
            <RadioGroup value={value} onChange={handleChange}>
              {problem.choices.map((choice, index) => (
                <FormControlLabel
                  value={index.toString()}
                  key={index}
                  control={<Radio color="primary" />}
                  label={
                    <Typography
                      variant="h3"
                      color="primary"
                      style={{ paddingBottom: 1.5, marginLeft: 7 }}
                    >
                      {choice}
                    </Typography>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </div>
      <Divider className={classes.divider} />

      {/* Card Footer */}
      <div className={classes.footer}>
        <Box className={classes.moveBox}>
          <Button
            className={classes.button}
            onClick={handleBeforePage}
            disabled={currentProblem === 0 ? true : false}
          >
            {'< 이전'}
          </Button>
          <Button
            className={classes.button}
            onClick={handleNextPage}
            disabled={currentProblem === count - 1 ? true : false}
          >
            {'다음 >'}
          </Button>
        </Box>
      </div>
    </Card>
  );
}
