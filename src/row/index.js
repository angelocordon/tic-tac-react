import React from 'react';

const Row = function (props) {
  const calculateRowHeight = function () {
    const calculatedHeight = 100 / props.size;

    return { 'height': `${calculatedHeight}%` }    
  }

  return (
    <div className="grid-row" style={calculateRowHeight()}>
      { props.children }
    </div>
  )
}

export default Row;
