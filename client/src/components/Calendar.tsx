import { format, addDays } from 'date-fns';

const Calendar = () => {
  const today = new Date();

  const daysArray = Array.from({ length: 6 }, (_, index) => {
    return addDays(today, index);
  });

  return <div>{daysArray.map((day, index) => (
        <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h3>{format(day, 'EEEE')}</h3>
          <p>{format(day, 'dd/MM/yyyy')}</p>
        </div>
      ))}</div>;
};

export default Calendar;
