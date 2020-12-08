import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExamCard from './ExamCard';

export default function ExamList(props) {
  const { data } = props;
  return (
    <>
      {data.map((item) => (
        <ExamCard
          key={item.id}
          name={item.name}
          professor={item.professor}
          time={item.time}
          state={item.state}
          examiners={item.examiners}
        />
      ))}
    </>
  );
}

ExamList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
