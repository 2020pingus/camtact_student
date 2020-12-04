import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExamCard from './ExamCard';

export default function ExamList(props) {
  const index = props.index;
  const state = props.state;

  return (
    <>
      {index === 0 && (
        <ExamCard
          progress="start"
          index={props.index}
          name={props.name}
          professor={props.professor}
          time={props.time}
          state={props.state}
        />
      )}
      {index === 1 &&
        (state === 2 ? (
          <>
            <ExamCard
              key={props.id}
              progress="waiting"
              index={props.index}
              name={props.name}
              professor={props.professor}
              time={props.time}
              state={props.state}
            />
          </>
        ) : (
          <>
            <ExamCard
              key={props.id}
              progress="allowed"
              index={props.index}
              name={props.name}
              professor={props.professor}
              time={props.time}
              state={props.state}
            />
          </>
        ))}
      {index === 2 && (
        <ExamCard
          key={props.id}
          progress="end"
          index={props.index}
          name={props.name}
          professor={props.professor}
          time={props.time}
          state={props.state}
        />
      )}
    </>
  );
}

ExamList.propTypes = {
  index: PropTypes.node.isRequired,
};
