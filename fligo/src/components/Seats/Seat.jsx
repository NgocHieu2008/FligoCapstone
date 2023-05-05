import React,{useState, useEffect} from 'react';

const Seat = ({ row, column, status, onSelect, isSelected }) => {
    let color = '';
  if (isSelected) {
    color = 'var(--blue-primary-color)';
  } else {
    switch (status) {
      case 'Unavailable':
        color = '#C4C4C4';
        break;
      case 'Available':
        color = '#E8FFC2';
        break;
      default:
        color = '#C4C4C4';
    }
  }

  const handleSelect = () => {
    if (status === 'Available') {
      onSelect(row, column);
    } else if (isSelected) {
      onSelect(row, column, true);
    }
  };
    

  return (
    <div
        style={{
            backgroundColor: color,
            width: '60px',
            height: '60px',
            margin: '10px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: status === 'Available' ? 'pointer' : 'not-allowed',
        }}
        onClick={handleSelect}
      >
      {row}{column}
    </div>
  );
}

export default Seat;