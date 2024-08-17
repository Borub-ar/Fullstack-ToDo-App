type TaskTileProps = {
  taskData: {
    date: string;
    description: string;
    title: string;
    taskId: string;
  };
};

const TaskTile = ({ taskData }: TaskTileProps) => {
  return (
    <div className='bg-white rounded-lg p-3'>
      <p className='font-bold text-lg'>{taskData.title}</p>
      <p>{taskData.description}</p>
    </div>
  );
};

export default TaskTile;
