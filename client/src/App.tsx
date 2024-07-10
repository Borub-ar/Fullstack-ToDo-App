import './App.css';

import ToDoPanel from './components/ToDoPanel';

function App() {
  return (
    <main className='h-dvh flex flex-col bg-slate-900'>
      <img src='../public/images/mountain-background.jpg' alt='Image of mountains' className='h-2/6 object-cover' />
      {/* <ToDoPanel></ToDoPanel> */}

      <footer className='mt-auto'>
        <p className='text-zinc-300 font-bold text-center p-4'>
          Created by <a href='https://github.com/Borub-ar'>Kacper Barabasz</a>
        </p>
      </footer>
    </main>
  );
}

export default App;
