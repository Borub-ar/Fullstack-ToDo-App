import DayTasksListing from './DayTasksListing';

const IncomingTasks = () => {
  return (
    <div className='bg-clr-primary rounded-l-xl w-72 p-6 h-full'>
      <p className='text-white text-xl font-bold mb-8'>Incoming Tasks</p>

      <div className='flex flex-col gap-4 overflow-auto'>
        <DayTasksListing />
        <DayTasksListing />
        <DayTasksListing />
        <DayTasksListing />
      </div>
    </div>
  );
};

export default IncomingTasks;
