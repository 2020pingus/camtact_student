/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExamCard from './ExamCard';

export default function ExamList(props) {
  const { data } = props;
  console.log(props);
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <>
      {data.map((item) => (
        <ExamCard
          key={item.id}
          name={item.name}
          professor={item.professor}
          time={item.time}
          state={item.state}
        />
      ))}
      {/* {props.index === 0 && (
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
        (props.state === 2 ? (
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
      )} */}
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
