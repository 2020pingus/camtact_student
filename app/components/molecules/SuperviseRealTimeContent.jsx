import {
  makeStyles,
  Box,
  Card,
  Grid,
  Divider,
  Button,
  Typography,
  Checkbox,
} from '@material-ui/core';
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
  content: (props) => ({
    width: props.windowSize.width - props.drawerWidth,
    height: props.windowSize.height - props.appBarHeight,
    position: 'relative',
    top: props.appBarHeight,
    backgroundColor: '#F6F6F6',
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(-8, 0, 0, 0),
  }),
  card: {
    width: 1145,
    height: 753,
    margin: theme.spacing(2.6, 2.7, 0, 2.8),
    padding: theme.spacing(0),

    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
}));

export default function SuperviseRealTimeContent(props) {
  const classes = useStyles(props);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div xs={12}>
          <Card className={classes.card}>
            <div
              xs={12}
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: 1144,
                height: 78,
                borderBottom: '1px solid rgb(228,231,235)',
              }}
            >
              <div>
                <Typography
                  color="primary"
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    marginTop: 19,
                    marginLeft: 32,
                    width: 120,
                    height: 40,
                  }}
                >
                  허예은
                </Typography>
              </div>
              <div style={{ width: 733 }}>&nbsp;</div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: 257,
                  justifyContent: 'flex-end',
                  height: 41,
                }}
              >
                <Typography
                  color="primary"
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    marginTop: 25,
                    marginRight: 11,
                  }}
                >
                  부정행위 의심
                </Typography>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  style={{
                    justifyContent: 'center',
                    weight: 28,
                    height: 28,
                    marginTop: 25,
                    marginRight: 32,
                    padding: 0,
                  }}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
