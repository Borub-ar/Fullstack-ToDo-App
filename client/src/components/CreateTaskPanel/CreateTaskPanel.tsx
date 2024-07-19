const CreateTaskPanel = () => {
  return (
    <form className='bg-slate-600 h-full rounded-md p-4 w-1/2 flex flex-col gap-4 border-2 border-cyan-50 border-solid'>
      <p className='font-bold text-2xl text-white'>Create New Task</p>

      <label htmlFor='title'>Task Type</label>
      <input id='title' type='text' />

      <label htmlFor='description'>Task Type</label>
      <input id='description' type='text' />

      <label htmlFor='type'>Task Type</label>
      <input id='type' type='text' />
    </form>
  );
};

export default CreateTaskPanel;
