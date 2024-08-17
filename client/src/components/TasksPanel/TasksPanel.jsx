import TaskTike from '../TaskTile';

const TasksPanel = () => {
  return (
    <div className='relative bg-slate-600 h-full rounded-md p-4 flex flex-col gap-4 border-2 border-cyan-50 border-solid w-full'>
      <h2 className='font-bold text-2xl text-white'>Tasks</h2>

      <div className='flex flex-col gap-4 overflow-y-auto'>
        <TaskTike />
        <TaskTike />
        <TaskTike />
      </div>
    </div>
  );
};

export default TasksPanel;
