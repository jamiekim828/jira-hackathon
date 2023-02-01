import { Routes, Route } from 'react-router-dom';
import './App.css';

import CreateProjectsPage from './pages/CreateProjectPage';
import ProjectDetail from './components/ProjectDetail';
import Main from './pages/Main';
// import ProjectsList from './pages/ProjectsList';
import ProjectsList from './components/ProjectsList';

import Login from './pages/LogIn';
import SideBar from './components/SideBar';
import Users from './components/Users';

// projects={[]}
// sorry I removed this error for deploy after deploy link is build will add it again

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
        <Route path='/users' element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
