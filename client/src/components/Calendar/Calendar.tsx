import { useState } from 'react';
import { format, addDays } from 'date-fns';

import DayTile from './DayTile';

const DAYS_TO_SHOW = 20;
const DATE_FORMAT = 'dd.MM.yy';
const DAY_NAME_FORMAT = 'EEEE';

type DatabaseTask = {
  date: string;
  description: string;
  title: string;
  taskId: string;
};

type CalendarProps = {
  setDateData: (day: string, tasks: DatabaseTask[]) => void;
  tasks: DatabaseTask[];
};

const Calendar = ({ setDateData, tasks }: CalendarProps) => {
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
    const pickedDateTasks = findAllTasks(date);

    setClickedDateTileIndex(tileIndex);
    setDateData(date, pickedDateTasks);
  };

  return (
    <div className='flex gap-4 mb-4'>
      {formattedDaysArray.map((day, index) => (
        <DayTile
          key={day.id}
          date={day.date}
          dayName={day.dayName}
          dayTasks={day.dayTasks}
          isActive={clickedDateTileIndex === index}
          index={index}
          onClick={handleTileClick}
        />
      ))}
    </div>
  );
};

export default Calendar;
