import { useState, useEffect } from 'react';

import { httpGetTasks } from './requests';

function useGetAllTasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response: any = await httpGetTasks();
    setTasks(response);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return tasks;
}

export default useGetAllTasks;
