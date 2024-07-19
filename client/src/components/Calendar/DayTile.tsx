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
      className={`p-3 border-solid  rounded-md flex flex-col items-center ${isSelected ? 'bg-green-200' : 'bg-white'}`}>
      <p className={`font-bold text-2xl ${dayName === 'Sunday' ? 'text-red-600' : ''}`}>{dayName}</p>
      <p className='text-stone-800 font-semibold'>{date}</p>
    </button>
  );
};

export default DayTile;
