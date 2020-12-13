import React, { useState } from 'react';
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
  TablePagination,
  Link,
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
  createData(3, '소프트웨어학부', 20171234, '이예은', 'lee@naver.com', 'o'),
  createData(4, '소프트웨어학부', 20180000, '조예은', 'cho@naver.com', 'o'),
  createData(5, '소프트웨어학부', 20200000, '허혜은', 'jeong@naver.com', 'o'),
  createData(
    6,
    '소프트웨어학부',
    20190000,
    '김혜은',
    '20190000@naver.com',
    'x'
  ),
  createData(
    7,
    '소프트웨어학부',
    20170000,
    '정혜은',
    '20170000@naver.com',
    'x'
  ),
  createData(
    8,
    '소프트웨어학부',
    20180001,
    '정은혜',
    '20180001@naver.com',
    'o'
  ),
  createData(
    9,
    '소프트웨어학부',
    20180002,
    '조혜은',
    '20180002@naver.com',
    'x'
  ),
  createData(
    10,
    '소프트웨어학부',
    20180003,
    '조은혜',
    '20180003@naver.com',
    'o'
  ),
  createData(
    11,
    '소프트웨어학부',
    20180004,
    '허은혜',
    '20180004@naver.com',
    'o'
  ),
  createData(
    12,
    '소프트웨어학부',
    20180005,
    '정승욱',
    '20180005@naver.com',
    'x'
  ),
  createData(
    13,
    '소프트웨어학부',
    20180006,
    '김승욱',
    '20180006@naver.com',
    'o'
  ),
  createData(
    14,
    '소프트웨어학부',
    20180007,
    '조승욱',
    '20180007@naver.com',
    'x'
  ),
  createData(
    15,
    '소프트웨어학부',
    201800008,
    '허승욱',
    '201800008@naver.com',
    'o'
  ),
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
    fontWeight: 400,
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
    marginLeft: theme.spacing(-2),
    marginBottom: theme.spacing(-1),
  },
  divider: {
    marginBottom: theme.spacing(1.75),
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRowPerPage = (event, newPage) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(newPage);
  };

  return (
    <>
      <Card className={classes.root}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow style={{ height: 50.5 }}>
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
                style={{ paddingLeft: 25, paddingRight: 48 }}
              >
                응시 승인 요청
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell style={{ textAlign: 'center', paddingLeft: 0 }}>
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
                  <TableCell
                    className={classes.tableCellRow}
                    style={{ paddingLeft: 35 }}
                  >
                    {row.isAllowed === 'x' ? (
                      <>
                        <Link
                          href="/#"
                          color="primary"
                          style={{ fontSize: 18 }}
                        >
                          승인
                        </Link>
                        &nbsp;/&nbsp;
                        <Link
                          href="/#"
                          color="primary"
                          style={{ fontSize: 18, marginRight: 48 }}
                        >
                          거절
                        </Link>
                      </>
                    ) : (
                      <div>
                        <Button disabled style={{ marginRight: 48 }}>
                          -
                        </Button>
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
              count={parseInt(rows.length / 10 + 1, 10)}
              onChange={handleChangeRowPerPage}
              defaultPage={1}
              shape="rounded"
              color="primary"
              hidePrevButton
              hideNextButton
            />
          </caption>
        </Table>
      </Card>
    </>
  );
}
