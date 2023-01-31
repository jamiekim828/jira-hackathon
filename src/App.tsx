import { Routes, Route } from 'react-router-dom';
import './App.css';

import CreateProjectsPage from './pages/CreateProjectPage';
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
        <Route path='/projects/:projectId' element={<ProjectDetail />}></Route>
        <Route path='/create' element={<CreateProjectsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
