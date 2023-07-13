import './App.css';
import logoApp from './images/app-logo.png';
import TaskList from './components/task-list';

function App() {
  return (
    <div className="task-app">
      <div className='logo-container'>
        <img 
        src={logoApp}
        className='app-logo' 
        alt='Logo de la app'
        />
      </div>
      <div className='main-task-list'>
        <h1>Mis tareas</h1>
          <TaskList />
      </div>
    </div>
  );
}

export default App;
