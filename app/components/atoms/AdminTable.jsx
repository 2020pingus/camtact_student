import React from 'react';
import {
  Grid,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Divider,
  TableFooter,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, useTheme } from '@material-ui/styles';

function createData(id, major, studentId, name, email, isAllowed) {
  return { id, major, studentId, name, email, isAllowed };
}

const rows = [
  createData(0, '소프트웨어학부', 20141234, '허예은', 'heo@naver.com', 'x'),
  createData(1, '컴퓨터학부', 20151234, '김예은', 'kim@naver.com', 'x'),
  createData(2, '글로벌미디어학부', 20161234, '박예은', 'park@naver.com', 'o'),
  createData(
    3,
    '스마트시스템소프트웨어학과',
    20171234,
    '이예은',
    'lee@naver.com',
    'o'
  ),
  createData(4, '소프트웨어학부', 20171234, '조예은', 'cho@naver.com', 'o'),
  createData(5, '소프트웨어학부', 20171234, '정예은', 'jeong@naver.com', 'o'),
];
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2.9, 2, 2.8),
    width: 1144,
    height: 703,
  },
  table: {
    flex: 1,
  },
  tableCell: {
    fontSize: 18,
  },
  tableCellRow: {
    fontSize: 18,
    fontWeight: 400,
  },
  caption: {
    position: 'fixed',
    bottom: 50,
    captionSide: 'bottom',
    width: 1144,
    marginLeft: theme.spacing(-1.5),
    marginBottom: theme.spacing(-1),
  },
  divider: {
    marginBottom: theme.spacing(1.4),
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
}));

export default function AdminTable() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell
                className={classes.tableCell}
                style={{ paddingLeft: 25 }}
              >
                선택
              </TableCell>
              <TableCell className={classes.tableCell}>학과(전공)</TableCell>
              <TableCell className={classes.tableCell}>학번</TableCell>
              <TableCell className={classes.tableCell}>이름</TableCell>
              <TableCell className={classes.tableCell}>이메일</TableCell>
              <TableCell
                className={classes.tableCell}
                style={{ paddingLeft: 31 }}
              >
                응시 승인 요청
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell className={classes.tableCellRow}>
                  {row.major}
                </TableCell>
                <TableCell className={classes.tableCellRow}>
                  {row.studentId}
                </TableCell>
                <TableCell className={classes.tableCellRow}>
                  {row.name}
                </TableCell>
                <TableCell className={classes.tableCellRow}>
                  {row.email}
                </TableCell>
                <TableCell className={classes.tableCellRow}>
                  {row.isAllowed === 'x' ? (
                    <>
                      <Button color="primary" style={{ fontSize: 18 }}>
                        승인
                      </Button>
                      /
                      <Button color="primary" style={{ fontSize: 18 }}>
                        거절
                      </Button>
                    </>
                  ) : (
                    <div>
                      <Button disabled>-</Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <caption className={classes.caption}>
            <Divider className={classes.divider} />
            <Pagination
              className={classes.pagination}
              count={10}
              shape="rounded"
              color="primary"
            />
          </caption>
        </Table>
      </Card>
    </>
  );
}
