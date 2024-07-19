import { useState } from 'react';

type DayTileProps = {
  date: string;
  dayName: string;
};

const DayTile = ({ date, dayName }: DayTileProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectDay = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      onClick={selectDay}
      className={`p-3 rounded-md flex flex-col border-4 border-solid items-center bg-white ${
        isSelected ? ' border-clr-red' : 'border-white'
      }`}>
      <p className={`font-bold text-2xl ${dayName === 'Sunday' ? 'text-clr-red ' : ''}`}>{dayName}</p>
      <p className='text-stone-800 font-semibold'>{date}</p>
    </button>
  );
};

export default DayTile;
