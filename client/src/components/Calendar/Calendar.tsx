import { useState } from 'react';
import { format, addDays } from 'date-fns';

import DayTile from './DayTile';

const DAYS_TO_SHOW = 8;

const Calendar = () => {
  const [clickedDateTileIndex, setClickedDateTileIndex] = useState<number | null>(null);

  const today = new Date();

  const daysArray = Array.from({ length: DAYS_TO_SHOW }, (_, index) => {
    return addDays(today, index);
  });

  const formattedDaysArray = daysArray.map(day => {
    return {
      date: format(day, 'dd.MM.yy'),
      dayName: format(day, 'EEEE'),
      id: crypto.randomUUID(),
    };
  });

  const handleTileClick = (index: number) => {
    setClickedDateTileIndex(index);
  };

  return (
    <div className='flex overflow-auto gap-4 mb-4'>
      {formattedDaysArray.map((day, index) => (
        <DayTile
          key={day.id}
          date={day.date}
          dayName={day.dayName}
          isActive={clickedDateTileIndex === index}
          index={index}
          onClick={handleTileClick}
        />
      ))}
    </div>
  );
};

export default Calendar;
