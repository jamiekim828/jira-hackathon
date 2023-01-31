import { Routes, Route } from 'react-router-dom';
import './App.css';

import CreateProjects from './pages/CreateProjects';
import ProjectDetail from './components/ProjectDetail';
import Main from './pages/Main';
import ProjectsList from './pages/ProjectsList';
import Login from './pages/LogIn';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/projects' element={<ProjectsList />}></Route>
        <Route path='/products/:id' element={<ProjectDetail />}></Route>
        <Route path='/create' element={<CreateProjects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
