import { useEffect } from 'react';

import { httpCreateNewTask } from './requests';

type Task = {
  title: string;
  description: string;
  date: string;
};

const useCreateNewTask = (task: Task) => {
  const createNewTask = async () => {
    await httpCreateNewTask(task);
  };

  useEffect(() => {
    createNewTask();
  }, []);
};

export default useCreateNewTask;
