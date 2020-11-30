import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExamCard from './ExamCard';

export default function ExamList(props) {
  const index = props.index;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {index === 0 && <ExamCard progress="start" />}
      {index === 1 && (
        <>
          <ExamCard progress="waiting" />
          <ExamCard progress="allowed" />
        </>
      )}
      {index === 2 && <ExamCard progress="end" />}
    </>
  );
}

ExamList.propTypes = {
  index: PropTypes.node.isRequired,
};
