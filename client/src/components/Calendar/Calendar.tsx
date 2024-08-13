import { useState } from 'react';
import { format, addDays } from 'date-fns';

import DayTile from './DayTile';

const DAYS_TO_SHOW = 6;
const DATE_FORMAT = 'dd.MM.yy';
const DAY_NAME_FORMAT = 'EEEE';

type DatabaseTask = {
  date: string;
  description: string;
  title: string;
  taskId: string;
};

type CalendarProps = {
  savePickedDay: (day: string) => void;
  tasks: DatabaseTask[];
};

const Calendar = ({ savePickedDay, tasks }: CalendarProps) => {
  const [clickedDateTileIndex, setClickedDateTileIndex] = useState<number | null>(null);

  const today = new Date();

  const findAllTasks = (date: string) => {
    return tasks.filter(task => task.date === date);
  };

  const daysArray = Array.from({ length: DAYS_TO_SHOW }, (_, index) => {
    return addDays(today, index);
  });

  const formattedDaysArray = daysArray.map(day => {
    const formattedDate = format(day, DATE_FORMAT);

    return {
      date: formattedDate,
      dayName: format(day, DAY_NAME_FORMAT),
      dayTasks: findAllTasks(formattedDate),
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
