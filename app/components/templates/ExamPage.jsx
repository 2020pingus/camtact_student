import React from 'react';
import { Route } from 'react-router';
import Exam from '../organisms/Exam';

export default function ExamPage({ match }) {
  return (
    <>
      {/* <Route path={`${match.path}/:id`} component={Exam} /> */}
      <Exam />
    </>
  );
}
