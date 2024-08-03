type DayTileProps = {
  date: string;
  dayName: string;
  isActive: boolean;
  index: number;
  onClick: (tileIndex: number, date: string) => void;
};

const DayTile = ({ date, dayName, isActive, onClick, index }: DayTileProps) => {
  return (
    <button
      onClick={() => onClick(index, date)}
      className={`p-3 rounded-md flex flex-col border-4 border-solid items-center bg-white ${
        isActive ? ' border-clr-red' : 'border-white'
      }`}>
      <p className={`font-bold text-2xl ${dayName === 'Sunday' ? 'text-clr-red ' : ''}`}>{dayName}</p>
      <p className='text-stone-800 font-semibold'>{date}</p>
    </button>
  );
};

export default DayTile;
