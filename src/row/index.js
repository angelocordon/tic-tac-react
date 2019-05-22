import React from 'react';

const Row = function (props) {
  return (
    <div className="grid-row">
      { props.children }
    </div>
  )
}

export default Row;
