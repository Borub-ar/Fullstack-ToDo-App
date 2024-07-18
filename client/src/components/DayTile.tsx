type DayTileProps = {
  date: string;
  day: string;
};

const DayTile = ({ date, day }: DayTileProps) => {                     
  return <button className='p-3 border-solid bg-white rounded-md flex flex-col items-center'>
    <p>{day}</p>
    <p>{date}</p>
  </button>;
};

export default DayTile;
