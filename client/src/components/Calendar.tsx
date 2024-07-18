import { format, addDays } from 'date-fns';

import DayTile from './DayTile';

const Calendar = () => {
  const today = new Date();

  const daysArray = Array.from({ length: 10 }, (_, index) => {
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
    <div className='flex overflow-auto gap-4'>
      {formattedDaysArray.map(day => (
        <DayTile key={day.id} date={day.date} day={day.dayName} />
      ))}
    </div>
  );
};

export default Calendar;
