import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExamCard from './ExamCard';

export default function ExamList(props) {
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <>
      {props.index === 0 && (
        <ExamCard
          key={props.id}
          index={props.index}
          name={props.name}
          professor={props.professor}
          time={props.time}
          state={props.state}
        />
      )}
      {props.index === 1 &&
        (state === 2 ? (
          <>
            <ExamCard
              key={props.id}
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
              index={props.index}
              name={props.name}
              professor={props.professor}
              time={props.time}
              state={props.state}
            />
          </>
        ))}
      {props.index === 2 && (
        <ExamCard
          key={props.id}
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
  key: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  professor: PropTypes.node.isRequired,
  time: PropTypes.node.isRequired,
  state: PropTypes.node.isRequired,
};
