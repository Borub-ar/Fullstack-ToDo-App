import { format, addDays } from 'date-fns';

import DayTile from './DayTile';

const DAYS_TO_SHOW = 5;

const Calendar = () => {
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

  return (
    <div className='flex overflow-auto gap-4 mb-4'>
      {formattedDaysArray.map(day => (
        <DayTile key={day.id} date={day.date} dayName={day.dayName} />
      ))}
    </div>
  );
};

export default Calendar;
