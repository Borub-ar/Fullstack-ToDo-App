import { useState } from 'react';
import { format, addDays } from 'date-fns';

import DayTile from './DayTile';

const DAYS_TO_SHOW = 6;
const DATE_FORMAT = 'dd.MM.yy';
const DAY_NAME_FORMAT = 'EEEE';

type CalendarProps = {
  savePickedDay: (day: string) => void;
};

const Calendar = ({ savePickedDay }: CalendarProps) => {
  const [clickedDateTileIndex, setClickedDateTileIndex] = useState<number | null>(null);

  const today = new Date();

  const daysArray = Array.from({ length: DAYS_TO_SHOW }, (_, index) => {
    return addDays(today, index);
  });

  const formattedDaysArray = daysArray.map(day => {
    return {
      date: format(day, DATE_FORMAT),
      dayName: format(day, DAY_NAME_FORMAT),
      id: crypto.randomUUID(),
    };
  });

  const handleTileClick = (tileIndex: number, date: string) => {
    setClickedDateTileIndex(tileIndex);
    savePickedDay(date);
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
