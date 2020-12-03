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

export default function ProblemCard(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
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
            {`${PROBLEM_INFO.title} (${PROBLEM_INFO.score}점)`}
          </Typography>
          <Checkbox color="secondary" style={{ transform: 'scale(1.3)' }} />
        </Box>
      </div>
      <Divider className={classes.divider} />

      {/* Card Content */}
      <div className={classes.content}>
        <Box className={classes.question}>
          <Typography variant="h2" color="primary">
            {PROBLEM_INFO.question}
          </Typography>
          <p style={{ fontSize: 20, color: '#253053', paddingTop: 4 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;{PROBLEM_INFO.questionContent}
          </p>
        </Box>
        <Box className={classes.choices}>
          <FormControl component="fieldset">
            <RadioGroup value={value} onChange={handleChange}>
              {PROBLEM_INFO.choices.map((choice, index) => (
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
          <Button className={classes.button}>{'< 이전'}</Button>
          <Button className={classes.button}>{'다음 >'}</Button>
        </Box>
      </div>
    </Card>
  );
}

const PROBLEM_INFO = {
  title: '객관식 6',
  score: 5,
  question: '다음 글에서 틀린 단어가 포함된 구절은?',
  questionContent:
    '   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uzzalco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  choices: [
    'Lorem ipsum dolor sit amet',
    'Ut enim ad minim veniam, quis nostrud exercitation uzzalco',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident',
    'sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ],
};
