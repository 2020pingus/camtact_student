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
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import Paginations from './Paginations';
import { paginate } from '../../utils/paginate';

function createData(id, major, studentId, name, email, isAllowed) {
  return { id, major, studentId, name, email, isAllowed };
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1.5, 0, 0, 3),
    width: 1144,
    height: 703,
    marginBottom: 0,
  },
  table: {
    flex: 1,
  },
  tableCell: {
    fontSize: 18,
    fontWeight: 400,
    height: 30,
  },
  tableCellRow: {
    fontSize: 18,
    fontWeight: 400,
  },
  caption: {
    position: 'fixed',
    bottom: 48,
    captionSide: 'bottom',
    width: 1144,
    marginLeft: theme.spacing(-0.1),
    marginBottom: theme.spacing(-1),
  },
  divider: {
    marginBottom: theme.spacing(0.3),
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pagination: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function AdminTable() {
  const classes = useStyles();
  const getExaminers = () => {
    const rows = [
      createData(0, '소프트웨어학부', 20141234, '허예은', 'heo@naver.com', 'x'),
      createData(1, '컴퓨터학부', 20151234, '김예은', 'kim@naver.com', 'x'),
      createData(
        2,
        '글로벌미디어학부',
        20161234,
        '박예은',
        'park@naver.com',
        'o'
      ),
      createData(3, '소프트웨어학부', 20171234, '이예은', 'lee@naver.com', 'o'),
      createData(4, '소프트웨어학부', 20180000, '조예은', 'cho@naver.com', 'o'),
      createData(
        5,
        '소프트웨어학부',
        20200000,
        '허혜은',
        'jeong@naver.com',
        'o'
      ),
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
        20180008,
        '허승욱',
        '20180008@naver.com',
        'o'
      ),
    ];
    return rows;
  };

  const [examiners, setExaminers] = useState({
    data: getExaminers(),
    pageSize: 11,
    currentPage: 1,
  });

  const handlePageChange = (page) => {
    setExaminers({ ...examiners, currentPage: page });
  };

  const { data, pageSize, currentPage } = examiners;
  const pagedExaminers = paginate(data, currentPage, pageSize);

  const { length: count } = examiners.data;

  const history = useHistory();

  return (
    <>
      <Card className={classes.root}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow style={{ height: 40 }}>
              <TableCell
                className={classes.tableCell}
                style={{ paddingLeft: 20 }}
              >
                선택
              </TableCell>
              <TableCell className={classes.tableCell} style={{ width: 250 }}>
                학과(전공)
              </TableCell>
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
            {pagedExaminers.map((row) => (
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
                  <Link
                    to={routes.SUPERVISE_NON_REALTIME}
                    style={{ color: '#253053' }}
                  >
                    {row.name}
                  </Link>
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
                        to={routes.HOME}
                        color="primary"
                        style={{ fontSize: 18, color: '#253053' }}
                      >
                        승인
                      </Link>
                      &nbsp;/&nbsp;
                      <Link
                        to={routes.HOME}
                        color="primary"
                        style={{
                          fontSize: 18,
                          marginRight: 48,
                          color: '#253053',
                        }}
                      >
                        거절
                      </Link>
                    </>
                  ) : (
                    <Button disabled style={{ marginRight: 48 }}>
                      -
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.caption}>
          <div className={classes.footer}>
            <Paginations
              className={classes.pagination}
              pageSize={pageSize}
              itemsCount={count}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </Card>
    </>
  );
}
