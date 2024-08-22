import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

type Task = {
  title: string;
  description: string;
  date: string;
};

const httpGetTasks = async () => {
  try {
    const allTasks = await axios.get(`${BASE_URL}/task`);
    return allTasks.data;
  } catch (error) {
    console.error(error);
    return {
      ok: false,
    };
  }
};

const httpCreateNewTask = async (task: Task) => {
  try {
    const newTask = await axios.post(`${BASE_URL}/task`, task);
    return newTask;
  } catch (error) {
    console.error(error);
    return {
      ok: false,
    };
  }
};

export { httpGetTasks, httpCreateNewTask };
