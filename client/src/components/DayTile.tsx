type DayTileProps = {
  date: string;
  dayName: string;
};

const DayTile = ({ date, dayName }: DayTileProps) => {
  return (
    <button className='p-3 border-solid bg-white rounded-md flex flex-col items-center'>
      <p className={`font-bold text-2xl ${dayName === 'Sunday' ? 'text-red-600' : ''}`}>{dayName}</p>
      <p className='text-stone-800'>{date}</p>
    </button>
  );
};

export default DayTile;
