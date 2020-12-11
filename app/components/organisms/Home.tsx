import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';

export default function Home(): JSX.Element {
  return (
    <>
      <div data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <br />
        <Link to={routes.LOGIN}>to Login</Link>
        <br />
        <Link to={routes.SIGNUP}>to SignUp</Link>
        <br />
        <Link to={routes.EXAM}>to Exam</Link>
        <br />
        <Link to={routes.EXAMLIST}>to ExamList</Link>
        <br />
        <Link to={routes.NOTIFICATION}>to Notification</Link>
        <br />
        <Link to={routes.MYPAGE}>to MyPage</Link>
        <br />
        <Link to={routes.ADMIN}>to Admin</Link>
        <br />
        <Link to={routes.SUPERVISE}>to Supervise</Link>
        <br />
        <Link to={routes.SUPERVISE_NON_REALTIME}>
          to Supervise Non Realtime
        </Link>
        <br />
        <Link to={routes.FRAME}>to Frame</Link>
        <br />
        <Link to={routes.EXAMCREATE}>to ExamCreate</Link>
        <br />
        <Link to={routes.EXAMMODIFICATE}>to ExamModify</Link>
        <br />
        <Link to={routes.EXAMCOMPLETE}>to ExamComplete</Link>
      </div>
    </>
  );
}
