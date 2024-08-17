import TaskTile from '../Common/TaskTile';
import Overlay from '../Common/Overlay';

import type { DatabaseTask } from '../../types';

type TasksPanelProps = {
  tasks: DatabaseTask[];
};

const TasksPanel = ({ tasks = [] }: TasksPanelProps) => {
  return (
    <div className='relative bg-slate-600 h-full rounded-md p-4 flex flex-col gap-4 border-2 border-cyan-50 border-solid w-full'>
      <h2 className='font-bold text-2xl text-white'>Tasks</h2>

      <div className='flex flex-col gap-4 overflow-y-auto'>
        {tasks.map(task => (
          <TaskTile taskData={task} />
        ))}
      </div>

      {tasks.length === 0 && (
        <Overlay>
          <p className='text-white font-bold text-xl mt-6'>EMPTY</p>
        </Overlay>
      )}
    </div>
  );
};

export default TasksPanel;
