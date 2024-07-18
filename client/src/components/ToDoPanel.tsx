import Calendar from './Calendar';

const ToDoPanel = () => {
  return (
    <div className='relative -top-10 self-center bg-slate-800 rounded-xl w-4/5 h-full flex'>
      <h1 className='absolute -top-12 text-4xl font-bold text-white'>ToDo</h1>

      <div className='bg-clr-primary rounded-l-xl max-w-80 p-6 h-full'>
        <p className='text-white text-xl font-bold'>Incoming Tasks</p>
      </div>

      <div className='h-full grow p-5 overflow-hidden'>
        <Calendar />
      </div>
    </div>
  );
};

export default ToDoPanel;
