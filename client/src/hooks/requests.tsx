import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const httpGetTasks = async () => {
  try {
    const allTasks = await axios.get(`${BASE_URL}/tasks`);
    return allTasks;
  } catch (error) {
    console.error(error);
  }
};

// const httpAddNewTask = async task => {
//   try {
//   } catch (error) {
//     console.error(error);
//   }
// };

export { httpGetTasks };
