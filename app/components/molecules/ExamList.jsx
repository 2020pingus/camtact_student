import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProgressExamCard from './ProgressExamCard';
import AllowedExamCard from './AllowedExamCard';
import WaitingExamCard from './WaitingExamCard';
import EndedExamCard from './EndedExamCard';

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
      {index === 0 && <ProgressExamCard />}
      {index === 1 && (
        <>
          <AllowedExamCard />
          <WaitingExamCard />
        </>
      )}
      {index === 2 && <EndedExamCard />}
    </>
  );
}

ExamList.propTypes = {
  index: PropTypes.node.isRequired,
};
