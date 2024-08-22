import { useState, useEffect, useCallback } from 'react';

import { httpGetTasks, httpCreateNewTask } from './requests';

import type { RequestTask } from '../types';


const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = useCallback(async () => {
    const response: any = await httpGetTasks();
    setTasks(response);
  }, []);

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks]);

  const createNewTask = async (task: RequestTask) => {
    const newTask = await httpCreateNewTask(task);
    return newTask;
  };

  return { tasks, createNewTask, getAllTasks };
};

export default useTasks;
